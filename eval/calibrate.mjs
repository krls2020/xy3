// The checker must stay quiet on markup that is idiomatic by definition: the live
// examples in the official documentation. Anything it flags here is either a false
// positive to fix, or a genuine bug in the docs — both worth knowing.
//   node eval/calibrate.mjs <uikit-site-checkout>
import fs from 'fs';
import path from 'path';
import { makeChecker } from '../.claude/skills/uikit/lib/check.mjs';

const SITE = process.argv[2];
if (!SITE) throw new Error('usage: calibrate.mjs <uikit-site-checkout>');
const check = makeChecker();

const blocks = [];
for (const f of fs.readdirSync(path.join(SITE, 'docs/pages')).filter((f) => f.endsWith('.md'))) {
  const md = fs.readFileSync(path.join(SITE, 'docs/pages', f), 'utf8');
  for (const m of md.matchAll(/```example\n([\s\S]*?)```/g)) blocks.push({ page: f.replace(/\.md$/, ''), html: m[1] });
}

const counts = {};
for (const b of blocks) {
  for (const v of check(b.html, { fragment: true }).violations) (counts[v.code] ??= []).push(`${b.page}: ${v.detail}`);
}
console.log(`${blocks.length} official live examples scored`);
for (const [code, hits] of Object.entries(counts).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`${String(hits.length).padStart(4)}  ${code}\n        ${hits.slice(0, 3).join('\n        ')}`);
}
if (!Object.keys(counts).length) console.log('completely clean');
