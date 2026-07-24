import fs from 'fs'; import { score } from './score.mjs';
const dir = process.argv[2];
const files = fs.readdirSync(dir).filter(f=>f.endsWith('.html')).sort();
let total=0; const agg={};
for (const f of files) {
  const r = score(fs.readFileSync(`${dir}/${f}`,'utf8'), { fragment: f.startsWith('t15'), file:f });
  total += r.penalty;
  console.log(`${f}  penalty=${String(r.penalty).padStart(5)}  ${r.violations.map(v=>v.code+(v.detail&&v.code.match(/halluc|icon|breakpoint|foreign|option/)?`(${v.detail})`:'')).join(', ')||'CLEAN'}`);
  for (const v of r.violations) agg[v.code]=(agg[v.code]||0)+1;
}
console.log(`\nTOTAL penalty ${total} over ${files.length} files (avg ${(total/files.length).toFixed(1)})`);
console.log('by code:', Object.entries(agg).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`${k}=${v}`).join(' '));
