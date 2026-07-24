// Extract the official documentation's code blocks into a lookup corpus.
// These are the snippets rendered live on getuikit.com, so they are idiomatic by
// construction — the agent gets a real example instead of an invented one.
//
//   node build-examples.mjs <uikit-site-checkout> <out.json>
import fs from 'fs';
import path from 'path';

const [SITE, OUT = 'examples.json'] = process.argv.slice(2);
if (!SITE) throw new Error('usage: build-examples.mjs <uikit-site-checkout> [out.json]');

const dir = path.join(SITE, 'docs/pages');
const byPage = {};
let total = 0;

for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
  const page = f.replace(/\.md$/, '');
  const md = fs.readFileSync(path.join(dir, f), 'utf8');
  const blocks = [];
  // ```example blocks render live on the docs site; ```html blocks are the
  // minimal "this is the markup" form. Both are authored by the maintainers.
  for (const m of md.matchAll(/```(html|example)\n([\s\S]*?)```/g)) {
    const html = m[2].trim();
    if (!html || html.length > 4000) continue;
    // the nearest preceding heading is the best label we have for what it shows
    const before = md.slice(0, m.index);
    const heading = [...before.matchAll(/^#{2,3} (.+)$/gm)].at(-1)?.[1]?.trim() ?? page;
    blocks.push({ live: m[1] === 'example', heading, html });
  }
  if (blocks.length) { byPage[page] = blocks; total += blocks.length; }
}

fs.writeFileSync(OUT, JSON.stringify(byPage));
console.log(`${OUT}: ${total} snippets across ${Object.keys(byPage).length} pages ` +
  `(${Math.round(fs.statSync(OUT).size / 1024)} KB on disk, loaded only on demand)`);
