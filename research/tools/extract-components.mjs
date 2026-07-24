import { JSDOM } from 'jsdom'; import fs from 'fs'; import path from 'path';
const UK = new URL('../uikit/', import.meta.url).pathname;
// 1. classes from dist css
const css = fs.readFileSync(path.join(UK,'dist/css/uikit.css'),'utf8');
const classes = [...new Set([...css.matchAll(/\.(uk-[a-zA-Z0-9\\@_-]+)/g)].map(m=>m[1].replace(/\\/g,'')))].sort();
// 2. components via runtime
const dom = new JSDOM('<!doctype html><html><body></body></html>', { pretendToBeVisual: true });
for (const k of ['window','document','HTMLElement','Element','Node','CustomEvent','MutationObserver','requestAnimationFrame','cancelAnimationFrame','getComputedStyle','SVGElement','DocumentFragment'])
  Object.defineProperty(globalThis, k, { value: k === 'window' ? dom.window : dom.window[k], configurable: true, writable: true });
const src = fs.readFileSync(path.join(UK,'dist/js/uikit.js'),'utf8');
const UIkit = new Function('window','document','navigator', src + '\n;return (typeof UIkit!=="undefined")?UIkit:window.UIkit;')(dom.window, dom.window.document, dom.window.navigator);
const kebab = s => s.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
const components = {};
for (const name of Object.keys(UIkit)) {
  let C; try { C = UIkit.component(name); } catch { continue; }
  if (typeof C !== 'function' || !C.options) continue;
  const o = C.options;
  components[kebab(name)] = { args: o.args ?? [], props: o.props ? Object.keys(o.props) : [] };
}
// 3. icons
const icons = fs.readdirSync(path.join(UK,'src/images/icons')).filter(f=>f.endsWith('.svg')).map(f=>f.replace(/\.svg$/,'')).sort();
fs.writeFileSync('../uikit-truth.json', JSON.stringify({version: JSON.parse(fs.readFileSync(path.join(UK,'package.json'),'utf8')).version, classes, components, icons}, null, 1));
console.log('classes',classes.length,'components',Object.keys(components).length,'icons',icons.length);
