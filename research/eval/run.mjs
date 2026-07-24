import fs from 'fs'; import { makeScorer } from './score.mjs';
const [ixPath, tasksPath, dir] = process.argv.slice(2);
const score = makeScorer(ixPath);
const tasks = JSON.parse(fs.readFileSync(tasksPath, 'utf8'));
let pen = 0, cap = 0, capN = 0; const agg = {};
for (const t of tasks) {
  const f = `${dir}/${t.id}.html`;
  if (!fs.existsSync(f)) { console.log(`${t.id}  MISSING`); continue; }
  const r = score(fs.readFileSync(f, 'utf8'), { fragment: t.full_page === false, file: t.id, requires: t.requires ?? [] });
  pen += r.penalty; if (r.capability !== null) { cap += r.capability; capN++; }
  const detail = r.violations.map(v => v.code + (/invent|breakpoint|missed|foreign/.test(v.code) ? `(${v.detail})` : '')).join(', ');
  console.log(`${t.id}  pen=${String(r.penalty).padStart(5)}  cap=${r.capability ?? '-'}  ${detail || 'CLEAN'}`);
  for (const v of r.violations) agg[v.code] = (agg[v.code] || 0) + 1;
}
console.log(`\nTOTAL penalty ${pen.toFixed(1)}  |  capability ${capN ? (100 * cap / capN).toFixed(0) + '%' : 'n/a'}  over ${tasks.length} tasks`);
console.log('by code:', Object.entries(agg).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}=${v}`).join(' '));
