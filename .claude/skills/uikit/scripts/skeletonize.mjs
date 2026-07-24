#!/usr/bin/env node
// Strip a UIkit HTML page down to its structural skeleton: keep only element
// tags + uk-* classes / uk-* attributes. Drop all text, images, CSS, ids, inline
// styles and non-uk classes. This is the "copyright firewall" used to distill the
// layouts/ layer — no design, content, or styling survives, only the reusable
// structural grammar (which sections, which grid/width cadence, etc.).
//
// Use it to distill NEW layout archetypes from real UIkit pages you can access —
// e.g. save a few YOOtheme Pro / getuikit.com demo pages as .html locally, then:
//
//   node scripts/skeletonize.mjs page.html            # full uk-* skeleton
//   node scripts/skeletonize.mjs page.html --macro     # only section-level bones
//
// Read the resulting skeletons to see the section rhythm, then generalize the
// recurring conventions into layouts/*.md (never copy a single page verbatim).

import { readFileSync } from 'node:fs';

const VOID = new Set(['img','input','br','hr','meta','link','source','area','col','wbr']);
const STRUCT = new Set(['section','nav','header','footer','main','article','aside','form','table','thead','tbody','tr','ul','ol','li']);

export function skeleton(html, { macroOnly = false } = {}) {
  let s = html.replace(/<!--[\s\S]*?-->/g, '')
              .replace(/<script[\s\S]*?<\/script>/gi, '')
              .replace(/<style[\s\S]*?<\/style>/gi, '')
              .replace(/<svg[\s\S]*?<\/svg>/gi, '<svg>');
  const bodyM = s.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  s = bodyM ? bodyM[1] : s;

  const tags = s.match(/<\/?[a-zA-Z][^>]*>/g) || [];
  let depth = 0;
  const lines = [];
  for (const raw of tags) {
    const close = /^<\//.test(raw);
    const name = (raw.match(/^<\/?\s*([a-zA-Z0-9]+)/) || [])[1]?.toLowerCase();
    if (!name) continue;
    const selfClose = /\/>\s*$/.test(raw) || VOID.has(name);
    if (close) { depth = Math.max(0, depth - 1); continue; }

    const classAttr = (raw.match(/class\s*=\s*"([^"]*)"/i) || raw.match(/class\s*=\s*'([^']*)'/i) || [])[1] || '';
    const ukClasses = classAttr.split(/\s+/).filter(c => c.startsWith('uk-'));
    const ukAttrs = [...raw.matchAll(/\s(uk-[a-z-]+|data-uk-[a-z-]+)(?:="([^"]*)")?/g)]
      .map(m => m[2] ? `${m[1]}="${m[2].replace(/#[\w-]+/g, '#id').slice(0, 40)}"` : m[1]);

    const hasUk = ukClasses.length || ukAttrs.length;
    const macro = ukClasses.some(c => /^uk-(section|tile|container|navbar|cover-container|child-width|width-|grid|light|dark|overlay|card|offcanvas)/.test(c))
      || ukAttrs.some(a => /^uk-(grid|navbar|cover|slideshow|slider|sticky)/.test(a));

    if (macroOnly ? macro : (hasUk || STRUCT.has(name))) {
      const parts = [name];
      if (ukClasses.length) parts.push('.' + ukClasses.join(' .'));
      if (ukAttrs.length) parts.push('[' + ukAttrs.join('] [') + ']');
      lines.push('  '.repeat(depth) + parts.join(' '));
    }
    if (!selfClose) depth++;
  }
  return lines.join('\n');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const file = process.argv[2];
  if (!file) { console.error('usage: node skeletonize.mjs <file.html> [--macro]'); process.exit(1); }
  console.log(skeleton(readFileSync(file, 'utf8'), { macroOnly: process.argv.includes('--macro') }));
}
