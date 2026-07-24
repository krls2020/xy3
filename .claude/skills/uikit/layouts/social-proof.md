# Archetype: Social proof (testimonials · logos · stats)

Three trust-building bands that recur on real UIkit-3 landing pages (structure
only). Use one or all, usually between features and the final CTA.

## Principles at work (§11)

- **Testimonials** over a dark `uk-cover-container` band (`uk-section-xlarge
  uk-light`), as a `uk-slider`/`uk-slideshow`.
- **Logo cloud** in a compact `uk-section-small uk-section-muted` +
  `uk-container-small`, `uk-child-width-1-4 uk-child-width-expand@m`.
- **Stats** as `uk-child-width-1-3@m uk-grid-large`, big number + muted label.

## Testimonials (slider over a dark cover)

```html
<section class="uk-section uk-section-xlarge uk-light uk-cover-container">
  <img src="" alt="" uk-cover>
  <div class="uk-overlay-primary uk-position-cover"></div>
  <div class="uk-container uk-position-relative">
    <div uk-slider>
      <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-2@m">
        <li>
          <blockquote class="uk-margin-right">
            <p class="uk-text-lead">“Quote placeholder.”</p>
            <footer>Name, <cite>Company</cite></footer>
          </blockquote>
        </li>
        <!-- repeat -->
      </ul>
      <a class="uk-position-center-left" href uk-slider-item="previous" uk-slidenav-previous></a>
      <a class="uk-position-center-right" href uk-slider-item="next" uk-slidenav-next></a>
    </div>
  </div>
</section>
```

## Logo cloud

```html
<section class="uk-section uk-section-small uk-section-muted">
  <div class="uk-container uk-container-small">
    <div class="uk-child-width-1-4 uk-child-width-expand@m uk-flex-middle uk-text-center" uk-grid
         uk-scrollspy="target: > div; cls: uk-animation-scale-down; delay: 100">
      <div><img src="" alt="" class="uk-preserve-width"></div>
      <div><img src="" alt="" class="uk-preserve-width"></div>
      <div><img src="" alt="" class="uk-preserve-width"></div>
      <div><img src="" alt="" class="uk-preserve-width"></div>
    </div>
  </div>
</section>
```

## Stats band

```html
<section class="uk-section uk-section-default">
  <div class="uk-container">
    <div class="uk-child-width-1-3@m uk-grid-large uk-text-center" uk-grid>
      <div>
        <div class="uk-text-large uk-text-primary">10k+</div>
        <div class="uk-text-meta uk-text-muted">Users</div>
      </div>
      <div>
        <div class="uk-text-large uk-text-primary">99.9%</div>
        <div class="uk-text-meta uk-text-muted">Uptime</div>
      </div>
      <div>
        <div class="uk-text-large uk-text-primary">4.9/5</div>
        <div class="uk-text-meta uk-text-muted">Rating</div>
      </div>
    </div>
  </div>
</section>
```
