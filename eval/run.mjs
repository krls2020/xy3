// Score a directory of generated pages with the same checker the skill ships.
//   node eval/run.mjs <tasks.json> <dir-of-pages>
import fs from 'fs';
import { makeChecker } from '../.claude/skills/uikit/lib/check.mjs';

const [tasksPath, dir] = process.argv.slice(2);
const check = makeChecker();
const tasks = JSON.parse(fs.readFileSync(tasksPath, 'utf8'));

let penalty = 0, capSum = 0, capN = 0, missing = 0;
const byCode = {};
for (const t of tasks) {
  const f = `${dir}/${t.id}.html`;
  if (!fs.existsSync(f)) { console.log(`${t.id}  MISSING`); missing++; continue; }
  const r = check(fs.readFileSync(f, 'utf8'),
    { fragment: t.full_page === false, file: t.id, requires: t.requires ?? [] });
  penalty += r.penalty;
  if (r.capability !== null) { capSum += r.capability; capN++; }
  const detail = r.violations
    .map((v) => v.code + (/invent|breakpoint|missed|foreign/.test(v.code) ? `(${v.detail})` : ''))
    .join(', ');
  console.log(`${t.id}  pen=${String(r.penalty).padStart(5)}  cap=${r.capability ?? '-'}  ${detail || 'CLEAN'}`);
  for (const v of r.violations) byCode[v.code] = (byCode[v.code] ?? 0) + 1;
}
console.log(`\nTOTAL penalty ${penalty.toFixed(1)}  |  capability ` +
  `${capN ? `${(100 * capSum / capN).toFixed(0)}%` : 'n/a'}  |  ${tasks.length - missing}/${tasks.length} pages`);
console.log('by code:', Object.entries(byCode).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}=${v}`).join(' ') || '(none)');
