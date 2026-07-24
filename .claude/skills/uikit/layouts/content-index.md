# Archetype: Content index (blog / news / portfolio)

A listing page: a featured item, then a grid of content cards. Distilled from a
real UIkit-3 news/blog page (structure only).

## Principles at work

- **Featured item** = `uk-height-large uk-cover-container uk-border-rounded` with
  an `uk-overlay-primary uk-position-cover` and centered `uk-light` copy (§8).
- **Post cards**: `uk-card uk-card-default uk-card-small uk-border-rounded`, often
  with an inner grid (thumbnail column + text column) for a horizontal card, or
  `uk-card-media-top` for a vertical card.
- List grid: `uk-child-width-1-2@m` (or `1-3@m`) + `uk-grid-match`.
- Category/meta via `uk-text-meta` + `uk-label`.

## Featured (hero card)

```html
<section class="uk-section uk-section-small">
  <div class="uk-container">
    <div class="uk-height-large uk-cover-container uk-border-rounded">
      <img src="" alt="" uk-cover>
      <div class="uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light uk-text-center">
        <div>
          <span class="uk-label">Featured</span>
          <h2 class="uk-margin-small-top">Headline</h2>
          <p class="uk-text-meta uk-light">Author · date</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Post grid — vertical cards (media on top)

```html
<section class="uk-section uk-section-default uk-padding-remove-top">
  <div class="uk-container">
    <div class="uk-child-width-1-2@m uk-child-width-1-3@l uk-grid-match uk-grid-medium" uk-grid
         uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 100">
      <div>
        <div class="uk-card uk-card-default uk-border-rounded">
          <div class="uk-card-media-top"><img src="" alt=""></div>
          <div class="uk-card-body">
            <span class="uk-text-meta">Category</span>
            <h3 class="uk-card-title uk-margin-small-top"><a href="#" class="uk-link-heading">Post title</a></h3>
            <p>Excerpt.</p>
          </div>
        </div>
      </div>
      <!-- repeat -->
    </div>
  </div>
</section>
```

## Post grid — horizontal cards (thumb + text)

```html
<div class="uk-card uk-card-default uk-card-small uk-border-rounded">
  <div class="uk-grid-collapse uk-flex-middle" uk-grid>
    <div class="uk-width-1-3@s"><img src="" alt="" class="uk-height-1-1 uk-object-cover"></div>
    <div class="uk-width-2-3@s uk-card-body">
      <span class="uk-text-meta">Category</span>
      <h3 class="uk-card-title uk-margin-remove-bottom">Post title</h3>
      <p>Excerpt.</p>
    </div>
  </div>
</div>
```

## Pagination footer

```html
<ul class="uk-pagination uk-flex-center">
  <li><a href="#"><span uk-pagination-previous></span></a></li>
  <li class="uk-active"><span>1</span></li>
  <li><a href="#">2</a></li>
  <li><a href="#"><span uk-pagination-next></span></a></li>
</ul>
```
