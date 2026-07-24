import fs from 'fs'; import path from 'path';
const UK = new URL('../uikit/', import.meta.url).pathname;
const css = fs.readFileSync(path.join(UK,'dist/css/uikit.css'),'utf8');
const exact = new Set([...css.matchAll(/\.(uk-[a-zA-Z0-9\\@_-]+)/g)].map(m=>m[1].replace(/\\/g,'')));
const families = new Set([...css.matchAll(/\[class\*=["'](uk-[a-z0-9-]+)["']\]/g)].map(m=>m[1]));
// manifest names
const manifest = {}; const declared = new Set();
for (const d of ['src/less/components','src/less/theme']) {
  const dir = path.join(UK,d); if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter(f=>f.endsWith('.less'))) {
    const head = fs.readFileSync(path.join(dir,f),'utf8').split('// ====')[0];
    const comp = f.replace(/\.less$/,''); manifest[comp] ??= {}; let cur=null;
    for (const line of head.split('\n')) {
      if (!line.startsWith('//')) continue;
      const m = line.match(/^\/\/\s*([A-Za-z-]+):\s*(.*)$/);
      const rest = m ? (cur = m[1].toLowerCase(), m[2]) : line.replace(/^\/\/\s*/,'');
      if (!cur) continue;
      for (const n of rest.matchAll(/`(uk-[a-z0-9-]+)`/g)) { (manifest[comp][cur] ??= []).push(n[1]); declared.add(n[1]); }
    }
  }
}
// js-applied classes
const js = fs.readFileSync(path.join(UK,'dist/js/uikit.js'),'utf8');
const jsCls = new Set([...js.matchAll(/["'`](uk-[a-z0-9-]+)["'`]/g)].map(m=>m[1]));
const union = new Set([...exact, ...declared, ...jsCls]);
const inFamily = c => [...families].some(f => c.startsWith(f));
const blocks = JSON.parse(fs.readFileSync('../docs-corpus.json','utf8'));
const used = new Map();
for (const b of blocks) for (const m of b.html.matchAll(/class="([^"]*)"/g)) for (const c of m[1].split(/\s+/)) if (/^uk-/.test(c)) used.set(c,(used.get(c)||0)+1);
const missing = [...used.keys()].filter(c=>!union.has(c) && !inFamily(c));
console.log('exact',exact.size,'declared',declared.size,'js',jsCls.size,'union',union.size,'families',families.size);
console.log('docs classes unresolved:', missing.length, missing.join(' '));
fs.writeFileSync('../truth-v2.json', JSON.stringify({exact:[...exact].sort(), declared:[...declared].sort(), jsCls:[...jsCls].sort(), families:[...families].sort(), manifest}, null, 1));
