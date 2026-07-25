# demos/

Premium UIkit demo pages and screenshots go here — one folder per demo, browser
"Save Page As" dumps are fine. The tooling walks the tree and takes only the markup;
the contents are gitignored, so the material stays local.

```
node tools/mine-layouts.mjs demos
```

The miner reduces each page to `tag + uk-* classes + uk-* attributes` before it counts
anything, so what it reports is structure — which section modifiers alternate, which
class bundles recur, what nests inside what. Screenshots it leaves alone; those have to
be read by an agent.

What comes out feeds the `## Layout` section of `.claude/skills/uikit/SKILL.md`. Until
pages are here, that section is derived from the UIkit documentation site's own source
— a real UIkit build, but only two pages, so a thin corpus.

**If you are an agent picking this work up: read [HANDOFF.md](HANDOFF.md) first.** It
covers what the project is, what the material is for, what to produce from it, the
constraints, and how to tell whether you actually improved anything.
