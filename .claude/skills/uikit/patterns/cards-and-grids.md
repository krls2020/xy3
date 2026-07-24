# Pattern: Cards & responsive grids

Recipes for the most common layout job — a responsive grid of content boxes.
See `components/card.md`, `components/grid.md`, `components/width.md`,
`layout-system.md`.

## Key principle

**Grid cell handles width, its child handles appearance.** The `uk-grid` cell
`<div>` carries width/child-width; the `.uk-card` (or other box) goes *inside* it.
Use `.uk-grid-match` to equalize card heights across a row.

## Responsive card grid (1 → 2 → 3 columns)

```html
<div class="uk-container">
    <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid>
        <div>
            <div class="uk-card uk-card-default uk-card-body">
                <h3 class="uk-card-title">Feature</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div>
            <div class="uk-card uk-card-default uk-card-body">
                <h3 class="uk-card-title">Feature</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div>
            <div class="uk-card uk-card-default uk-card-body">
                <h3 class="uk-card-title">Feature</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </div>
</div>
```

Style modifiers: `.uk-card-default` `.uk-card-primary` `.uk-card-secondary`.
Add `.uk-card-hover` for a hover lift. Sizes: `.uk-card-small` / `.uk-card-large`.

## Card with header, body & footer

```html
<div class="uk-card uk-card-default">
    <div class="uk-card-header">
        <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
        <p class="uk-text-meta uk-margin-remove-top">Subtitle</p>
    </div>
    <div class="uk-card-body">
        <p>Main content.</p>
    </div>
    <div class="uk-card-footer">
        <a href="#" class="uk-button uk-button-text">Read more</a>
    </div>
</div>
```

## Card with media on top + badge

```html
<div class="uk-card uk-card-default">
    <div class="uk-card-media-top">
        <img src="images/photo.jpg" alt="">
    </div>
    <div class="uk-card-body">
        <div class="uk-card-badge uk-label">New</div>
        <h3 class="uk-card-title">Article title</h3>
        <p>Teaser text.</p>
    </div>
</div>
```

## Whole-card link (hover overlay on media)

```html
<div class="uk-card uk-card-default uk-card-hover">
    <a href="#" class="uk-link-reset">
        <div class="uk-card-media-top uk-inline uk-transition-toggle">
            <img src="images/photo.jpg" alt="">
            <div class="uk-position-cover uk-transition-fade uk-overlay uk-overlay-primary"></div>
        </div>
        <div class="uk-card-body">
            <h3 class="uk-card-title">Clickable card</h3>
        </div>
    </a>
</div>
```

## Sidebar + main content (uneven columns)

```html
<div class="uk-container">
    <div uk-grid>
        <div class="uk-width-1-4@m">
            <!-- sidebar (uk-nav, filters, …) -->
        </div>
        <div class="uk-width-expand@m">
            <!-- main content -->
        </div>
    </div>
</div>
```

## Masonry (uneven card heights, no gaps)

```html
<div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="masonry: pack">
    <div><div class="uk-card uk-card-default uk-card-body">Short</div></div>
    <div><div class="uk-card uk-card-default uk-card-body">Taller card …</div></div>
    <div><div class="uk-card uk-card-default uk-card-body">…</div></div>
</div>
```

## Gotchas

- Width/child-width classes need the `uk-grid` **attribute** on the parent.
- Don't put `.uk-card` directly on the grid cell — nest it inside.
- Equal-height cards → `.uk-grid-match` on the grid (not manual heights).
- Tighten/loosen the gap with `.uk-grid-small` / `.uk-grid-large` on the grid.
