// Deterministic UIkit correctness scorer, driven by the generated ground-truth index.
//   node score.mjs <index.json> <file.html> [--fragment]
// or: import { makeScorer } from './score.mjs'
import fs from 'fs';
import { JSDOM } from 'jsdom';

export function makeScorer(indexPath) {
  const IX = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  const known = new Set(IX.classes);
  const icons = new Set(IX.icons);
  const attrs = new Set([...Object.keys(IX.components), ...IX.hookAttrs]);
  const FRACTION = /^uk-(width|child-width)-([1-6]-[1-6]|auto|expand|fit|small|medium|large|xlarge|xxlarge|max-\w+|min-\w+)(@(s|m|l|xl))?$/;

  const resolvable = (c) => {
    const base = c.replace(/@(s|m|l|xl)$/, '');
    return known.has(c) || known.has(base) || FRACTION.test(c) ||
      IX.families.some((f) => c.startsWith(f) || base.startsWith(f));
  };

  return function score(html, { fragment = false, file = '<inline>', requires = [] } = {}) {
    const doc = new JSDOM(html).window.document;
    const all = [...doc.querySelectorAll('*')];
    const V = [];
    const add = (code, weight, detail) => V.push({ code, weight, detail });

    // --- invented names -----------------------------------------------------
    const seenCls = new Set(), seenAttr = new Set();
    for (const el of all) {
      for (const c of el.classList) {
        if (!c.startsWith('uk-')) continue;
        if (/@(sm|md|lg|xs|xxl)$/.test(c)) add('bad_breakpoint', 3, c);
        else if (!resolvable(c) && !seenCls.has(c)) { seenCls.add(c); add('invented_class', 3, c); }
      }
      for (const a of el.attributes) {
        if (!a.name.startsWith('uk-')) continue;
        if (!attrs.has(a.name)) {
          if (!seenAttr.has(a.name)) { seenAttr.add(a.name); add('invented_attr', 3, a.name); }
          continue;
        }
        const comp = IX.components[a.name];
        if (comp?.props.length && a.value.includes(':')) {
          for (const pair of a.value.split(';')) {
            const k = pair.split(':')[0].trim();
            if (!k || /^(https?|\/\/)/.test(k)) continue;
            const camel = k.replace(/-([a-z])/g, (_, x) => x.toUpperCase());
            if (!comp.props.includes(camel) && !comp.args.includes(camel)) add('invented_option', 2, `${a.name}="${k}: …"`);
          }
        }
      }
      const iv = el.getAttribute('uk-icon');
      if (iv != null) {
        const m = iv.match(/icon\s*:\s*([a-z0-9-]+)/) || (/^[a-z0-9-]+$/.test(iv.trim()) ? [, iv.trim()] : null);
        if (m && !icons.has(m[1])) add('invented_icon', 2, m[1]);
      }
    }

    // --- structural ---------------------------------------------------------
    for (const el of all) {
      if (el.classList.contains('uk-grid') && !el.hasAttribute('uk-grid')) add('grid_class_no_attr', 1, el.className);
    }
    const CW_HOSTS = ['uk-slider-items', 'uk-slideshow-items', 'uk-lightbox-items', 'uk-thumbnav',
      'uk-dotnav', 'uk-subnav', 'uk-navbar-nav', 'uk-flex', 'uk-grid', 'uk-tab'];
    for (const el of all) {
      if ([...el.classList].some((c) => /^uk-child-width-/.test(c)) && !el.hasAttribute('uk-grid') &&
          !CW_HOSTS.some((c) => el.classList.contains(c))) add('child_width_no_grid', 3, el.className);
    }
    for (const el of all) {
      if (![...el.classList].some((c) => /^uk-width-\d-\d/.test(c))) continue;
      const p = el.parentElement;
      if (!p || p.tagName === 'BODY') continue;
      const cols = [...p.children].filter((s) => [...s.classList].some((c) => /^uk-width-\d-\d/.test(c)));
      const ok = p.hasAttribute('uk-grid') ||
        [...p.classList].some((c) => /^uk-(grid|flex|nav|subnav|slider-items|slideshow-items|thumbnav|dotnav|navbar)/.test(c));
      if (cols.length > 1 && !ok) { add('width_without_grid', 3, `${cols.length} columns under .${p.className}`); break; }
    }
    for (const el of doc.querySelectorAll('[uk-modal]')) {
      if (!el.querySelector('.uk-modal-dialog')) add('modal_no_dialog', 2, 'uk-modal without .uk-modal-dialog');
    }
    for (const el of doc.querySelectorAll('[uk-toggle]')) {
      const v = el.getAttribute('uk-toggle') ?? '';
      const sel = (v.match(/target\s*:\s*([^;]+)/) || [, v])[1]?.trim();
      if (sel?.startsWith('#') && !doc.querySelector(sel)) add('dangling_target', 2, sel);
    }

    // --- reinventing what UIkit ships --------------------------------------
    const styleText = [...doc.querySelectorAll('style')].map((s) => s.textContent).join('\n');
    if (styleText.trim()) {
      const REINVENTS = [/display\s*:\s*flex/i, /display\s*:\s*grid/i, /grid-template-columns/i,
        /\bmargin\b/i, /\bpadding\b/i, /text-align/i, /@media/i, /justify-content/i, /align-items/i];
      const hits = REINVENTS.filter((r) => r.test(styleText)).length;
      const lines = styleText.trim().split('\n').length;
      if (hits) add('custom_css_reinvents_utility', Math.min(hits, 4), `${hits} utility-covered properties`);
      add('custom_css_lines', +Math.min(lines / 40, 3).toFixed(2), `${lines} lines`);
    }
    const inline = all.filter((e) => /margin|padding|display|text-align|width\s*:\s*\d+%|flex/i.test(e.getAttribute('style') ?? ''));
    if (inline.length) add('inline_style_over_utility', Math.min(inline.length, 5), String(inline.length));
    const FOREIGN = /(^|\s)(col-(xs|sm|md|lg)-\d|row$|btn(-|$)|container-fluid|d-flex|card-header|navbar-brand|grid-cols-\d|mx-auto|px-\d|py-\d|font-bold)/;
    for (const el of all) {
      const other = (el.getAttribute('class') ?? '').split(/\s+/).filter((c) => c && !c.startsWith('uk-')).join(' ');
      if (other && FOREIGN.test(` ${other}`)) { add('foreign_framework_class', 2, other); break; }
    }

    // --- wiring -------------------------------------------------------------
    if (!fragment) {
      const src = [...doc.querySelectorAll('script[src]')].map((s) => s.getAttribute('src')).join(' ');
      const href = [...doc.querySelectorAll('link[rel=stylesheet]')].map((s) => s.getAttribute('href')).join(' ');
      if (!/uikit(\.min)?\.css/.test(href)) add('missing_uikit_css', 3, href || '(none)');
      if (!/\buikit(\.min)?\.js/.test(src)) add('missing_uikit_js', 3, src || '(none)');
      const ICON_ATTRS = '[uk-icon],[uk-navbar-toggle-icon],[uk-search-icon],[uk-close],[uk-slidenav-next],' +
        '[uk-slidenav-previous],[uk-overlay-icon],[uk-marker],[uk-spinner],[uk-totop],[uk-pagination-next],' +
        '[uk-pagination-previous],[uk-nav-parent-icon],[uk-drop-parent-icon],[uk-accordion-icon]';
      if (doc.querySelector(ICON_ATTRS) && !/uikit-icons(\.min)?\.js/.test(src)) {
        add('missing_icons_js', 3, 'icons used but uikit-icons.js not loaded');
      }
      if (!doc.querySelector('.uk-container') && !doc.querySelector('[class*=uk-section]')) add('no_container', 1, 'no uk-container / uk-section');
    }

    // --- capability: did it reach for the right UIkit feature? --------------
    const missed = requires.filter((r) => !new RegExp(r.re).test(html));
    for (const r of missed) add('missed_capability', 3, r.why);

    return {
      file,
      penalty: +V.reduce((s, v) => s + v.weight, 0).toFixed(2),
      capability: requires.length ? +((requires.length - missed.length) / requires.length).toFixed(2) : null,
      violations: V,
    };
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [ix, f] = process.argv.slice(2);
  const score = makeScorer(ix);
  console.log(JSON.stringify(score(fs.readFileSync(f, 'utf8'), { fragment: process.argv.includes('--fragment'), file: f }), null, 1));
}
