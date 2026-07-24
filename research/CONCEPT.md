# Giving an agent reliable UIkit ability — concept

Status: **approved and built.** The result is in `.claude/skills/uikit/`. Everything
below is backed by measurements reproducible with `eval/`.

## Result

Same 27 tasks, same scorer, the built skill in place:

| tier | baseline | old skill (109 files) | **built skill** | target set below |
|---|---|---|---|---|
| common UI, penalty | 11.7 | — | **0.0** (15/15 clean) | ≤ 5 |
| long tail, penalty | 54.8 | 17.5 | **6.2** | ≤ 8 |
| long tail, capability | 64 % | 81 % | **89 %** | ≥ 95 % |
| invented `uk-*` names, all 27 tasks | 1 | — | **0** | 0 |
| always-loaded footprint | — | ~900 tokens + 30 file reads | **~2.1 k tokens, no reads** | ≤ 1200 |

Two targets were not hit, and both deserve the detail rather than a rounded number.

**Capability stopped at 89 %,** short of 95 %. The two misses are the same two the
capability-map arm had, and I still think both are the eval's fault. `uk-upload` needs
a server endpoint, so answering a self-contained upload page with
`uk-placeholder` + `uk-progress` is a defensible engineering call, not ignorance.
Countdown's `reload` reloads the *page*, which is not what "restarts when it reaches
zero" plainly means. Every unambiguous capability — Overflow Fade, Inverse, lightbox
`nav: thumbnav` + `counter`, masonry parallax, dropbar, filter sorting, scrollspy-nav,
slider sets — is now hit. I have left the two checks in place rather than quietly
rewriting the tasks to make the number look better.

**The always-loaded layer is ~2.1 k tokens, not the ≤1200 I proposed.** The component
list is 44 lines and carries most of the measured value; cutting it to hit my own
number would have cut the thing that works. The comparison that matters is against the
alternative: the old skill loads less up front and then spends 30-plus tool calls
reading itself.

What the pages actually contain is idiomatic, not checker-shaped. The masonry grid came
out as `uk-grid="masonry: pack; parallax: 0; parallax-justify: true"` — verbatim the
documented idiom for justifying columns of unequal height, which the baseline had
replaced with hand-written CSS.

---

---

## 1. I built the instrument before the answer

Nothing here rests on my impression of what agents get wrong. Two artefacts came first:

**A source-derived ground truth** (`tools/build-index.mjs`). Every `uk-*` name is
resolved through four independent paths in the UIkit checkout — literal `.uk-*`
selectors in `dist/css/uikit.css`, the `[class*="uk-…"]` families, the
`// Component / Sub-objects / Modifiers / States` manifest header each LESS file
carries, and the JS bundle evaluated under jsdom to read the real component registry
with each component's props and positional args. Result for UIkit 3.25.20:
**1025 classes, 24 families, 60 components, 162 icons**, every one traceable to a line
of source. The builder self-checks each indirectly-derived name and refuses to claim
one it cannot find — that check already caught a mistake of mine (`uk-inline-block`,
which the official docs use and UIkit does not define; the real class is
`uk-display-inline-block`).

**A calibrated scorer** (`eval/score.mjs`). It flags invented classes, invented
attributes, invented component options, invented icon names, wrong breakpoint
suffixes, structural errors (`uk-width-*` without a grid parent, `uk-grid` as a class
without the attribute, `uk-modal` without `.uk-modal-dialog`, dangling toggle
targets), missing asset wiring (`uikit-icons.js` in particular), foreign-framework
class leakage, and hand-written CSS that duplicates a UIkit utility.

Calibration matters more than the checks: I ran it over the **481 live examples in the
official docs**, which are by definition idiomatic. It emits 13 flags — 10 are a
weight-1 style smell, and **2 are genuine bugs in the official docs**
(`uk-disable`, `uk-table-condensed`, both non-existent). A scorer that is quiet on
correct input is a scorer whose complaints mean something.

---

## 2. What the baseline actually says

27 tasks, no help of any kind, cold agents forbidden from reading the source.

| tier | tasks | penalty | capability |
|---|---|---|---|
| common UI (modal, card grid, navbar+offcanvas, hero, form, pricing, tabs, table, slideshow, article, landing page, dashboard, gallery, alerts, edit-existing) | 15 | **11.7** total, 8 fully clean | — |
| long tail / recent features | 12 | **54.8** total | **64 %** |

**The common tier is close to saturated.** One invented class across fifteen pages
(`uk-text-white`). Card grids come out as
`uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match` with
`uk-card-media-top` — textbook. A skill that re-teaches this tier buys nothing.

**The long tail is where it breaks, and it breaks in a specific way.** Six capability
misses, all on components added after a typical knowledge cut-off: Overflow Fade
(3.24), Inverse (3.18), lightbox `nav: thumbnav` and `counter` (3.22), Countdown
`reload` (3.22), Upload. And the failure is never "wrong class name" — it is:

> When the agent does not know a UIkit component exists, it hand-writes 50–80 lines
> of bespoke CSS and JS to replace one attribute.

For the fading scroll strip it wrote `.chipbar::before/::after` gradients, scroll
listeners and `is-overflow-left` state classes — all of it `uk-overflow-fade`. For the
lightbox with a thumbnail rail it wrote a custom dialog, a custom strip, and webkit
scrollbar styling — all of it `uk-lightbox="nav: thumbnav; counter: true"`. Custom
`<style>` blocks appear in 10 of 12 long-tail tasks and 6 of 15 common ones.

So the target is not "teach UIkit". It is **close the knowledge gap about what exists,
then make the residual errors impossible.**

---

## 2b. I tested the mechanisms against each other before choosing one

Same 12 long-tail tasks, three arms, identical prompts:

| arm | what the agent had | capability | penalty | agent tokens |
|---|---|---|---|---|
| baseline | nothing | 64 % | 54.8 | ~127 k |
| **B** | the existing skill — 109 files, 528 KB, progressive disclosure | 81 % | 17.5 | ~218 k |
| **A** | **one generated capability map, one file** | **89 %** | **13.1** | **~108 k** |

One generated file beats the entire docs dump on both quality metrics while spending
**half the tokens** — and fewer tokens than the baseline, because an agent that knows
the component exists stops flailing at bespoke CSS. Arm B spent 31 and 33 tool calls
reading its own skill; Arm A spent 7.

Two caveats I will not paper over. Of Arm A's two remaining capability misses, both are
arguably my eval's fault rather than the agent's: `uk-upload` genuinely needs a server
endpoint, so building a self-contained demo page out of `uk-placeholder` + `uk-progress`
is defensible; and Countdown's `reload` reloads the *page*, which is not obviously what
"restart the timer" means. Arm B's Overflow Fade miss is not debatable — the component
is absent from its 109 files.

Arm A's remaining hard failure is different in kind: it invented
`uk-navbar-dropdown-grid` and `uk-navbar-dropdown-nav-header`. Knowledge alone cannot
fix that class of error. Verification can, which is why Layer 3 exists.

---

## 3. Why the first attempt cannot move these numbers

`.claude/skills/uikit/` on `claude/getuikit-agent-skill-s2avkq`: 528 KB, 109 files,
a mechanical transcription of the docs. Measured against the failures above:

- It spends its bulk on the tier that is already saturated.
- It is **still missing the features that actually fail**: `overflow-fade` appears in
  **zero** of its 109 files; the slider `sets:` option appears in zero. A docs dump
  that is simultaneously too large and incomplete on exactly the gap.
- Its "layout principles" were distilled from scrappy community templates.
- It carries advice that the source contradicts. It says dark sections need
  `.uk-light`; in 3.25 `uk-section-primary`, `uk-section-secondary`, `uk-tile-*`,
  `uk-card-primary/secondary`, `uk-overlay-primary` and `uk-offcanvas-bar` already set
  `--uk-inverse: light` themselves. `uk-light` is for *arbitrary* dark backgrounds only.

I am not iterating on it.

---

## 4. Proposed mechanism — three layers, each tied to a measured failure

Not one mechanism. Knowledge where knowledge helps, retrieval where retrieval helps,
verification where verification is possible.

### Layer 1 — Prime (always loaded, small and dense)

A single `SKILL.md`, target **≤ 1200 tokens**. Not a tutorial. Contents:

- The two-pillar mental model (appearance = classes, behaviour = attributes) in a few
  lines.
- **The capability map**: every registered component, one line each — attribute plus a
  short purpose, ~700 tokens for the whole set, generated by
  `tools/build-capability-map.mjs`. This is the single highest-value payload: it is
  exactly the "I didn't know that existed" gap the baseline exposes. Options are
  deliberately *not* here — they belong in Layer 2. (The generator also emits a fuller
  variant where each component's options are ranked by rarity across components, so a
  row shows what is distinctive about it — `uk-lightbox` → `counter` `nav` `slidenav`
  `template` — rather than the `animation`/`duration` noise every component shares.
  That variant is what `uikit show` serves.)
- The measured gotchas only — the ones the baseline got wrong or the source
  contradicts. `--uk-inverse` auto-inversion, `uk-grid` must be the attribute,
  `uikit-icons.js` or every icon is blank, only `@s @m @l @xl` exist.
- One instruction that pays for itself: *before writing any custom CSS or JS, check the
  capability map.*

### Layer 2 — Lookup (on demand, zero hallucination possible)

One generated `uikit-index.json` plus a small CLI. `uikit show uk-lightbox` prints its
real props and args; `uikit find thumbnav` searches class and component names;
`uikit example lightbox` returns a verbatim snippet from the official docs corpus
(980 blocks, 481 of them live examples). Answers are read out of the index, so a
made-up name cannot be returned. This replaces 109 markdown files with one JSON and
one script, and costs nothing until it is called.

### Layer 3 — Verify (automatic, deterministic)

`uikit check <file.html>` is the calibrated scorer, wired as a `PostToolUse` hook on
Write/Edit for HTML. Any invented class, invented option, wrong breakpoint, missing
icons script or grid-structure error comes straight back to the agent as feedback, and
it fixes it before the user ever sees it. This is the layer the first attempt has no
equivalent of, and it is the difference between *hoping* the output is correct and
*knowing* it. It also degrades gracefully: run it in CI, or by hand, without the hook.

### Kept alongside: the eval harness

`eval/` ships with the deliverable. Any future change to the skill is accepted or
rejected on the numbers, not on taste.

---

## 5. Layout intelligence — and the one thing I need from you

The premium YOOtheme/getuikit demos are unreachable: the environment's egress proxy
denies plain HTTPS to those hosts (git and package registries work, arbitrary web
fetches do not). What I *can* reach offline is the UIkit documentation site's own
source — a real, professionally built UIkit site — and skeletonising it already yields
idioms a cold agent does not produce: alternating `uk-section-{default,primary,muted}`
with `uk-section-large`/`xlarge` rhythm and `uk-padding-remove-top` to fuse sections;
the eyebrow pattern `<h1 class="uk-h6 uk-margin-remove">` over `<h2 class="uk-h1">`
(semantic level decoupled from visual size); centred intros as
`uk-width-xlarge uk-margin-auto uk-text-center`; responsive alignment as
`uk-text-center uk-text-left@l`; hover overlays as `uk-inline uk-transition-toggle` +
`uk-position-cover uk-transition-fade`.

Two real pages is a thin corpus. **To do this pillar properly I need either the egress
policy widened for the demo hosts, or the demo pages dropped in as `.html` files.** The
miner is built and runs the moment either arrives; it reduces pages to `tag + uk-*`
skeletons and keeps only structural patterns — no commercial text, images or visual
design is copied.

If neither is possible, I will ship the layout layer from the docs-site corpus and say
plainly that it is the weaker part.

---

## 6. How success is judged

Re-run `eval/` on both tiers against the baseline recorded here:

- long-tail capability **64 % baseline / 81 % old skill / 89 % capability-map-only →
  target ≥ 95 %** (the last stretch comes from Layers 2 and 3)
- long-tail penalty **54.8 baseline / 17.5 old skill / 13.1 capability-map-only →
  target ≤ 8**
- common-tier penalty **11.7 → target ≤ 5** (and no regression: it must not get worse)
- invented `uk-*` names across all 27 tasks: **0**, enforced by Layer 3
- always-loaded footprint: **≤ 1200 tokens**

---

## 7. Open questions for you

1. **Layout corpus** — can egress be widened, or can you drop demo `.html` files in?
2. **Hook** — is a `PostToolUse` hook that auto-checks written HTML welcome, or should
   Layer 3 stay a manual/CI command?
3. **Scope** — anything beyond static HTML? (UIkit-in-Vue/React, LESS/SCSS theming
   customisation.) Currently out of scope unless you say otherwise.
