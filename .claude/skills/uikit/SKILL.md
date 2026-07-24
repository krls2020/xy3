---
name: uikit
description: >-
  Use when building or editing frontend UI with the UIkit / getuikit.com CSS+JS
  framework — writing HTML that uses uk-* classes and uk-* attributes, laying
  out pages with uk-grid / uk-width / uk-flex, adding components (card, navbar,
  offcanvas, modal, tab, slider, form, table, accordion, dropdown, lightbox…),
  theming with LESS/SCSS variables, or debugging why UIkit markup, icons, or
  auto-initialized JavaScript behaves unexpectedly. Covers UIkit 3.x.
---

# UIkit (getuikit.com)

Lightweight, modular front-end framework (MIT). You build UIs by **writing HTML
with `uk-*` classes and attributes** — not by writing CSS or JS.

## Two pillars — internalize first

1. **Appearance = `.uk-*` classes.** Components (`.uk-card`, `.uk-button`) and
   utilities (`.uk-margin`, `.uk-width-1-2`, `.uk-text-lead`) are stacked as
   classes. Compose a design by combining them, never by writing custom CSS.
2. **Behavior = `uk-*` attributes.** Interactive components switch on via an
   attribute — `uk-modal`, `uk-toggle`, `uk-switcher`, `uk-sticky` — optionally
   configured inline: `uk-sticky="offset: 50"`. **You almost never write JS.**
   UIkit auto-initializes and watches the DOM (works with Vue/React/htmx).

If you're about to write a flexbox rule, a media query, a spacing value, or a
click handler — stop. UIkit ships a class or attribute for it.

## Where to read (do this efficiently)

| Need | Read | 
|---|---|
| **Almost any task** — layout, spacing, the top ~20 components' markup | **`references/quick-ref.md`** (one page, start here) |
| A whole page **section** (hero, nav+mobile menu, card grid, forms) | **`patterns/<name>.md`** (copy-paste recipes) — see `patterns/_index.md` |
| A whole **page** (landing, pricing, blog, dashboard) + how pros compose section rhythm | **`layouts/`** — start with `layouts/layout-principles.md` |
| A specific component's **full** class/option list | `references/components/<name>.md` |
| Which component do I even need? | routing table below, then `references/_index.md` (all 81) |
| The "how/why" of a subsystem | `references/{layout-system,javascript,utilities,theming,icons,setup,accessibility-rtl,conflicts-and-scope,migration}.md` |

Prefer `quick-ref.md` or one `patterns/` file over opening several component
files — it's fewer tokens and usually a better, composed answer.

## Rules (and the mistake each prevents)

- **Load `uikit.css` + `uikit.js` + `uikit-icons.js`.** Missing the icons file →
  every `uk-icon` renders empty.
- **Layout = Container → Grid → Width (+ Flex).** Don't hand-roll CSS grid/flex.
  A `.uk-width-*` needs a `uk-grid` **attribute** parent; a bare `uk-grid` with no
  widths just stacks.
- **Space with `.uk-margin*` / `.uk-padding*`, never `style="margin…"`.**
- **Mobile-first:** base class = all widths; add `@s @m @l @xl` to scale up.
  Only those four suffixes exist (`@sm`/`@md` are wrong).
- **Behavior via attributes, not JS:** `uk-toggle`, `uk-switcher`, `uk-modal`,
  `uk-offcanvas` — not a hand-written click handler.
- **Dark sections use `.uk-light`** (or `.uk-dark` on light over media) — don't
  recolor text by hand.
- **Wrap page content in `.uk-container`** — don't run flush to the edges.
- **Icons:** `<span uk-icon="icon: name"></span>`.
- **Don't invent names or reinvent components.** If a class/attribute isn't in a
  cheat-sheet, it doesn't exist — check `references/`. Names there are verbatim
  from the source; trust them over memory.
- Every JS component follows the same shape: attribute `uk-<name>`, JS API
  `UIkit.<name>(el, opts)` (a few exceptions noted in their cheat-sheet).

## Routing — "I need to build X"

Whole page/section → go to `patterns/` first. Single component → `quick-ref.md`
or the file below. Long tail → `references/_index.md`.

| X | Component(s) |
|---|---|
| Responsive columns / grid | grid + width (`quick-ref.md`) |
| Nav bar + mobile menu | `patterns/navigation.md` |
| Hero / single section | `patterns/{hero-sections,page-scaffolds}.md` |
| Full page (landing, pricing, blog, dashboard) | `layouts/` (rhythm + archetypes) |
| Card grid | `patterns/cards-and-grids.md` |
| Forms | `patterns/forms.md` |
| Modal / dropdown / offcanvas | modal · dropdown · offcanvas |
| Tabs / switch content | tab · switcher |
| Accordion / collapsible | accordion · toggle |
| Carousel / gallery | slideshow · slider · lightbox |
| Sticky header / scroll animation | sticky · scrollspy |
| Alerts / toasts | alert · notification |
| Tables / lists | table · list |
| Theming / brand colors | `references/theming.md` |

Anything else → `references/_index.md`.
