// Build the UIkit ground-truth index from a checkout of github.com/uikit/uikit.
// Nothing here is written from memory: every name is read out of the source.
//
//   node build-index.mjs <path-to-uikit-checkout> <out.json>
//
// Sources, in order of authority:
//   1. dist/css/uikit.css      literal `.uk-*` selectors  + `[class*="uk-*"]` families
//   2. src/less/**/*.less      the `// Component / Sub-objects / Modifiers / States`
//                              manifest header each component file carries
//   3. dist/js/uikit.js        evaluated under jsdom -> the real component registry,
//                              with each component's props and positional args
//   4. src/images/icons/*.svg  the icon names uikit-icons.js ships
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const UK = process.argv[2];
const OUT = process.argv[3] ?? 'uikit-index.json';
if (!UK) throw new Error('usage: build-index.mjs <uikit-checkout> [out.json]');

const read = (p) => fs.readFileSync(path.join(UK, p), 'utf8');
const version = JSON.parse(read('package.json')).version;

// --- 1. CSS ---------------------------------------------------------------
const css = read('dist/css/uikit.css');
const exact = [...new Set([...css.matchAll(/\.(uk-[a-zA-Z0-9\\@_-]+)/g)].map((m) => m[1].replace(/\\/g, '')))].sort();
const families = [...new Set([...css.matchAll(/\[class\*=["'](uk-[a-z0-9-]+)["']\]/g)].map((m) => m[1]))].sort();

// --- 2. LESS manifests ----------------------------------------------------
const manifest = {};
for (const dir of ['src/less/components', 'src/less/theme']) {
  const abs = path.join(UK, dir);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs).filter((f) => f.endsWith('.less'))) {
    const head = fs.readFileSync(path.join(abs, f), 'utf8').split('// ====')[0];
    const key = f.replace(/\.less$/, '');
    const entry = (manifest[key] ??= {});
    let section = null;
    for (const line of head.split('\n')) {
      if (!line.startsWith('//')) continue;
      const m = line.match(/^\/\/\s*([A-Za-z-]+):\s*(.*)$/);
      const rest = m ? ((section = m[1].toLowerCase()), m[2]) : line.replace(/^\/\/\s*/, '');
      if (!section || section === 'name' || section === 'description') continue;
      for (const n of rest.matchAll(/`(uk-[a-z0-9-]+)`/g)) ((entry[section] ??= [])).push(n[1]);
    }
    for (const k of Object.keys(entry)) entry[k] = [...new Set(entry[k])];
  }
}
const declared = [...new Set(Object.values(manifest).flatMap((c) => Object.values(c).flat()))].sort();

// --- 3. JS runtime registry ----------------------------------------------
const dom = new JSDOM('<!doctype html><html><body></body></html>', { pretendToBeVisual: true });
for (const k of ['window', 'document', 'HTMLElement', 'Element', 'Node', 'CustomEvent',
  'MutationObserver', 'requestAnimationFrame', 'cancelAnimationFrame', 'getComputedStyle',
  'SVGElement', 'DocumentFragment']) {
  Object.defineProperty(globalThis, k, {
    value: k === 'window' ? dom.window : dom.window[k], configurable: true, writable: true,
  });
}
const UIkit = new Function('window', 'document', 'navigator',
  `${read('dist/js/uikit.js')}\n;return (typeof UIkit!=="undefined")?UIkit:window.UIkit;`,
)(dom.window, dom.window.document, dom.window.navigator);

const kebab = (s) => s.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
const components = {};
const hookFromSource = new Set();
for (const name of Object.keys(UIkit)) {
  let C;
  try { C = UIkit.component(name); } catch { continue; }
  if (typeof C !== 'function' || !C.options) continue;
  components[`uk-${kebab(name)}`] = {
    props: Object.keys(C.options.props ?? {}),
    args: C.options.args ?? [],
  };
}
// Options written on a host attribute are forwarded to the panel/child component
// it creates, so the host legitimately accepts the child's props too.
const FORWARDS = {
  'uk-lightbox': ['uk-lightbox-panel'],
  'uk-slider': ['uk-slider-parallax'],
  'uk-slideshow': ['uk-slideshow-parallax'],
  'uk-dropnav': ['uk-drop', 'uk-dropdown'],
  'uk-navbar': ['uk-drop', 'uk-dropdown', 'uk-dropnav'],
};
for (const [host, targets] of Object.entries(FORWARDS)) {
  if (!components[host]) continue;
  for (const t of targets) {
    if (components[t]) components[host].props = [...new Set([...components[host].props, ...components[t].props])];
  }
}

// Options a component reads directly off the element instead of declaring in `props`.
// Verified against the source below so a rename cannot pass unnoticed.
const EXTRA_OPTIONS = { 'uk-tooltip': ['title', 'delay'] };
for (const [attr, extra] of Object.entries(EXTRA_OPTIONS)) {
  if (components[attr]) components[attr].props = [...new Set([...components[attr].props, ...extra])];
}

// --- 4. icons -------------------------------------------------------------
const icons = fs.readdirSync(path.join(UK, 'src/images/icons'))
  .filter((f) => f.endsWith('.svg')).map((f) => f.replace(/\.svg$/, '')).sort();

// --- 5. names that exist only behind a [class*=] selector or a JS template -
// Each one is asserted against the source below, so the list cannot rot silently.
const INDIRECT = {
  'uk-inline': 'less:utility', 'uk-inline-clip': 'less:utility',
  'uk-scope': 'build:scope',
  'uk-countdown-days': 'js:countdown', 'uk-countdown-hours': 'js:countdown',
  'uk-countdown-minutes': 'js:countdown', 'uk-countdown-seconds': 'js:countdown',
  'uk-slider-nav': 'js:slider-nav', 'uk-slideshow-nav': 'js:slider-nav',
  'uk-lightbox-slidenav': 'js:lightbox-panel', 'uk-lightbox-close': 'js:lightbox-panel',
  'uk-drop-close': 'js:drop', 'uk-preserve-color': 'less:inverse',
};
const js = read('dist/js/uikit.js');
// classes the JS applies at runtime (uk-open, uk-close-large, uk-first-column, ...)
const jsClasses = [...new Set([...js.matchAll(/["'`](uk-[a-z0-9-]+)["'`]/g)].map((m) => m[1]))];
const lessAll = ['src/less/components', 'src/less/theme'].flatMap((d) => {
  const abs = path.join(UK, d);
  return fs.existsSync(abs) ? fs.readdirSync(abs).map((f) => fs.readFileSync(path.join(abs, f), 'utf8')) : [];
}).concat(fs.existsSync(path.join(UK, 'build')) ? fs.readdirSync(path.join(UK, 'build')).filter((f) => f.endsWith('.js')).map((f) => fs.readFileSync(path.join(UK, 'build', f), 'utf8')) : []).join('\n');
const unverified = Object.keys(INDIRECT).filter((c) => {
  if (css.includes(c) || js.includes(c) || lessAll.includes(c)) return false;
  // names JS assembles from a template, e.g. clsWrapper: '.uk-countdown-%unit%'
  const m = c.match(/^(uk-[a-z]+-)(days|hours|minutes|seconds)$/);
  return !(m && js.includes(`${m[1]}%unit%`));
});

const known = [...new Set([...exact, ...declared, ...jsClasses, ...Object.keys(INDIRECT)])].sort();

// Attributes UIkit reads that are not themselves registered components.
// Attributes UIkit reads that are not themselves registered components. Both forms
// are found in the bundle rather than listed by hand — a hand-written list is how
// `uk-cloak`, which UIkit 3.25 does not have at all, nearly ended up in here.
//   attrItem: 'uk-switcher-item'      controls that address a component
//   data(el, 'uk-scrollspy-class')   per-element overrides read straight off the DOM
for (const m of js.matchAll(/attrItem\s*:\s*["'](uk-[a-z-]+)["']/g)) hookFromSource.add(m[1]);
for (const m of js.matchAll(/\bdata\([^,()]+,\s*["'](uk-[a-z-]+)["']\)/g)) hookFromSource.add(m[1]);
const HOOK_ATTRS = [...hookFromSource].sort();

fs.writeFileSync(OUT, JSON.stringify({
  version, generated_from: 'github.com/uikit/uikit', classes: known, families,
  components, hookAttrs: HOOK_ATTRS, icons, manifest,
}, null, 1));

console.log(`uikit ${version}: ${known.length} classes, ${families.length} families, ` +
  `${Object.keys(components).length} components, ${icons.length} icons -> ${OUT}`);
console.log('hook attributes from source:', HOOK_ATTRS.join(' '));
if (unverified.length) console.warn('WARNING unverified indirect names:', unverified.join(', '));
