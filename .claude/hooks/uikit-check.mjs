#!/usr/bin/env node
// PostToolUse hook: verify any HTML that was just written or edited against the real
// UIkit names, and hand the failures straight back so they get fixed in the same turn.
//
// Contract: stdin carries the hook payload, the file is at tool_input.file_path.
// Exit 2 with the report on stderr is what Claude reads; anything else stays silent.
import fs from 'fs';
import path from 'path';
import { makeChecker, loadIndex } from '../skills/uikit/lib/check.mjs';

const PROJECT = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();

let payload = '';
for await (const chunk of process.stdin) payload += chunk;

let file;
try {
  file = JSON.parse(payload)?.tool_input?.file_path;
} catch {
  process.exit(0); // not our business to fail the turn over a malformed payload
}
if (!file || !/\.(html?|hbs|twig|vue|svelte|jsx|tsx)$/i.test(file)) process.exit(0);

const abs = path.isAbsolute(file) ? file : path.join(PROJECT, file);
if (!fs.existsSync(abs)) process.exit(0);

let html;
try {
  html = fs.readFileSync(abs, 'utf8');
} catch {
  process.exit(0);
}

// Only speak up for files that are actually using UIkit.
if (!/\buk-[a-z]/.test(html)) process.exit(0);

// A component file or partial has no <html> wrapper, so asset-wiring checks would
// fire on every one of them. Judge that from the markup, not from the extension.
const fragment = !/<html[\s>]/i.test(html);

let report;
try {
  report = makeChecker(loadIndex(path.join(PROJECT, '.claude/skills/uikit/index.json')))(html, { file, fragment });
} catch (e) {
  console.error(`uikit check could not run: ${e.message}`);
  process.exit(1); // non-blocking: surfaced in the transcript, does not derail the turn
}

const errors = report.violations.filter((v) => v.weight >= 2);
if (!errors.length) process.exit(0);

console.error(
  `${file} uses UIkit names that do not exist in UIkit ${loadIndex(path.join(PROJECT, '.claude/skills/uikit/index.json')).version}. ` +
  `Fix these before continuing:\n\n` +
  errors.map((v) => `  ${v.code}: ${v.detail}${v.fix ? `\n    → ${v.fix}` : ''}`).join('\n') +
  `\n\nEvery name was resolved against the framework source, so these are certain, not stylistic. ` +
  `Use \`node .claude/skills/uikit/bin/uikit.mjs find <text>\` to get the real name.`,
);
process.exit(2);
