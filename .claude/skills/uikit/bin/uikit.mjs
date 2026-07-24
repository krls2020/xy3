#!/usr/bin/env node
// UIkit lookup + verification. Every answer is read out of index.json / examples.json /
// theme.json, all of which are generated from the UIkit source — so this command
// cannot invent a class, an attribute, an option or an icon that does not exist.
import fs from 'fs';
import path from 'path';
import { makeChecker, loadIndex } from '../lib/check.mjs';

const HERE = new URL('..', import.meta.url).pathname;
const load = (f) => JSON.parse(fs.readFileSync(path.join(HERE, f), 'utf8'));
const IX = loadIndex();

const [cmd, ...rest] = process.argv.slice(2);
const bold = (s) => (process.stdout.isTTY ? `\x1b[1m${s}\x1b[0m` : s);
const dim = (s) => (process.stdout.isTTY ? `\x1b[2m${s}\x1b[0m` : s);

const USAGE = `uikit — UIkit ${IX.version} lookup and check

  uikit check <file.html…> [--fragment]   verify markup against the real UIkit names
  uikit show <uk-component|component>     options, args and the classes that belong to it
  uikit find <text>                       search classes, components and icons
  uikit example <page> [text]             real snippets from the official docs
  uikit vars [component]                  LESS/SCSS theme variables
  uikit icons [text]                      icon names uikit-icons.js ships

Anything this command does not return does not exist. Do not guess a name it did
not print — search again with different words, or pick a different component.`;

// ---------------------------------------------------------------- check
function cmdCheck(args) {
  const files = args.filter((a) => !a.startsWith('--'));
  const fragment = args.includes('--fragment');
  if (!files.length) { console.error(USAGE); process.exit(2); }
  const check = makeChecker(IX);
  let hard = 0;
  for (const f of files) {
    const r = check(fs.readFileSync(f, 'utf8'), { fragment, file: f });
    const errors = r.violations.filter((v) => v.weight >= 2);
    const warns = r.violations.filter((v) => v.weight < 2);
    if (!r.violations.length) { console.log(`${f}: ok`); continue; }
    console.log(`${bold(f)}`);
    for (const v of errors) console.log(`  ✗ ${v.code}: ${v.detail}${v.fix ? `\n      → ${v.fix}` : ''}`);
    for (const v of warns) console.log(`  ${dim(`· ${v.code}: ${v.detail}`)}${v.fix ? dim(`\n      → ${v.fix}`) : ''}`);
    hard += errors.length;
  }
  process.exit(hard ? 1 : 0);
}

// ---------------------------------------------------------------- show
function cmdShow([name]) {
  if (!name) { console.error(USAGE); process.exit(2); }
  const attr = name.startsWith('uk-') ? name : `uk-${name}`;
  const stem = attr.replace(/^uk-/, '');
  const comp = IX.components[attr];
  const manifest = IX.manifest[stem];

  if (!comp && !manifest) {
    const near = [...Object.keys(IX.components), ...Object.keys(IX.manifest).map((m) => `uk-${m}`)]
      .filter((c) => c.includes(stem.split('-')[0])).slice(0, 8);
    console.log(`no component or stylesheet named "${attr}".${near.length ? ` Closest: ${near.join(', ')}` : ''}`);
    process.exit(1);
  }

  console.log(bold(attr));
  if (comp) {
    if (comp.args.length) {
      console.log(`  shorthand   ${attr}="${comp.args[0]} value"   ${dim(`(same as ${attr}="${comp.args[0]}: value")`)}`);
    }
    console.log(`  options     ${comp.props.length ? comp.props.join(', ') : '(none)'}`);
    console.log(`  javascript  UIkit.${stem.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}(el, options)`);
  } else {
    console.log('  CSS only — no JavaScript component, use the classes below');
  }
  if (manifest) {
    for (const [section, names] of Object.entries(manifest)) {
      console.log(`  ${section.padEnd(11)} ${names.join(' ')}`);
    }
  }
  const ex = load('examples.json')[stem];
  if (ex) console.log(dim(`\n  ${ex.length} examples available: uikit example ${stem}`));
}

// ---------------------------------------------------------------- find
function cmdFind([q]) {
  if (!q) { console.error(USAGE); process.exit(2); }
  const needle = q.toLowerCase().replace(/^uk-/, '');
  const classes = IX.classes.filter((c) => c.includes(needle));
  const comps = Object.keys(IX.components).filter((c) => c.includes(needle));
  const icons = IX.icons.filter((i) => i.includes(needle));
  const vars = Object.keys(IX.manifest).filter((m) => m.includes(needle));

  if (comps.length) console.log(`${bold('components')}  ${comps.join(' ')}`);
  if (vars.length) console.log(`${bold('stylesheets')} ${vars.join(' ')}`);
  if (classes.length) {
    console.log(bold(`classes (${classes.length})`));
    for (let i = 0; i < classes.length; i += 6) console.log('  ' + classes.slice(i, i + 6).join('  '));
  }
  if (icons.length) console.log(`${bold('icons')}       ${icons.join(' ')}`);
  if (!comps.length && !classes.length && !icons.length && !vars.length) {
    console.log(`nothing in UIkit ${IX.version} matches "${q}" — it does not exist under that name.`);
    process.exit(1);
  }
}

// ---------------------------------------------------------------- example
function cmdExample([page, ...words]) {
  const EX = load('examples.json');
  if (!page) {
    console.log(Object.keys(EX).sort().join(' '));
    return;
  }
  const key = EX[page] ? page : Object.keys(EX).find((k) => k.includes(page.replace(/^uk-/, '')));
  if (!key) {
    console.log(`no docs page for "${page}". Pages: ${Object.keys(EX).sort().join(' ')}`);
    process.exit(1);
  }
  const filter = words.join(' ').toLowerCase();
  let blocks = EX[key];
  if (filter) {
    const hit = blocks.filter((b) => b.heading.toLowerCase().includes(filter) || b.html.toLowerCase().includes(filter));
    if (hit.length) blocks = hit;
  }
  // live examples first — those are the ones rendered on the docs site
  blocks = [...blocks].sort((a, b) => Number(b.live) - Number(a.live)).slice(0, filter ? 3 : 2);
  for (const b of blocks) {
    console.log(`${bold(`— ${key}: ${b.heading}`)}`);
    console.log(b.html);
    console.log();
  }
  console.log(dim(`${EX[key].length} snippets on this page; narrow with: uikit example ${key} <text>`));
}

// ---------------------------------------------------------------- vars
function cmdVars([name]) {
  const T = load('theme.json');
  if (!name) {
    console.log(bold('globals — these drive every component; set these first'));
    for (const [k, v] of Object.entries(T.globals)) console.log(`  ${k.padEnd(34)} ${v}`);
    console.log(dim(`\ncomponents: ${Object.keys(T.components).sort().join(' ')}`));
    console.log(dim(T.scss ? 'SCSS uses the same names with $ instead of @.' : ''));
    return;
  }
  const key = T.components[name] ? name : Object.keys(T.components).find((k) => k.includes(name.replace(/^uk-/, '')));
  if (!key) {
    console.log(`no variables for "${name}". Components: ${Object.keys(T.components).sort().join(' ')}`);
    process.exit(1);
  }
  console.log(bold(`${key} — override these, do not write CSS that fights the compiled output`));
  for (const [k, v] of Object.entries(T.components[key])) console.log(`  ${k.padEnd(46)} ${v}`);
}

// ---------------------------------------------------------------- icons
function cmdIcons([q]) {
  const list = q ? IX.icons.filter((i) => i.includes(q.toLowerCase())) : IX.icons;
  if (!list.length) { console.log(`no icon matches "${q}". ${IX.icons.length} icons ship in total.`); process.exit(1); }
  for (let i = 0; i < list.length; i += 8) console.log(list.slice(i, i + 8).join('  '));
  console.log(dim(`\n${list.length} of ${IX.icons.length} icons. Use: <span uk-icon="icon: NAME"></span>`));
}

const COMMANDS = { check: cmdCheck, show: cmdShow, find: cmdFind, example: cmdExample, vars: cmdVars, icons: cmdIcons };
if (!cmd || !COMMANDS[cmd]) { console.log(USAGE); process.exit(cmd ? 2 : 0); }
COMMANDS[cmd](rest);
