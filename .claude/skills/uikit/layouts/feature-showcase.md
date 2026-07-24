# Archetype: Feature showcase (alternating benefit rows)

The classic "media + text" rows that alternate side to side down the page.
Distilled from real UIkit-3 landing pages (structure only).

## Principles at work

- **Plain columns, no cards** (§6): `uk-grid` + `uk-child-width-1-2@l` +
  `uk-flex-middle` (vertical center of image & copy).
- **Flip the image side** on alternate rows with `uk-flex-first@l` on the media
  column, so rows zig-zag.
- Each row in its own `uk-section` band, alternating `-default` / `-muted` (§2).
- Reveal on scroll with `uk-scrollspy` (§10).
- A centered section-header intro band precedes the rows (§9).

## Skeleton

```html
<!-- Intro -->
<section class="uk-section uk-section-default">
  <div class="uk-container uk-container-xsmall uk-text-center">
    <h2 class="uk-heading-small">What you get</h2>
    <p class="uk-text-lead uk-text-muted">One line of context.</p>
  </div>
</section>

<!-- Row 1: text left, media right -->
<section class="uk-section uk-section-muted">
  <div class="uk-container">
    <div class="uk-grid-large uk-flex-middle" uk-grid
         uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 150">
      <div class="uk-width-1-2@l">
        <h3 class="uk-heading-small">Benefit one</h3>
        <p class="uk-text-lead">Describe it.</p>
        <a class="uk-button uk-button-text" href="#">Learn more</a>
      </div>
      <div class="uk-width-1-2@l">
        <img src="" alt="" class="uk-border-rounded uk-box-shadow-large">
      </div>
    </div>
  </div>
</section>

<!-- Row 2: media left (flipped), text right -->
<section class="uk-section uk-section-default">
  <div class="uk-container">
    <div class="uk-grid-large uk-flex-middle" uk-grid
         uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 150">
      <div class="uk-width-1-2@l uk-flex-first@l">
        <img src="" alt="" class="uk-border-rounded uk-box-shadow-large">
      </div>
      <div class="uk-width-1-2@l">
        <h3 class="uk-heading-small">Benefit two</h3>
        <p class="uk-text-lead">Describe it.</p>
      </div>
    </div>
  </div>
</section>
```

## Variant: feature grid (equal tiles instead of rows)

For many small features, use a grid of icon tiles instead of alternating rows:

```html
<section class="uk-section uk-section-default">
  <div class="uk-container">
    <div class="uk-grid-large uk-child-width-1-3@m uk-text-center" uk-grid
         uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 100">
      <div>
        <span uk-icon="icon: bolt; ratio: 2"></span>
        <h3 class="uk-card-title uk-margin-small-top">Fast</h3>
        <p>Short description.</p>
      </div>
      <!-- repeat -->
    </div>
  </div>
</section>
```
