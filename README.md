# A UIkit skill an agent cannot get wrong

Connect this to a coding agent and it writes idiomatic [UIkit](https://getuikit.com)
markup — right class names, right attributes, right layout, and a deterministic check
that catches anything it invents.

Three layers, each answering a failure that was measured rather than assumed
(`research/CONCEPT.md` has the numbers and how they were taken):

| layer | file | when it costs anything |
|---|---|---|
| **Prime** — mental model, every component in one line each, the gotchas the source contradicts | `.claude/skills/uikit/SKILL.md` | always loaded, ~2.1 k tokens |
| **Lookup** — real options, real class names, real examples, real theme variables | `.claude/skills/uikit/bin/uikit.mjs` | only when called |
| **Verify** — every `uk-*` name resolved against the framework source | same command, plus a `PostToolUse` hook | on every HTML write |

```
node .claude/skills/uikit/bin/uikit.mjs check page.html      # verify
node .claude/skills/uikit/bin/uikit.mjs show uk-lightbox     # real options
node .claude/skills/uikit/bin/uikit.mjs find thumbnav        # does this exist?
node .claude/skills/uikit/bin/uikit.mjs example lightbox     # working markup
node .claude/skills/uikit/bin/uikit.mjs vars card            # theme variables
```

No install step and no dependencies — the checker ships with its own HTML reader so it
runs anywhere `node` does.

## Nothing here is written from memory

`tools/build-index.mjs` resolves every name through four independent paths in the UIkit
checkout: literal `.uk-*` selectors in the compiled CSS, the `[class*="uk-…"]` families,
the `// Component / Sub-objects / Modifiers / States` manifest header each LESS file
carries, and the JS bundle evaluated under jsdom to read the actual component registry
with each component's props and positional args. For 3.25.20 that is **1025 classes,
60 components, 162 icons**, each traceable to a line of source.

The builder refuses to claim a name it cannot find. That check has already caught two
real errors: `uk-inline-block`, which the official docs use and UIkit does not define,
and `uk-cloak`, which I had added from memory and which UIkit 3 does not have at all.

## Regenerating when UIkit releases

```
tools/regenerate.sh
```

Clones or updates both upstream repos, rebuilds the index, the examples corpus, the
theme variables and the capability map inside `SKILL.md`, then re-runs the calibration.
Nothing in the skill is hand-maintained.

## Keeping it honest

`eval/` is the instrument, not documentation of it.

```
node eval/calibrate.mjs <uikit-site-checkout>   # false-positive rate on 481 official examples
node eval/run.mjs eval/tasks-hard.json <dir>    # score a directory of generated pages
```

`calibrate` scores the live examples from the official documentation, which are
idiomatic by definition — the checker has to stay quiet on them for its complaints to
mean anything. `tasks.json` (15 common UI tasks) and `tasks-hard.json` (12 long-tail and
recently-added features) carry the capability checks that say whether the agent reached
for the right UIkit feature or rebuilt it by hand.

## Layout corpus

`demos/` is where premium demo pages go. The miner reduces each page to
`tag + uk-* classes + uk-* attributes` before counting anything, so it extracts
structure and never anyone's content or visual design. See `demos/README.md`.
