# UIkit quick reference

The 80% you need on one page. Read this first for most tasks; open a
`components/<name>.md` only for a component's full option list, or a
`patterns/*.md` for a whole page section. Every class/attribute here is verbatim
from the UIkit source.

## Boilerplate (load all three files)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3/dist/css/uikit.min.css">
  <script src="https://cdn.jsdelivr.net/npm/uikit@3/dist/js/uikit.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/uikit@3/dist/js/uikit-icons.min.js"></script>
</head>
<body></body>
</html>
```

Missing `uikit-icons.min.js` → every `uk-icon` renders empty.

## Breakpoints (mobile-first; suffix opts in from that width up)

`@s` ≥640 · `@m` ≥960 · `@l` ≥1200 · `@xl` ≥1600. Only these four. Base class = all widths.

## Layout

```html
<!-- band → container → grid → cells (width) → content box -->
<section class="uk-section uk-section-muted">
  <div class="uk-container">
    <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid>
      <div><div class="uk-card uk-card-default uk-card-body">Item</div></div>
    </div>
  </div>
</section>
```

- **Container** `.uk-container` (+ `-xsmall -small -large -xlarge -expand`)
- **Section** `.uk-section` + `-default -muted -primary -secondary` (last two dark → add `.uk-light`) + size `-xsmall … -xlarge`
- **Grid**: `uk-grid` attribute on parent; modifiers `.uk-grid-{small|medium|large|collapse}`, `.uk-grid-match` (equal heights), `.uk-grid-divider`, `uk-grid="masonry: pack"`
- **Width** (per cell): `.uk-width-{1-1|1-2|1-3|2-3|1-4|3-4|1-5|1-6|auto|expand}` + `@s@m@l@xl`; fixed `.uk-width-{small|medium|large|xlarge}`
- **Child-width** (on grid, equal cols): `.uk-child-width-{1-2|1-3|1-4|auto|expand}` + breakpoints
- **Flex**: `.uk-flex` + justify `-left -center -right -between -around`, align `-middle -top -bottom`, `-column`, `-wrap`, reorder `-first -last`

## Spacing (never inline styles)

`.uk-margin` · `.uk-margin-{small|medium|large|xlarge}-{top|bottom|left|right}` · `.uk-margin-auto` · `.uk-margin-remove` · `.uk-padding` · `.uk-padding-{small|large}` · parent attr `uk-margin` auto-spaces stacked children.

## Text & utilities

- Text: `.uk-text-{lead|meta|small|large}` · `.uk-text-{muted|primary|secondary|success|warning|danger|emphasis}` · `.uk-text-{bold|light|italic}` · `.uk-text-{left|center|right}[@s…]` · `.uk-text-{uppercase|capitalize|truncate|nowrap|break}`
- Background: `.uk-background-{default|muted|primary|secondary}` · `.uk-background-{cover|contain|fixed}`
- Effects: `.uk-box-shadow-{small|medium|large|xlarge}` · `.uk-box-shadow-hover-*` · `.uk-border-{rounded|circle|pill}` · `.uk-object-{cover|contain}`
- Dark/light: `.uk-light` (on dark bg) · `.uk-dark` (on light bg over media) · `.uk-preserve-color`
- Visibility: `.uk-visible@m` · `.uk-hidden@s` · `.uk-invisible`
- Position: `.uk-position-{relative|absolute|cover|center|top|bottom}` · needs `.uk-inline` wrapper on media
- Icons: `<span uk-icon="icon: heart"></span>` (ratio: 2 to size)

## Hot components — minimal markup

**Button** — `.uk-button` + `-default -primary -secondary -danger -text -link`; size `-small -large`.
```html
<button class="uk-button uk-button-primary">Go</button>
```

**Card** — `.uk-card` + `-default -primary -secondary -hover`; parts `.uk-card-{body|header|footer|title|media-top|badge}`.
```html
<div class="uk-card uk-card-default uk-card-body">
  <h3 class="uk-card-title">Title</h3><p>…</p>
</div>
```

**Navbar** (wrap in `.uk-container`; see patterns/navigation.md for mobile menu):
```html
<nav class="uk-navbar-container"><div class="uk-container"><div uk-navbar>
  <div class="uk-navbar-left"><a class="uk-navbar-item uk-logo" href="#">Logo</a></div>
  <div class="uk-navbar-right"><ul class="uk-navbar-nav">
    <li class="uk-active"><a href="#">Home</a></li>
  </ul></div>
</div></div></nav>
```

**Offcanvas** (mobile menu / sidebar):
```html
<a href="#off" uk-toggle>Open</a>
<div id="off" uk-offcanvas="overlay: true"><div class="uk-offcanvas-bar">
  <button class="uk-offcanvas-close" type="button" uk-close></button>
  <ul class="uk-nav uk-nav-default"><li><a href="#">Item</a></li></ul>
</div></div>
```

**Modal** (toggle by id):
```html
<button uk-toggle="target: #m" type="button">Open</button>
<div id="m" uk-modal><div class="uk-modal-dialog uk-modal-body">
  <h2 class="uk-modal-title">Title</h2>
  <button class="uk-modal-close" type="button" uk-close></button>
</div></div>
```

**Dropdown**:
```html
<button type="button">Menu</button>
<div uk-dropdown><ul class="uk-nav uk-dropdown-nav"><li><a href="#">Item</a></li></ul></div>
```

**Tab** (auto-linked to a switcher container below it via `uk-tab`):
```html
<ul uk-tab>
  <li class="uk-active"><a href="#">Tab 1</a></li><li><a href="#">Tab 2</a></li>
</ul>
```

**Switcher** (toggle content sets):
```html
<ul uk-switcher><li><a href="#">One</a></li><li><a href="#">Two</a></li></ul>
<ul class="uk-switcher"><li>Content one</li><li>Content two</li></ul>
```

**Accordion**:
```html
<ul uk-accordion>
  <li class="uk-open"><a class="uk-accordion-title" href>Q</a>
    <div class="uk-accordion-content">A</div></li>
</ul>
```

**Alert** (dismissible):
```html
<div class="uk-alert-primary" uk-alert><a href class="uk-alert-close" uk-close></a><p>…</p></div>
```

**Notification** (JS only): `UIkit.notification('Saved', {status: 'success'})`

**Form** (stacked):
```html
<form class="uk-form-stacked"><div class="uk-margin">
  <label class="uk-form-label" for="n">Name</label>
  <div class="uk-form-controls"><input class="uk-input" id="n" type="text"></div>
</div></form>
```
Controls: `.uk-input .uk-select .uk-textarea .uk-checkbox .uk-radio .uk-range`; state `.uk-form-{danger|success}`; layout `.uk-form-{stacked|horizontal}`.

**Table** — `.uk-table` + `-divider -striped -hover -small`; `.uk-table-responsive`.
```html
<table class="uk-table uk-table-divider"><thead><tr><th>H</th></tr></thead><tbody><tr><td>C</td></tr></tbody></table>
```

**List** — `.uk-list` + `-disc -decimal -divider -striped -bullet`.

**Lightbox** (gallery):
```html
<div uk-lightbox><a href="img.jpg"><img src="thumb.jpg" alt=""></a></div>
```

**Slideshow / Slider** (carousel):
```html
<div uk-slideshow><ul class="uk-slideshow-items"><li><img src="" alt="" uk-cover></li></ul></div>
```

**Cover** (hero media): `<div class="uk-cover-container uk-height-large"><img src="" alt="" uk-cover></div>`

**Icon nav** (social row): `<ul class="uk-iconnav"><li><a href uk-icon="github"></a></li></ul>`

**Label / Badge**: `<span class="uk-label">New</span>` · `<span class="uk-badge">3</span>`

---
For a whole page section (hero, pricing, dashboard, nav+menu) → `../patterns/`.
For every option of a component → `components/<name>.md`. Full catalog → `_index.md`.
