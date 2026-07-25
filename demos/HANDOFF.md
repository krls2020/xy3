# Handoff: turning demo pages into layout intelligence

You are picking this up cold, probably with a pile of material collected elsewhere —
saved pages, screenshots, maybe both. This document tells you what the project is,
what that material is for, and what to do with it.

---

## 1. What this repo is

A skill that gives a coding agent reliable [UIkit](https://getuikit.com) ability. It
lives in `.claude/skills/uikit/` and has three layers:

- **Prime** — `SKILL.md`, always loaded. Mental model, every component in one line,
  the layout section you are here to improve, and the facts the source contradicts.
- **Lookup** — `bin/uikit.mjs`. `show` / `find` / `example` / `vars` / `icons`, all
  answered out of an index generated from the UIkit source.
- **Verify** — `lib/check.mjs` plus a `PostToolUse` hook. Resolves every `uk-*` name
  against that index, so invented names cannot survive.

Read `README.md` for the shape and `research/CONCEPT.md` for how it was measured and
why it looks like this. The short version: it was built eval-first, and every decision
in it has a number behind it.

## 2. Why the demos matter

The measured failure this project fixes is **correctness** — an agent that does not
know `uk-overflow-fade` exists writes 60 lines of CSS instead. That part is done:
common tasks score a clean 0 penalty, long-tail 6.2, zero invented names.

What is *not* solved is **composition**. Correct markup is not the same as a page that
looks professionally designed. The skill's `## Layout` section currently teaches
section rhythm, the eyebrow heading pattern, centred intros and hover overlays — but
those were derived from the UIkit documentation site's own source, which is two real
pages. It is a thin corpus and it is labelled as such.

The demo material is the fix. Premium UIkit/YOOtheme demos are the best available
evidence of how the framework is composed by people who designed it. They could not be
fetched from this environment — the egress proxy denies plain HTTPS to those hosts —
which is why they are being brought in by hand.

## 3. What to do with the material

### Where to put it

Anything goes under `demos/`. One folder per demo is ideal, and a browser's
"Save Page As" dump is fine — the tooling walks the tree, takes the markup, and ignores
`_files/` asset folders.

```
demos/
  agency-one/
    index.html
    index_files/…          ← ignored
    home.png               ← screenshot
    pricing.png
  saas-two/
    …
```

Everything under `demos/` except these two documents is gitignored, so the source
material stays local whatever format it arrives in. Keep it that way.

### Saved pages → run the miner

```
node tools/mine-layouts.mjs demos
```

It reduces every page to `tag + uk-* classes + uk-* attributes` **before it counts
anything** — text, images, colours, custom classes and stylesheets are discarded in the
first step. Output is three rankings: recurring class bundles, recurring parent > child
structures, and the section rhythm page by page.

### Screenshots → you read them

No tool mines an image. Open them and look for what markup alone does not tell you:

- vertical rhythm — how much air between sections, and does it change by section type
- type scale — how far apart the eyebrow, headline and body sizes actually are
- how many columns at which widths, and what the grid does at the breakpoints
- where emphasis is spent: one accent colour or several, dark bands how often
- what a "hero" is in practice — full viewport or not, image bleed, where the CTA sits

Where a screenshot and a saved page are the same view, use the pair: the image tells
you the intent, the markup tells you which `uk-*` classes produced it. That pairing is
the highest-value thing in the whole pile — write down the mapping when you find it.

## 4. What to produce

Rewrite `## Layout` in `.claude/skills/uikit/SKILL.md`. The bar is not "more advice",
it is **advice that changes what an agent builds**:

- Keep it to roughly its present size. The whole file is ~2.1 k tokens and always
  loaded; every line has to earn its place. If you add three lines, consider which
  three come out.
- Prefer a rule with real class names over a principle. "Alternate
  `uk-section-default` / `-muted`, sized `uk-section-large`" beats "vary your
  backgrounds for visual interest".
- State frequencies where you have them. "Ten of twelve demos put the hero CTA row in
  `uk-flex-inline` + `uk-grid-medium`" is worth more than an unsourced assertion.
- If something is genuinely a judgement call rather than an idiom, say so.

Longer material that does not fit belongs in a sibling file the skill points at, the
way `theming.md` and `frameworks.md` work — not in `SKILL.md`.

## 5. Verify before you write anything down

Every class name you put in the skill must exist:

```
node .claude/skills/uikit/bin/uikit.mjs find <name>
```

If it does not come back, it does not exist — demos can contain a theme's own classes
(`tm-*`, `el-*`) that are not UIkit, and stale UIkit 2 names turn up too. This is not
hypothetical: the official documentation itself uses `uk-inline-block` and
`uk-table-condensed`, neither of which UIkit defines.

Sanity-check your finished edit:

```
node .claude/skills/uikit/bin/uikit.mjs check <a page you wrote using your new advice>
```

## 6. How to tell whether you improved anything

Be aware of a real limitation before you start: **the existing scorer measures
correctness, not composition.** It will not reward better layout advice. If you change
`SKILL.md` and the numbers stay flat, that is expected — it is not evidence of success
either way.

Baselines to protect (must not regress):

```
node eval/run.mjs eval/tasks.json      <dir>   # was 0.0 penalty, 15/15 clean
node eval/run.mjs eval/tasks-hard.json <dir>   # was 6.2 penalty, 89% capability
node eval/calibrate.mjs <uikit-site-checkout>  # false positives on 481 official examples
```

To actually measure composition you need to build the missing instrument. The cheapest
honest version: add 5–8 whole-page tasks to a new `eval/tasks-layout.json` using the
same `requires` mechanism the hard tier uses, with checks drawn from what the demos
show — section rhythm present, a constrained-width centred intro, responsive alignment,
`uk-grid-match` where cards sit side by side. Generate pages with and without your
edit and compare. If you want a qualitative read on top, have a separate agent score
page screenshots against a short rubric without telling it which arm is which.

Do not claim an improvement you have not measured. The rest of this project does not.

## 7. Constraints that are not negotiable

- **Structure only.** Take layout patterns, class combinations, section rhythm. Never
  copy a demo's copy, imagery, colour palette or distinctive visual identity into this
  repo or into anything the skill emits. The miner enforces this on the markup path by
  discarding everything but tags and `uk-*` names; on the screenshot path you enforce
  it yourself.
- **Do not commit the demo files.** They are third-party material, and `.gitignore`
  already excludes everything under `demos/` bar these two documents. If you find
  yourself adding an exception, that is the moment to stop and think.
- **Do not hand-edit generated regions.** The component list in `SKILL.md` sits between
  `<!-- BEGIN capability-map -->` markers and is overwritten by
  `tools/build-capability-map.mjs`. `index.json`, `examples.json` and `theme.json` are
  generated too — `tools/regenerate.sh` rebuilds all of it from fresh upstream clones.
- **Never write a `uk-*` name you have not looked up.** That rule is the reason this
  skill is worth anything.

## 8. Things that will save you time

- `tools/regenerate.sh` clones `uikit` and `uikit-site` and rebuilds every generated
  artefact. Run it first if the sources are not on disk; it needs network for the two
  clones and one `npm install jsdom` (build-time only — nothing the skill ships has
  dependencies).
- `node .claude/skills/uikit/bin/uikit.mjs example <page>` returns real markup from the
  official docs. Useful for checking whether a pattern you spotted in a demo is the
  documented idiom or that designer's own invention.
- The checker's `--fragment` flag turns off the asset-wiring checks, for partials.
- `research/CONCEPT.md` records what was already tried, including one approach that was
  measured and rejected. Worth ten minutes before you propose a different mechanism.
