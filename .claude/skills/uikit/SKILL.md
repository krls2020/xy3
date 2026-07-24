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

UIkit is a lightweight, modular front-end framework (MIT). You build UIs by
**writing HTML with `uk-*` classes and attributes** — not by writing CSS or JS.
This skill holds the framework's mental model plus an on-demand reference for
every component in `references/`.

## The two pillars — internalize this first

Everything in UIkit is one of two things:

1. **Appearance = `.uk-*` CSS classes.** Components (`.uk-card`, `.uk-button`)
   and utilities (`.uk-margin`, `.uk-width-1-2`, `.uk-text-lead`) are applied as
   classes. You compose a design by stacking classes, **not** by writing custom
   CSS.
2. **Behavior = `uk-*` HTML attributes.** Interactive components are switched on
   with an attribute — `uk-modal`, `uk-toggle`, `uk-switcher`, `uk-sticky`,
   `uk-scrollspy` — optionally configured inline: `uk-sticky="offset: 50"`.
   **You almost never write JavaScript.** UIkit auto-initializes on load and
   watches the DOM with a MutationObserver, so components also work when markup
   is injected later by Vue, React, htmx, etc.

If you catch yourself writing a flexbox rule, a media query, a spacing value, or
a click handler — stop. UIkit almost certainly ships a class or attribute for it.

## Golden rules

- **Load all three files**, in `<head>`: `uikit.min.css`, then `uikit.min.js`
  **and `uikit-icons.min.js`**. Missing the icons file makes every `uk-icon`
  silently render nothing. See `references/setup.md`.
- **Build layout as Container → Grid → Width (+ Flex).** Wrap page content in
  `.uk-container`; make columns with `uk-grid` + `.uk-width-*` / `.uk-child-width-*`;
  fine-tune alignment with `.uk-flex-*`. Never hand-roll CSS grid/flexbox.
  See `references/layout-system.md`.
- **Space with utilities, never inline styles.** `.uk-margin`,
  `.uk-margin-large-top`, `.uk-padding`, `.uk-padding-small`. Not `style="margin…"`.
- **Mobile-first.** Base classes apply everywhere; add breakpoint suffixes to
  scale *up*: `@s` ≥640px, `@m` ≥960px, `@l` ≥1200px, `@xl` ≥1600px. Example:
  `uk-child-width-1-2@s uk-child-width-1-3@m` = 1 col on phones, 2 on tablets,
  3 on desktop.
- **Prefer attributes over JS.** Reach for `UIkit.component(...)` in JS only for
  genuinely dynamic cases (see `references/javascript.md`).
- **Dark sections use the inverse system.** Put `.uk-light` on a container with a
  dark background (or `.uk-dark` on a light one over a photo). Don't recolor text
  by hand. See `references/utilities.md`.
- **Icons via `uk-icon`:** `<span uk-icon="icon: heart"></span>`.
- **Don't reinvent what UIkit ships.** Check `references/_index.md` before
  building any widget from scratch.

## Workflow for a build/edit task

1. **Setup** — ensure the boilerplate from `references/setup.md` is present
   (CSS + both JS files, viewport meta).
2. **Scaffold** — lay the page out with the layout system
   (`references/layout-system.md`): container, sections, grid, widths.
3. **Pick components** — use the routing table below and `references/_index.md`
   to find the right component(s).
4. **Open the cheat-sheet** — read `references/components/<name>.md` for the exact
   classes, attribute options, and canonical markup. Copy its markup; adjust.
5. **Style with utilities** — text, background, spacing, inverse from
   `references/utilities.md`.
6. **Self-check** against the anti-patterns list before finishing.

## Routing table — "I need to build X"

| Goal | Use | Cheat-sheet |
|---|---|---|
| Page boilerplate / CDN wiring | setup | `references/setup.md` |
| Center + constrain page content | Container | `components/container.md` |
| Full-width colored page bands | Section | `components/section.md` |
| Responsive columns / grid | Grid + Width | `components/grid.md`, `components/width.md` |
| Align / order / center items | Flex | `components/flex.md` |
| Content boxes / panels | Card | `components/card.md` |
| Buttons | Button | `components/button.md` |
| Top navigation bar | Navbar | `components/navbar.md` |
| Mobile / slide-in menu | Offcanvas (+ Toggle) | `components/offcanvas.md`, `components/toggle.md` |
| Vertical nav / sidebar menu | Nav | `components/nav.md` |
| Tabs | Tab (+ Switcher) | `components/tab.md`, `components/switcher.md` |
| Toggle any content by clicking | Switcher / Toggle | `components/switcher.md`, `components/toggle.md` |
| Modal dialog | Modal (+ Toggle) | `components/modal.md` |
| Dropdown menu | Dropdown / Dropnav | `components/dropdown.md`, `components/dropnav.md` |
| Forms & inputs | Form | `components/form.md` |
| Data tables | Table | `components/table.md` |
| Inline messages | Alert | `components/alert.md` |
| Toast / popup messages | Notification (JS) | `components/notification.md` |
| Carousel of slides/content | Slideshow / Slider | `components/slideshow.md`, `components/slider.md` |
| Image gallery + zoom | Lightbox | `components/lightbox.md` |
| Collapsible panels / FAQ | Accordion | `components/accordion.md` |
| Sticky header on scroll | Sticky | `components/sticky.md` |
| Reveal/animate on scroll | Scrollspy | `components/scrollspy.md` |
| Highlight nav for current section | Scrollspy Nav | `components/nav.md`, `components/scrollspy.md` |
| Pagination controls | Pagination | `components/pagination.md` |
| Breadcrumb trail | Breadcrumb | `components/breadcrumb.md` |
| Tooltips | Tooltip (JS) | `components/tooltip.md` |
| Icons | Icon | `components/icon.md`, `references/icons.md` |
| Responsive images / lazy load | Image | `components/image.md` |
| Background video / cover media | Cover / Video | `components/cover.md`, `components/video.md` |
| Progress bar / spinner | Progress / Spinner | `components/progress.md`, `components/spinner.md` |
| Labels / badges | Label / Badge | `components/label.md`, `components/badge.md` |
| Theming / brand colors | LESS/SCSS vars | `references/theming.md` |

For anything not listed, scan `references/_index.md` (all 81 components grouped
by category, with a one-line purpose each).

## Anti-patterns — do NOT do these

- ❌ Writing custom `display:flex` / CSS grid / media queries → ✅ `uk-grid` +
  `.uk-width-*@m` + `.uk-flex-*`.
- ❌ `style="margin-top: 20px"` → ✅ `.uk-margin-top` / `.uk-margin-large-top`.
- ❌ Forgetting `uikit-icons.min.js` → every `uk-icon` renders empty.
- ❌ `.uk-width-1-2` **without** a `uk-grid` parent (or `uk-grid` with no width /
  child-width on/inside it) → columns won't form. The width class needs the grid.
- ❌ Typo'd breakpoint suffix (`@md`, `@sm`) → UIkit uses `@s @m @l @xl` only.
- ❌ Hand-writing a click handler to show/hide → ✅ `uk-toggle`, `uk-switcher`,
  `uk-modal`, `uk-offcanvas`.
- ❌ Adding a `.uk-grid` class manually and expecting behavior → use the
  `uk-grid` **attribute** (the class is added by JS; only pre-add the class to
  avoid a flash when the script is `defer`red).
- ❌ Dark background with manually recolored text → ✅ wrap in `.uk-light`.
- ❌ Page content flush to the viewport edges → ✅ wrap in `.uk-container`.
- ❌ Inventing class/attribute names. If it isn't in a cheat-sheet, it doesn't
  exist — check `references/`.

## Finding things

- **`references/_index.md`** — the full catalog: every component, its category,
  a one-line purpose, and its file. Start here when unsure which component to use.
- **`references/components/<name>.md`** — per-component cheat-sheet: purpose,
  modifier classes, JS options, and copy-pasteable canonical markup. File name =
  the component's doc slug (e.g. `description-list.md`, `offcanvas.md`).
- **Principle references** (the "how/why", read as needed):
  `setup.md`, `javascript.md`, `layout-system.md`, `utilities.md`, `theming.md`,
  `icons.md`, `accessibility-rtl.md`, `conflicts-and-scope.md`, `migration.md`.
- **`patterns/`** — composed, multi-component page recipes distilled from UIkit's
  own demos. See `patterns/_index.md`; files: `navigation.md` (navbar + mobile
  off-canvas + sticky), `hero-sections.md`, `cards-and-grids.md`, `forms.md`,
  `page-scaffolds.md` (landing page, dashboard shell, article/docs layout).
  **When building a whole page or section, start from a pattern, not a blank
  file.**

Cheat-sheets are distilled from the official UIkit 3 documentation; class and
attribute names are taken verbatim from the source, so trust them over memory.
