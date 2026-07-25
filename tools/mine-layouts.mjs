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

// Saved pages arrive as one folder per demo, each with its own _files/ asset dump
// alongside screenshots. Walk the tree and take only the markup.
const PAGE = /\.(html?|svelte|vue|twig|php)$/i;
const SKIP = /^(node_modules|\.git|__MACOSX)$/;
const IMAGE = /\.(png|jpe?g|webp|avif|gif|pdf)$/i;

let images = 0;
function walk(target) {
  const st = fs.statSync(target);
  if (st.isFile()) {
    if (IMAGE.test(target)) images++;
    return PAGE.test(target) ? [target] : [];
  }
  return fs.readdirSync(target).flatMap((entry) => (SKIP.test(entry) ? [] : walk(path.join(target, entry))));
}
const files = dirs.flatMap(walk);

if (!files.length) {
  console.log('No saved pages found. This tool reads markup — see demos/HANDOFF.md for what to drop in.');
  if (images) console.log(`(${images} images are here, but screenshots have to be read by an agent, not mined.)`);
  process.exit(0);
}

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

console.log(`mined ${files.length} pages` + (images ? `; ${images} screenshots left for an agent to read` : ''));
show('recurring class bundles', bundles, 40);
show('recurring parent > child structures', nesting, 25);
show('section rhythm, page by page', sequences, 15);
console.log('\nStructure only — no text, imagery or styling was read from these pages.');
