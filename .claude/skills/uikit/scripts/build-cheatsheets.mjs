#!/usr/bin/env node
// Regenerate references/components/*.md and references/_index.md from the
// official UIkit documentation, so class/attribute names stay verbatim-accurate.
//
// Usage:
//   1. Clone the sources somewhere:
//        git clone --depth 1 https://github.com/uikit/uikit-site   # docs
//        git clone --depth 1 https://github.com/uikit/uikit        # code + tests
//   2. Point the script at them and run:
//        UIKIT_SITE=/path/to/uikit-site UIKIT=/path/to/uikit \
//          node scripts/build-cheatsheets.mjs
//
// Env vars (all optional if the two repos sit next to this checkout):
//   UIKIT_SITE  path to a uikit-site clone   (docs at $UIKIT_SITE/docs/pages)
//   UIKIT       path to a uikit clone        (tests + src)
//   OUT         output dir (default: ../references relative to this script)

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SITE = process.env.UIKIT_SITE || join(HERE, '../../../../uikit-site');
const UIKIT = process.env.UIKIT || join(HERE, '../../../../uikit');
const REFS = process.env.OUT || join(HERE, '../references');

const DOCS = join(SITE, 'docs/pages');
const TESTS = join(UIKIT, 'tests');
const SRC = join(UIKIT, 'src');
const OUT = join(REFS, 'components');

for (const p of [DOCS, SRC]) if (!existsSync(p)) {
  console.error(`Missing source: ${p}\nSet UIKIT_SITE and UIKIT env vars (see header).`);
  process.exit(1);
}
mkdirSync(OUT, { recursive: true });

const META_PAGES = new Set(['introduction','installation','javascript','less','sass','webpack','avoiding-conflicts','accessibility','rtl','custom-icons','migration']);

const CATEGORY = {
  Layout: ['align','column','container','cover','flex','grid','height','margin','padding','position','section','visibility','width'],
  Navigation: ['breadcrumb','dotnav','dropnav','iconnav','nav','navbar','pagination','slidenav','subnav','tab','thumbnav','totop'],
  Media: ['image','lightbox','parallax','slider','slideshow','video'],
  Forms: ['form','search','upload'],
  Content: ['accordion','alert','article','badge','card','close','comment','countdown','description-list','divider','heading','label','leader','list','marker','placeholder','progress','spinner','table','tile'],
  Utilities: ['animation','background','base','inverse','link','overlay','print','transition','utility','icon','svg','text'],
  Interactive: ['drop','dropbar','dropdown','filter','modal','notification','offcanvas','scroll','scrollspy','sortable','sticky','switcher','toggle','tooltip'],
};
const catOf = (name) => Object.entries(CATEGORY).find(([, l]) => l.includes(name))?.[0] || 'Content';
const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const stripTags = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const componentPages = readdirSync(DOCS).filter(f => f.endsWith('.md'))
  .map(f => f.replace(/\.md$/, '')).filter(n => !META_PAGES.has(n)).sort();

function extractLead(t) { const m = t.match(/<p class="uk-text-lead">([\s\S]*?)<\/p>/); return m ? stripTags(m[1]) : ''; }
function extractTables(text) {
  const lines = text.split('\n'); const tables = []; let i = 0;
  while (i < lines.length) {
    if (/^\s*\|.*\|\s*$/.test(lines[i]) && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      const block = []; while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) { block.push(lines[i]); i++; }
      const cells = (r) => r.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
      tables.push({ header: cells(block[0]), rows: block.slice(2).map(cells), raw: block.join('\n') });
    } else i++;
  }
  return tables;
}
function section(text, title) { const m = text.match(new RegExp(`\\n##\\s+${title}\\s*\\n([\\s\\S]*?)(?=\\n##\\s|$)`, 'i')); return m ? m[1].trim() : ''; }
function firstFence(text, langs) { for (const lang of langs) { const m = new RegExp('```' + lang + '\\n([\\s\\S]*?)```', 'g').exec(text); if (m) return m[1].replace(/\n+$/, ''); } return ''; }
function proseOnly(md) {
  let s = md.replace(/```[\s\S]*?```/g, '').replace(/<p class="uk-text-lead">[\s\S]*?<\/p>/g, '');
  s = s.split('\n').filter(l => !/^\s*\|/.test(l)).join('\n');
  const out = [];
  for (let p of s.split(/\n\s*\n/).map(x => x.trim()).filter(Boolean)) {
    if (/^\*{3}/.test(p) || /^#{1,6}\s/.test(p)) continue;
    p = p.replace(/<[^>]+>/g, '').trim(); if (!p) continue;
    out.push(p); if (out.join(' ').length > 320 || out.length >= 2) break;
  }
  return out.join('\n\n');
}
function crossRefs(text, self) {
  const refs = new Set(); const re = /\]\(([a-z0-9-]+)\.md(?:#[^)]*)?\)/g; let m;
  while ((m = re.exec(text))) { const n = m[1]; if (n !== self && !META_PAGES.has(n) && componentPages.includes(n)) refs.add(n); }
  return [...refs].slice(0, 8);
}

const metadata = [];
for (const name of componentPages) {
  const text = readFileSync(join(DOCS, `${name}.md`), 'utf8');
  const title = (text.match(/^#\s+(.+)$/m) || [, name])[1].trim();
  const lead = extractLead(text); const category = catOf(name);
  const hasSrc = existsSync(join(SRC, `js/core/${name}.js`)) || existsSync(join(SRC, `js/components/${name}.js`));
  const jsComponent = hasSrc || !!section(text, 'Component options') || /### Initialization/.test(text);
  const modifierTables = extractTables(text).filter(t => /class/i.test(t.header[0]));
  const optionsTables = extractTables(text).filter(t => /option/i.test(t.header[0]));
  const usage = proseOnly(section(text, 'Usage') || text.split(/\n##\s/)[0]);
  const markup = firstFence(text, ['html', 'example']);
  const testHtml = existsSync(join(TESTS, `${name}.html`));
  const refs = crossRefs(text, name);

  let md = `# ${title}\n> ${lead || 'UIkit component.'}  ·  Category: **${category}**${jsComponent ? '  ·  JS component' : ''}\n\n`;
  md += `<sub>Source: [getuikit.com/docs/${name}](https://getuikit.com/docs/${name}) · demo: ${testHtml ? `\`tests/${name}.html\`` : '—'}</sub>\n\n`;
  if (usage) md += `## Usage\n\n${usage}\n\n`;
  if (modifierTables.length) { md += `## Classes & modifiers\n\n`; for (const t of modifierTables) md += t.raw + '\n\n'; }
  if (jsComponent) {
    md += `## JavaScript\n\nActivate with the \`uk-${name}\` attribute (no JS needed). Programmatic: \`UIkit.${camel(name)}(element, options)\`.\n\n`;
    if (optionsTables.length) { md += `**Component options** (set in the attribute, e.g. \`uk-${name}="option: value"\`):\n\n`; for (const t of optionsTables) md += t.raw + '\n\n'; }
  }
  if (markup) md += `## Markup\n\n\`\`\`html\n${markup}\n\`\`\`\n\n`;
  if (refs.length) md += `## See also\n\n` + refs.map(r => `[${r}](${r}.md)`).join(' · ') + '\n';
  writeFileSync(join(OUT, `${name}.md`), md);
  metadata.push({ name, title, category, purpose: lead, jsComponent });
}

// ---- _index.md ----
const ORDER = ['Layout','Navigation','Media','Forms','Content','Utilities','Interactive'];
const byCat = Object.fromEntries(ORDER.map(c => [c, []]));
for (const m of metadata) byCat[m.category].push(m);
let idx = '# UIkit component index\n\nFull catalog of component cheat-sheets at `references/components/<name>.md`. **(JS)** marks an interactive JavaScript component.\n\n';
idx += '## Principle references\n\n| File | Covers |\n|---|---|\n';
idx += '| `setup.md` | CDN/npm install, HTML boilerplate, custom builds |\n| `javascript.md` | The `uk-*` attribute system, options, events, API |\n| `layout-system.md` | Container → Grid → Width → Flex, spacing, breakpoints |\n| `utilities.md` | Text, background, transitions, animation, inverse |\n| `theming.md` | LESS/SCSS variables and hooks |\n| `icons.md` | SVG icon library, custom icons |\n| `accessibility-rtl.md` | ARIA handling + RTL builds |\n| `conflicts-and-scope.md` | Prefixes and `.uk-scope` |\n| `migration.md` | Renamed classes / breaking changes |\n\n---\n\n## Components by category\n\n';
for (const c of ORDER) { idx += `### ${c} (${byCat[c].length})\n\n`; for (const m of byCat[c].sort((a, b) => a.name.localeCompare(b.name))) idx += `- **${m.name}**${m.jsComponent ? ' _(JS)_' : ''} — ${m.purpose} → \`components/${m.name}.md\`\n`; idx += '\n'; }
idx += '---\n\n## Alphabetical\n\n' + [...metadata].sort((a, b) => a.name.localeCompare(b.name)).map(m => `\`${m.name}\``).join(' · ') + '\n';
writeFileSync(join(REFS, '_index.md'), idx);

console.log(`Wrote ${metadata.length} cheat-sheets + _index.md`);
console.log(`JS components: ${metadata.filter(m => m.jsComponent).length}`);
