# Layout system (Container → Grid → Width → Flex, spacing & breakpoints)

The single most important reference. UIkit layouts are built by composing four
things — **Container**, **Grid**, **Width**, **Flex** — plus **Margin/Padding**
utilities for spacing. Master these and you rarely need custom CSS.

## The breakpoints (memorize)

Base (unsuffixed) classes apply at **every** width. Suffixes opt a class in from
a breakpoint **upward** (mobile-first):

| Suffix | From width | Typical device |
|---|---|---|
| _(none)_ | 0 | all / phones |
| `@s` | ≥ 640px | small tablets |
| `@m` | ≥ 960px | tablets / small desktop |
| `@l` | ≥ 1200px | desktop |
| `@xl` | ≥ 1600px | large desktop |

Only these four suffixes exist. `@sm`, `@md`, `@lg` are **wrong**.

## 1. Container — center and constrain

Wrap page content so it doesn't run edge-to-edge.

```html
<div class="uk-container">…</div>
```

| Class | Max width |
|---|---|
| `.uk-container` | default (~1200px) |
| `.uk-container-xsmall` / `-small` / `-large` / `-xlarge` | narrower / wider |
| `.uk-container-expand` | full width, keeps side padding |

## 2. Section — full-width bands

Use Section for stacked page bands with their own background and vertical
padding; put a Container inside each.

```html
<div class="uk-section uk-section-muted">
    <div class="uk-container">…</div>
</div>
```

Style: `.uk-section-default` `-muted` `-primary` `-secondary` (the last two are
dark — add `.uk-light`). Size: `.uk-section-xsmall … -xlarge`.

## 3. Grid + Width — responsive columns

**Grid is an attribute, Width is classes.** Add `uk-grid` to a parent; each
direct child is a column cell. Cells stack by default — give them width to sit
side by side. Two ways:

**A. Per-item widths** (mixed columns):

```html
<div uk-grid>
    <div class="uk-width-1-3@m">Sidebar</div>
    <div class="uk-width-expand@m">Main content</div>
</div>
```

**B. Equal columns via child-width** (put ONE class on the grid):

```html
<div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid>
    <div>…</div>
    <div>…</div>
    <div>…</div>
</div>
```

That reads: 1 column on phones, 2 from `@s`, 3 from `@m`.

### Width classes

Fractions: `.uk-width-1-1 1-2 1-3 2-3 1-4 3-4 1-5 … 1-6 5-6` (reduced form —
use `1-2`, not `3-6`). Special: `.uk-width-auto` (fit content),
`.uk-width-expand` (fill remaining space). Fixed: `.uk-width-small` (150px)
`-medium` (300px) `-large` (450px) `-xlarge` (600px) `-2xlarge` (750px).
All accept breakpoint suffixes: `.uk-width-1-2@m`, `.uk-width-expand@l`.

`.uk-child-width-*` mirrors these on the grid parent:
`.uk-child-width-1-4@m`, `.uk-child-width-auto`, `.uk-child-width-expand`.

### Grid gap & structure modifiers (on the `uk-grid` element)

| Class | Effect |
|---|---|
| `.uk-grid-small` / `-medium` / `-large` / `-collapse` | change / remove the gap |
| `.uk-grid-column-small` / `.uk-grid-row-large` … | different column vs row gap |
| `.uk-grid-divider` | draw divider lines between cells |
| `.uk-grid-match` | make each cell's direct child equal height (needed for equal-height cards) |
| `uk-grid="masonry: pack"` | masonry (gap-free) layout for uneven heights |

**Cards in a grid:** cell → card. Add `.uk-grid-match` to equalize heights:

```html
<div class="uk-child-width-1-3@m uk-grid-match" uk-grid>
    <div><div class="uk-card uk-card-default uk-card-body">…</div></div>
    <div><div class="uk-card uk-card-default uk-card-body">…</div></div>
    <div><div class="uk-card uk-card-default uk-card-body">…</div></div>
</div>
```

Nesting: a grid cell can contain another `uk-grid`. Fine and expected.

## 4. Flex — align, order, direction

Add `.uk-flex` (or apply to a `uk-grid`, which is already flex) then:

| Purpose | Classes |
|---|---|
| Horizontal justify | `.uk-flex-left` `-center` `-right` `-between` `-around` |
| Vertical align | `.uk-flex-stretch` `-top` `-middle` `-bottom` |
| Direction | `.uk-flex-row` `-row-reverse` `-column` `-column-reverse` |
| Wrapping | `.uk-flex-wrap` `-nowrap` `-wrap-reverse` |
| Reorder a cell | `.uk-flex-first` `.uk-flex-last` (also `@s…@xl`) |
| Grow/shrink | `.uk-flex-none` `.uk-flex-auto` `.uk-flex-1` |

All alignment classes take breakpoint suffixes (`.uk-flex-center@m`). Common:
vertically centering with `<div class="uk-flex uk-flex-middle">`.

## 5. Spacing — Margin & Padding utilities (never inline styles)

**Margin** — `.uk-margin` (default bottom-ish stacking margin), directional
`.uk-margin-top` `-bottom` `-left` `-right`, sized
`.uk-margin-{xsmall|small|medium|large|xlarge}[-{top|bottom|left|right}]`,
`.uk-margin-auto` (+ `-left`/`-right`) to center a block, and
`.uk-margin-remove[-top|-bottom|-vertical|…]`. The `uk-margin` **attribute** on a
parent auto-spaces stacking children.

**Padding** — `.uk-padding` (all sides), `.uk-padding-small` / `-large`,
`.uk-padding-remove[-top|-vertical|…]`.

## Helpers that round out layout

- **Height** (`components/height.md`): `.uk-height-1-1`, `.uk-height-small…large`,
  `uk-height-viewport` (full-screen sections), `uk-height-match` (equalize a set).
- **Cover** (`components/cover.md`): make an image/video fill its container
  (`uk-cover`) — for hero backgrounds.
- **Position** (`components/position.md`): `.uk-position-relative`,
  `.uk-position-absolute`, `.uk-position-top-center`, `.uk-position-cover`, etc.
- **Align** (`components/align.md`): float/center media within text
  (`.uk-align-left@m`, `.uk-align-center`).
- **Visibility** (`components/visibility.md`): `.uk-visible@m`, `.uk-hidden@s`,
  `.uk-invisible` — show/hide by breakpoint. Pairs naturally with widths.

## Canonical responsive page skeleton

```html
<body>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-container">
      <div class="uk-navbar-left"><a class="uk-navbar-item uk-logo" href="#">Logo</a></div>
    </div>
  </nav>

  <section class="uk-section uk-section-default">
    <div class="uk-container">
      <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid>
        <div><div class="uk-card uk-card-default uk-card-body">Item</div></div>
        <div><div class="uk-card uk-card-default uk-card-body">Item</div></div>
        <div><div class="uk-card uk-card-default uk-card-body">Item</div></div>
      </div>
    </div>
  </section>

  <footer class="uk-section uk-section-secondary uk-light">
    <div class="uk-container">…</div>
  </footer>
</body>
```

## Layout gotchas

- Width/child-width classes do nothing without the `uk-grid` **attribute** on the
  parent. Likewise a `uk-grid` with no widths just stacks.
- Put the card (or content box) **inside** the grid cell `<div>`, not on the cell
  itself — the cell handles width, the child handles appearance.
- Use `.uk-grid-match` (not manual heights) to equalize cards.
- Reach for Flex only for alignment/order; reach for Grid for column structure.
