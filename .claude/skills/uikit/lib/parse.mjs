// A tiny HTML reader. Deliberately dependency-free: `uikit check` runs on any
// machine with node and no install step, and the eval harness scores with exactly
// the same code that ships.
//
// It gives back a flat node list with parent links — enough for the structural
// checks (is this uk-width inside a uk-grid?) without pretending to be a DOM.

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr']);
const RAW = new Set(['script', 'style', 'textarea', 'title']);

const TAG = /<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<!([a-zA-Z][^>]*)>|<(\/)?([a-zA-Z][\w:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>/g;
const ATTR = /([^\s=/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;

function parseAttrs(raw) {
  const attrs = {};
  if (!raw) return attrs;
  ATTR.lastIndex = 0;
  let m;
  while ((m = ATTR.exec(raw))) {
    const name = m[1];
    if (name === '/' || !name) continue;
    attrs[name.toLowerCase()] = m[2] ?? m[3] ?? m[4] ?? '';
  }
  return attrs;
}

export function parse(html) {
  const nodes = [];
  const stack = [];
  const raw = { script: [], style: [] };
  let i = 0, m;
  TAG.lastIndex = 0;

  while ((m = TAG.exec(html))) {
    const [full, , closing, tagRaw, attrRaw] = m;
    if (!tagRaw) continue; // comment, doctype, CDATA
    const tag = tagRaw.toLowerCase();

    if (closing) {
      // unwind to the matching open tag; tolerate unclosed elements
      const at = stack.map((n) => n.tag).lastIndexOf(tag);
      if (at !== -1) stack.length = at;
      continue;
    }

    const attrs = parseAttrs(attrRaw);
    const node = {
      tag,
      attrs,
      classes: (attrs.class ?? '').split(/\s+/).filter(Boolean),
      parent: stack.at(-1) ?? null,
      children: [],
      index: nodes.length,
    };
    node.parent?.children.push(node);
    nodes.push(node);

    if (RAW.has(tag) && !full.endsWith('/>')) {
      const close = html.toLowerCase().indexOf(`</${tag}`, TAG.lastIndex);
      const text = html.slice(TAG.lastIndex, close === -1 ? html.length : close);
      node.text = text;
      if (tag in raw) raw[tag].push(text);
      TAG.lastIndex = close === -1 ? html.length : close;
      continue;
    }
    if (!VOID.has(tag) && !full.endsWith('/>')) stack.push(node);
    i++;
  }

  const byId = new Map();
  for (const n of nodes) if (n.attrs.id && !byId.has(n.attrs.id)) byId.set(n.attrs.id, n);

  return {
    nodes,
    byId,
    styleText: raw.style.join('\n'),
    scriptSrc: nodes.filter((n) => n.tag === 'script' && n.attrs.src).map((n) => n.attrs.src),
    stylesheets: nodes.filter((n) => n.tag === 'link' && /stylesheet/i.test(n.attrs.rel ?? '')).map((n) => n.attrs.href ?? ''),
    has: (pred) => nodes.some(pred),
    descendants(node) {
      const out = [];
      const walk = (n) => { for (const c of n.children) { out.push(c); walk(c); } };
      walk(node);
      return out;
    },
  };
}

export const hasClass = (n, c) => n.classes.includes(c);
export const anyClass = (n, re) => n.classes.some((c) => re.test(c));
