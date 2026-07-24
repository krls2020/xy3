// Mine structural idioms from real, professionally built UIkit pages.
//
//   node tools/mine-layouts.mjs <dir-of-.html-files…>
//
// Every page is first reduced to a skeleton — tag name plus uk-* classes and uk-*
// attributes, nothing else. Text, images, colours, copy and any non-uk class are
// dropped before anything is counted, so what comes out is structure and never
// somebody's content or visual design.
import fs from 'fs';
import path from 'path';
import { parse } from '../.claude/skills/uikit/lib/parse.mjs';

const dirs = process.argv.slice(2);
if (!dirs.length) throw new Error('usage: mine-layouts.mjs <dir…>');

const files = dirs.flatMap((d) => {
  const st = fs.statSync(d);
  if (st.isFile()) return [d];
  return fs.readdirSync(d).filter((f) => /\.(html?|svelte|vue|twig|php)$/i.test(f)).map((f) => path.join(d, f));
});
if (!files.length) { console.log('no pages found — drop .html files in and run again'); process.exit(0); }

const bundles = new Map();   // uk-* classes co-occurring on one element
const sequences = new Map(); // section-level rhythm, page by page
const nesting = new Map();   // parent-bundle > child-bundle

const key = (n) => n.classes.filter((c) => c.startsWith('uk-')).sort().join(' ');
const bump = (m, k) => k && m.set(k, (m.get(k) ?? 0) + 1);

for (const f of files) {
  const doc = parse(fs.readFileSync(f, 'utf8'));
  const sections = [];
  for (const n of doc.nodes) {
    const k = key(n);
    const ukAttrs = Object.keys(n.attrs).filter((a) => a.startsWith('uk-'));
    if (k.split(' ').length > 1) bump(bundles, k + (ukAttrs.length ? ` [${ukAttrs.join(' ')}]` : ''));
    if (n.parent) {
      const pk = key(n.parent);
      if (pk && k) bump(nesting, `${pk}  >  ${k}`);
    }
    const section = n.classes.filter((c) => /^uk-(section|tile)(-|$)/.test(c)).sort().join(' ');
    if (section) sections.push(section);
  }
  if (sections.length > 1) bump(sequences, sections.join('  →  '));
}

const top = (m, n) => [...m].sort((a, b) => b[1] - a[1]).slice(0, n);
const show = (title, m, n) => {
  console.log(`\n## ${title}`);
  for (const [k, c] of top(m, n)) console.log(`${String(c).padStart(4)}  ${k}`);
};

console.log(`mined ${files.length} pages`);
show('recurring class bundles', bundles, 40);
show('recurring parent > child structures', nesting, 25);
show('section rhythm, page by page', sequences, 15);
console.log('\nStructure only — no text, imagery or styling was read from these pages.');
