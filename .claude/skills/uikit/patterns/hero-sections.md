# Pattern: Hero sections

Full-width hero banners with a background image/video and overlaid content.
See `components/cover.md`, `components/position.md`, `components/overlay.md`,
`components/height.md`.

## Key principle

A hero = a **cover container** (`.uk-cover-container`) that clips a media element
marked `uk-cover` (it fills and centers automatically), given a height, with the
content positioned on top via `.uk-position-*`. The media never dictates layout;
the container's height does.

## Image hero with centered content

```html
<div class="uk-cover-container uk-height-large uk-flex uk-flex-center uk-flex-middle uk-light">
    <img src="images/hero.jpg" alt="" uk-cover>
    <div class="uk-position-cover uk-overlay-primary"></div>
    <div class="uk-position-relative uk-text-center uk-padding">
        <h1 class="uk-heading-medium">Build faster with UIkit</h1>
        <p class="uk-text-lead">A lightweight, modular front-end framework.</p>
        <a class="uk-button uk-button-primary uk-button-large" href="#">Get started</a>
    </div>
</div>
```

- `.uk-overlay-primary` in a `.uk-position-cover` layer darkens the image so text
  stays readable; `.uk-light` flips text/components to the light variant.
- Swap `.uk-height-large` for `uk-height-viewport` to make it full-screen.

## Full-screen video hero

```html
<div class="uk-cover-container" uk-height-viewport>
    <video src="hero.mp4" autoplay loop muted playsinline uk-cover></video>
    <div class="uk-position-cover uk-overlay-primary"></div>
    <div class="uk-position-center uk-text-center uk-light uk-padding">
        <h1 class="uk-heading-large">Your headline</h1>
        <a class="uk-button uk-button-primary uk-button-large" href="#">Watch demo</a>
    </div>
</div>
```

`uk-cover` also accepts `<iframe>` (YouTube/Vimeo) — same wrapper.

## Split hero (text + image, no overlay)

Two-column hero using the grid: copy on one side, media on the other, vertically
centered.

```html
<div class="uk-section uk-section-muted">
    <div class="uk-container">
        <div class="uk-grid-large uk-flex-middle" uk-grid>
            <div class="uk-width-1-2@m">
                <h1 class="uk-heading-small">Ship your idea</h1>
                <p class="uk-text-lead">Compose UI from ready-made components.</p>
                <a class="uk-button uk-button-primary" href="#">Start free</a>
            </div>
            <div class="uk-width-1-2@m">
                <img src="images/product.png" alt="" class="uk-border-rounded uk-box-shadow-large">
            </div>
        </div>
    </div>
</div>
```

## Gradient / solid color hero (no image)

```html
<div class="uk-section uk-section-primary uk-light uk-padding-large">
    <div class="uk-container uk-text-center">
        <h1 class="uk-heading-medium">Simple. Fast. Modular.</h1>
        <p class="uk-text-lead">No image needed.</p>
        <a class="uk-button uk-button-default uk-button-large" href="#">Get UIkit</a>
    </div>
</div>
```

## Gotchas

- The media element **must** carry the `uk-cover` attribute and sit inside
  `.uk-cover-container`, or it won't fill/clip.
- Give the container a height (`uk-height-*` or `uk-height-viewport`) — cover has
  nothing to fill otherwise.
- Overlaid text needs a positioned layer (`.uk-position-cover` /
  `.uk-position-center`) plus `.uk-light` (or an overlay) for contrast.
