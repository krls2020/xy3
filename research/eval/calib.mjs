import fs from 'fs'; import { score } from './score.mjs';
const blocks = JSON.parse(fs.readFileSync('../docs-corpus.json','utf8')).filter(b=>b.kind==='example');
const counts = {};
for (const b of blocks) for (const v of score(b.html,{fragment:true}).violations) (counts[v.code] ??= []).push(`${b.page}:${v.detail}`);
console.log('scored', blocks.length, 'official examples');
for (const [k,v] of Object.entries(counts).sort((a,b)=>b[1].length-a[1].length))
  console.log(`${String(v.length).padStart(4)}  ${k}  e.g. ${v.slice(0,3).join(' | ').slice(0,150)}`);
