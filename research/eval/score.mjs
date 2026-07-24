// Deterministic UIkit correctness scorer.
// Usage: node score.mjs <truth.json> <components.json> <file.html> [--fragment]
import fs from 'fs';
import { JSDOM } from 'jsdom';

const T = JSON.parse(fs.readFileSync(new URL('../truth-v2.json', import.meta.url), 'utf8'));
const C = JSON.parse(fs.readFileSync(new URL('../gt/components.json', import.meta.url), 'utf8'));

export function score(html, { fragment = false, file = '<inline>' } = {}) {

const known = new Set([...T.exact, ...T.declared, ...T.jsCls]);
// classes that exist only behind [class*=] selectors or JS template literals
const EXTRA_OK = ['uk-scope', 'uk-countdown-days', 'uk-countdown-hours', 'uk-countdown-minutes',
  'uk-countdown-seconds', 'uk-lightbox-close', 'uk-drop-close', 'uk-preserve-color',
  'uk-slider-nav', 'uk-slideshow-nav', 'uk-lightbox-slidenav', 'uk-inline', 'uk-inline-block',
  'uk-inline-clip', 'uk-width-1-1'];
EXTRA_OK.forEach((c) => known.add(c));
const families = T.families;
const compNames = new Set(Object.keys(C).map((n) => `uk-${n}`));
const compByAttr = Object.fromEntries(Object.entries(C).map(([n, v]) => [`uk-${n}`, v]));
// attributes that are consumed by a component but are not component names themselves
const EXTRA_ATTRS = new Set(['uk-cloak', 'uk-filter-control', 'uk-slideshow-item', 'uk-slider-item',
  'uk-lightbox-item', 'uk-scrollspy-class', 'uk-toggle', 'uk-close', 'uk-navbar-toggle-icon',
  'uk-overlay-icon', 'uk-search-icon', 'uk-marker', 'uk-spinner', 'uk-totop',
  'uk-pagination-previous', 'uk-pagination-next', 'uk-slidenav-previous', 'uk-slidenav-next',
  'uk-nav-parent-icon', 'uk-navbar-parent-icon', 'uk-drop-parent-icon', 'uk-accordion-icon',
  'uk-form-custom', 'uk-height-match', 'uk-height-viewport', 'uk-overflow-auto', 'uk-video',
  'uk-switcher', 'uk-inverse']);

const ICONS = new Set(T.icons || []);

const dom = new JSDOM(html);
const doc = dom.window.document;
const all = [...doc.querySelectorAll('*')];

const V = []; // violations
const add = (code, weight, detail) => V.push({ code, weight, detail });

const resolvable = (c) => known.has(c) || families.some((f) => c.startsWith(f)) ||
  /^uk-(width|child-width)-([1-6]-[1-6]|auto|expand)(@[smlx]|@xl)?$/.test(c);

// --- 1. hallucinated classes / attributes / icons -------------------------
const seenBadCls = new Set(), seenBadAttr = new Set();
for (const el of all) {
  for (const c of el.classList) {
    if (!c.startsWith('uk-')) continue;
    const base = c.replace(/@(s|m|l|xl)$/, '');
    if (!resolvable(c) && !resolvable(base) && !seenBadCls.has(c)) {
      seenBadCls.add(c); add('hallucinated_class', 3, c);
    }
    if (/@(sm|md|lg|xs|xxl)$/.test(c)) add('bad_breakpoint', 3, c);
  }
  for (const a of el.attributes) {
    if (!a.name.startsWith('uk-')) continue;
    if (!compNames.has(a.name) && !EXTRA_ATTRS.has(a.name) && !seenBadAttr.has(a.name)) {
      seenBadAttr.add(a.name); add('hallucinated_attr', 3, a.name);
    }
    // unknown options inside a component attribute
    const comp = compByAttr[a.name];
    if (comp && a.value && a.value.includes(':')) {
      for (const pair of a.value.split(';')) {
        const k = pair.split(':')[0].trim();
        if (!k) continue;
        const camel = k.replace(/-([a-z])/g, (m, x) => x.toUpperCase());
        if (comp.props.length && !comp.props.includes(camel) && !comp.args.includes(camel)) {
          add('unknown_option', 2, `${a.name}: ${k}`);
        }
      }
    }
  }
  // icon names
  for (const attrName of ['uk-icon']) {
    const v = el.getAttribute(attrName);
    if (v == null) continue;
    const m = v.match(/icon\s*:\s*([a-z0-9-]+)/) || (/^[a-z0-9-]+$/.test(v.trim()) ? [null, v.trim()] : null);
    if (m && !ICONS.has(m[1])) add('bad_icon', 2, m[1]);
  }
}

// --- 2. structural / idiomatic --------------------------------------------
// grid class without grid attribute
for (const el of all) {
  if (el.classList.contains('uk-grid') && !el.hasAttribute('uk-grid')) {
    add('grid_class_no_attr', 1, el.className);
  }
}
// uk-width-* / uk-child-width-* children without a uk-grid ancestor attribute
for (const el of all) {
  const hasW = [...el.classList].some((c) => /^uk-width-/.test(c));
  if (!hasW) continue;
  const p = el.parentElement;
  if (!p) continue;
  const siblings = [...p.children].filter((s) => [...s.classList].some((c) => /^uk-width-\d-\d/.test(c)));
  const pCls = [...p.classList];
  const parentOk = p.hasAttribute('uk-grid') || pCls.some((c) => /^uk-(grid|flex|nav|subnav|slider-items|slideshow-items|thumbnav|dotnav|navbar)/.test(c));
  if (siblings.length > 1 && !parentOk && p.tagName !== 'BODY') {
    add('width_without_grid', 3, `${siblings.length} cols under <${p.tagName.toLowerCase()} class="${p.className}">`);
    break;
  }
}
for (const el of all) {
  const CW_OK = ['uk-slider-items', 'uk-slideshow-items', 'uk-lightbox-items', 'uk-thumbnav',
    'uk-dotnav', 'uk-subnav', 'uk-navbar-nav', 'uk-flex'];
  if ([...el.classList].some((c) => /^uk-child-width-/.test(c)) && !el.hasAttribute('uk-grid') &&
      !CW_OK.some((c) => el.classList.contains(c)) && !el.classList.contains('uk-grid')) {
    add('child_width_no_grid', 3, el.className);
  }
}
// modal structure
for (const el of doc.querySelectorAll('[uk-modal]')) {
  if (!el.querySelector('.uk-modal-dialog')) add('modal_no_dialog', 2, 'uk-modal without .uk-modal-dialog');
}
// toggle/switcher targets
for (const el of doc.querySelectorAll('[uk-toggle]')) {
  const v = el.getAttribute('uk-toggle') || '';
  const sel = (v.match(/target\s*:\s*([^;]+)/) || [, v])[1]?.trim();
  if (sel && sel.startsWith('#') && !doc.querySelector(sel)) add('dangling_toggle_target', 2, sel);
}

// --- 3. reinvention: hand-rolled CSS / inline styles / foreign frameworks ---
const styles = [...doc.querySelectorAll('style')].map((s) => s.textContent).join('\n');
if (styles.trim()) {
  const props = ['display\\s*:\\s*flex', 'display\\s*:\\s*grid', 'margin', 'padding', 'text-align',
    'grid-template-columns', '@media', 'justify-content', 'align-items', 'border-radius', 'box-shadow'];
  const hits = props.filter((p) => new RegExp(p, 'i').test(styles));
  if (hits.length) add('custom_css_reinvents_utility', 2 * Math.min(hits.length, 4) / 2, hits.join(','));
  add('custom_css_lines', 0.5, String(styles.trim().split('\n').length));
}
const inline = all.filter((e) => e.hasAttribute('style') &&
  /margin|padding|display|text-align|width\s*:\s*\d+%|flex/i.test(e.getAttribute('style')));
if (inline.length) add('inline_style_over_utility', 1 * Math.min(inline.length, 5), String(inline.length));

const FOREIGN = /(^|\s)(col-(xs|sm|md|lg)-\d|row$|btn(-|$)|container-fluid|d-flex|text-muted$|card-header|navbar-brand|flex-1|grid-cols-\d|mx-auto|px-\d|py-\d|text-center$|font-bold)/;
for (const el of all) {
  const cls = el.getAttribute('class') || '';
  const nonUk = cls.split(/\s+/).filter((c) => c && !c.startsWith('uk-')).join(' ');
  if (nonUk && FOREIGN.test(' ' + nonUk)) { add('foreign_framework_class', 2, nonUk); break; }
}

// --- 4. asset wiring -------------------------------------------------------
if (!fragment) {
  const src = [...doc.querySelectorAll('script[src]')].map((s) => s.getAttribute('src')).join(' ');
  const css = [...doc.querySelectorAll('link[rel=stylesheet]')].map((s) => s.getAttribute('href')).join(' ');
  if (!/uikit(\.min)?\.css/.test(css)) add('missing_uikit_css', 3, css || '(none)');
  if (!/uikit(\.min)?\.js/.test(src)) add('missing_uikit_js', 3, src || '(none)');
  const usesIcons = doc.querySelector('[uk-icon]') || [...all].some((e) => [...e.classList].some((c) => /^uk-icon/.test(c)))
    || doc.querySelector('[uk-navbar-toggle-icon],[uk-search-icon],[uk-close],[uk-slidenav-next],[uk-slidenav-previous],[uk-overlay-icon],[uk-marker],[uk-spinner],[uk-totop],[uk-pagination-next],[uk-pagination-previous]');
  if (usesIcons && !/uikit-icons(\.min)?\.js/.test(src)) add('missing_icons_js', 3, 'uses icons, no uikit-icons.js');
  // custom svg where an icon exists
  if (doc.querySelector('svg:not([uk-svg])') && !usesIcons) add('handrolled_svg', 1, 'inline svg instead of uk-icon');
  if (!doc.querySelector('.uk-container') && !doc.querySelector('[class*=uk-section]')) add('no_container', 1, 'no uk-container/uk-section wrapper');
}

// --- 5. responsiveness -----------------------------------------------------
if (!fragment) {
  const hasBp = [...all].some((e) => [...e.classList].some((c) => /@(s|m|l|xl)$/.test(c)));
  if (!hasBp) add('no_responsive_breakpoints', 2, 'no @s/@m/@l classes at all');
}

const penalty = V.reduce((s, v) => s + v.weight, 0);
return { file, penalty, violations: V };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const f = process.argv[2];
  console.log(JSON.stringify(score(fs.readFileSync(f, 'utf8'), { fragment: process.argv.includes('--fragment'), file: f }), null, 1));
}
