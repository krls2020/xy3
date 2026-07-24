// Extract UIkit's LESS variables so theming can be done by setting the variable
// UIkit already exposes, instead of overriding compiled CSS.
//
//   node build-theme.mjs <uikit-checkout> <out.json>
//
// Globals (src/less/components/variables.less) drive everything else and are worth
// knowing by heart; the per-component variables are a lookup.
import fs from 'fs';
import path from 'path';

const [UK, OUT = 'theme.json'] = process.argv.slice(2);
if (!UK) throw new Error('usage: build-theme.mjs <uikit-checkout> [out.json]');

const VAR = /^(@[a-z0-9-]+):\s*(.+?);\s*(?:\/\/\s*(.*))?$/gm;

function varsIn(file) {
  const txt = fs.readFileSync(file, 'utf8');
  const out = {};
  VAR.lastIndex = 0;
  let m;
  while ((m = VAR.exec(txt))) out[m[1]] = m[2].trim();
  return out;
}

const components = {};
let globals = {};
for (const d of ['src/less/components', 'src/less/theme']) {
  const abs = path.join(UK, d);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs).filter((f) => f.endsWith('.less'))) {
    const name = f.replace(/\.less$/, '');
    const vars = varsIn(path.join(abs, f));
    if (!Object.keys(vars).length) continue;
    if (name === 'variables') globals = { ...globals, ...vars };
    else components[name] = { ...(components[name] ?? {}), ...vars };
  }
}

// SCSS ships the same names with $ instead of @
const scss = fs.existsSync(path.join(UK, 'src/scss'));

fs.writeFileSync(OUT, JSON.stringify({ globals, components, scss }, null, 1));
const n = Object.values(components).reduce((s, c) => s + Object.keys(c).length, 0);
console.log(`${OUT}: ${Object.keys(globals).length} global variables, ${n} component variables ` +
  `across ${Object.keys(components).length} components${scss ? ' (SCSS variants available)' : ''}`);
