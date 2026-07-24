// Generate the capability map: every JS component UIkit registers, one line each,
// plus the features added after a typical model's knowledge cut-off.
//   node build-capability-map.mjs <index.json> <uikit-checkout> <uikit-site-checkout> <out.md>
import fs from 'fs';
import path from 'path';

const [IX_PATH, UK, SITE, OUT] = process.argv.slice(2);
const IX = JSON.parse(fs.readFileSync(IX_PATH, 'utf8'));

// one-liners come from the docs pages themselves (<p class="uk-text-lead">)
const leads = {};
for (const f of fs.readdirSync(path.join(SITE, 'docs/pages')).filter((f) => f.endsWith('.md'))) {
  const m = fs.readFileSync(path.join(SITE, 'docs/pages', f), 'utf8').match(/<p class="uk-text-lead">([\s\S]*?)<\/p>/);
  if (m) leads[f.replace(/\.md$/, '')] = m[1].replace(/\s+/g, ' ').trim();
}
// components whose docs live on another page, or which have none
const PAGE = {
  'uk-drop': 'drop', 'uk-dropdown': 'dropdown', 'uk-dropnav': 'dropnav', 'uk-form-custom': 'form',
  'uk-height-match': 'height', 'uk-height-viewport': 'height', 'uk-height-placeholder': 'height',
  'uk-img': 'image', 'uk-overflow-auto': 'utility', 'uk-responsive': 'utility',
};
const HAND = {
  'uk-overflow-fade': 'Fade out the edges of a scrollable container to hint at more content.',
  'uk-scrollspy-nav': 'Highlight the nav link whose section is currently in view.',
  'uk-lightbox-panel': 'The lightbox overlay itself; options set on uk-lightbox are forwarded here.',
  'uk-slider-parallax': 'Move slide content at a different speed than the slide.',
  'uk-slideshow-parallax': 'Move slide content at a different speed than the slide.',
};
const ICON_SHORTHAND = ['uk-accordion-icon', 'uk-drop-parent-icon', 'uk-nav-parent-icon',
  'uk-navbar-parent-icon', 'uk-navbar-toggle-icon', 'uk-overlay-icon', 'uk-pagination-next',
  'uk-pagination-previous', 'uk-search-icon', 'uk-slidenav-next', 'uk-slidenav-previous',
  'uk-marker', 'uk-spinner', 'uk-totop', 'uk-close'];

// An option shared by half the components (animation, offset, duration...) says
// nothing about what a component is for. Rank by rarity and keep the distinctive ones.
const df = {};
for (const def of Object.values(IX.components)) for (const p of new Set(def.props)) df[p] = (df[p] ?? 0) + 1;

const rows = [];
for (const [attr, def] of Object.entries(IX.components)) {
  if (ICON_SHORTHAND.includes(attr)) continue;
  const base = attr.replace(/^uk-/, '');
  const desc = HAND[attr] ?? leads[PAGE[attr] ?? base] ?? '';
  const opts = def.props
    .filter((p) => !/^(cls|sel|i18n|role|container)/.test(p) && df[p] <= 6)
    .sort((a, b) => df[a] - df[b] || a.localeCompare(b))
    .slice(0, 6);
  rows.push({ attr, desc: desc.replace(/\.$/, ''), opts, args: def.args });
}

// features added after ~2024 — where a model's memory is most likely stale
const added = [];
{
  const cl = fs.readFileSync(path.join(UK, 'CHANGELOG.md'), 'utf8');
  let v = null;
  for (const line of cl.split('\n')) {
    const mv = line.match(/^## (3\.(?:1[7-9]|2\d)\.\d+)/);
    if (mv) { v = mv[1]; continue; }
    if (!v) continue;
    if (/^### Added/.test(line)) { added.push({ v, open: true }); continue; }
    if (/^### /.test(line)) { if (added.at(-1)) added.at(-1).open = false; continue; }
    if (added.at(-1)?.open && line.startsWith('- ')) added.push({ v, text: line.slice(2), open: true });
  }
}

const out = [];
out.push('# UIkit capability map\n');
out.push(`UIkit ${IX.version}. Every attribute below is a real registered component.`);
out.push('Before writing any custom CSS or JS, check whether one of these already does it.\n');
out.push('| attribute | what it does | key options |');
out.push('|---|---|---|');
for (const r of rows.sort((a, b) => a.attr.localeCompare(b.attr))) {
  const shorthand = r.args.length ? ` _(shorthand: \`${r.attr}="${r.args[0]} value"\`)_` : '';
  out.push(`| \`${r.attr}\` | ${r.desc}${shorthand} | ${r.opts.map((o) => `\`${o}\``).join(' ') || '—'} |`);
}
out.push(`\nIcon shorthands (each renders one icon, no options): ${ICON_SHORTHAND.map((i) => `\`${i}\``).join(', ')}.\n`);
out.push('## Added since 3.17 — most likely missing from memory\n');
const NOISE = /(icon|variable|docs|build|i18n|argument|command|support for `|WAI-ARIA|`fragment)/i;
const NEW = /^Add(?!ed)/;
for (const a of added.filter((a) => a.text && NEW.test(a.text) && !NOISE.test(a.text))) {
  out.push(`- **${a.v}** ${a.text}`);
}
fs.writeFileSync(OUT, out.join('\n') + '\n');
console.log(`${OUT}: ${rows.length} components, ${added.filter((a) => a.text).length} changelog entries, ` +
  `${Math.round(fs.statSync(OUT).size / 4)} tokens approx`);
