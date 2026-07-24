# UIkit skill

An agent skill that teaches Claude (or any agent that loads it) to build
frontends correctly with **[UIkit 3](https://getuikit.com)** — the class- and
attribute-driven CSS/JS framework by YOOtheme.

## What it does

When a task involves UIkit markup (`uk-*` classes/attributes, `uk-grid` layouts,
components, theming…), the skill's description triggers and `SKILL.md` loads. It
gives the agent UIkit's **mental model and principles** up front, then points to
on-demand **references** and **patterns** so the agent uses real, accurate class
names instead of guessing.

## Structure

```
uikit/
├── SKILL.md                     # lean always-loaded core: mental model, golden
│                                #   rules, routing table, anti-patterns, nav
├── references/
│   ├── _index.md                # catalog of all 81 components by category
│   ├── setup.md                 # install + HTML boilerplate
│   ├── javascript.md            # the uk-* attribute system + JS API
│   ├── layout-system.md         # Container → Grid → Width → Flex + spacing
│   ├── utilities.md             # text, background, transitions, inverse…
│   ├── theming.md               # LESS/SCSS variables & hooks
│   ├── icons.md                 # SVG icon library + custom icons
│   ├── accessibility-rtl.md     # a11y + right-to-left
│   ├── conflicts-and-scope.md   # prefixes + .uk-scope for embedding
│   ├── migration.md             # renamed classes / breaking changes
│   └── components/*.md          # 81 per-component cheat-sheets
├── patterns/                    # composed, copy-pasteable page recipes
│   ├── _index.md
│   ├── navigation.md            # navbar + mobile off-canvas + sticky
│   ├── hero-sections.md
│   ├── cards-and-grids.md
│   ├── forms.md
│   └── page-scaffolds.md        # landing page, dashboard shell, docs layout
└── scripts/
    └── build-cheatsheets.mjs    # regenerates references/components/* + _index
```

## Design: progressive disclosure

`SKILL.md` stays small (it's loaded into context on every trigger) and carries
only the **principles** — how UIkit works and how to approach a build. The bulk
of the **facts** (~95k words of documentation) lives in `references/`, which the
agent opens only when needed. This keeps the agent both well-principled and
well-informed without flooding the context window.

## Provenance & accuracy

- Component cheat-sheets are **extracted verbatim** from the official UIkit
  documentation ([uikit/uikit-site](https://github.com/uikit/uikit-site)) and
  cross-checked against the source ([uikit/uikit](https://github.com/uikit/uikit)).
- The principle references and patterns are hand-written but every `uk-*` class
  and attribute in the entire skill was verified to exist in the UIkit source
  (0 invented names).
- Built against **UIkit 3.25.x**.

## Regenerating (when UIkit updates)

```sh
# from a scratch dir
git clone --depth 1 https://github.com/uikit/uikit-site
git clone --depth 1 https://github.com/uikit/uikit

# regenerate the component cheat-sheets + index in place
UIKIT_SITE=$PWD/uikit-site UIKIT=$PWD/uikit \
  node .claude/skills/uikit/scripts/build-cheatsheets.mjs
```

The principle references and patterns are maintained by hand — review them
against the migration notes when bumping a major/minor UIkit version.
