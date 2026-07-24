# Archetype: Marketing landing page (full assembly)

The complete band cadence of a real UIkit-3 landing page (structure only). This
ties the principles together — read `layout-principles.md` for the "why" of each
band, and the other files in this folder for the full markup of each section.

## The band cadence (observed on real pages)

```
1. HERO          uk-cover-container · uk-light        (dark, transparent navbar overlaid)
2. FEATURES      uk-section-default                   (alternating benefit rows, 1-2@l)
3. BIG BENEFIT   uk-section-secondary · uk-section-large   (dark accent band)
4. TESTIMONIALS  uk-cover-container · uk-section-xlarge · uk-light   (dark, slider)
5. FEATURE GRID  uk-section-default                   (intro xsmall + 1-3@m grid)
6. LOGO CLOUD    uk-section-small · uk-section-muted  (container-small, 1-4→expand@m)
7. CTA           uk-section-primary · uk-light        (centered, container-small)
8. FOOTER        uk-section-secondary                 (dark, grid-large 1-2@m + 1-6@m)
```

Note: no two adjacent bands share a style; size varies (`large`/`xlarge` for big
moments, `small` for utility bands); container narrows (`-small`/`-xsmall`) to
focus intros, logos and the CTA. That is the whole rhythm.

## Skeleton (bands abbreviated — expand each from its own file)

```html
<body>

  <!-- 1. HERO: dark cover + transparent navbar overlaid (see ../patterns/hero-sections.md) -->
  <div class="uk-cover-container uk-light uk-flex uk-flex-column" uk-height-viewport>
    <nav class="uk-navbar-container uk-navbar-transparent">
      <div class="uk-container"><div uk-navbar>
        <div class="uk-navbar-left"><a class="uk-navbar-item uk-logo" href="#">Logo</a></div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav uk-visible@s"><li class="uk-active"><a href="#">Product</a></li></ul>
          <a class="uk-navbar-toggle uk-hidden@s" href="#mobile" uk-toggle uk-navbar-toggle-icon></a>
        </div>
      </div></div>
    </nav>
    <img src="" alt="" uk-cover>
    <div class="uk-overlay-primary uk-position-cover"></div>
    <div class="uk-container uk-flex-auto uk-flex uk-flex-middle uk-position-relative" uk-scrollspy="cls: uk-animation-slide-bottom-medium">
      <div class="uk-width-1-2@s">
        <h1 class="uk-heading-medium">Headline</h1>
        <p class="uk-text-lead">Value proposition.</p>
        <a class="uk-button uk-button-primary uk-button-large" href="#">Get started</a>
        <a class="uk-button uk-button-default uk-button-large" href="#">Docs</a>
      </div>
    </div>
  </div>

  <!-- 2. FEATURES: alternating benefit rows -> layouts/feature-showcase.md -->
  <section class="uk-section uk-section-default"> … </section>

  <!-- 3. DARK ACCENT BENEFIT band -->
  <section class="uk-section uk-section-secondary uk-section-large uk-light">
    <div class="uk-container">
      <div class="uk-grid-large uk-flex-middle uk-child-width-1-2@l" uk-grid> … </div>
    </div>
  </section>

  <!-- 4. TESTIMONIALS + 5. FEATURE GRID + 6. LOGO CLOUD -> layouts/social-proof.md, feature-showcase.md -->

  <!-- 7. FINAL CTA: centered, focused -->
  <section class="uk-section uk-section-primary uk-light uk-text-center">
    <div class="uk-container uk-container-small">
      <h2 class="uk-heading-small">Ready to start?</h2>
      <a class="uk-button uk-button-default uk-button-large" href="#">Create account</a>
    </div>
  </section>

  <!-- 8. FOOTER: darkest band -->
  <footer class="uk-section uk-section-secondary">
    <div class="uk-container">
      <div class="uk-grid-large" uk-grid>
        <div class="uk-width-1-2@m"><h5>Brand</h5></div>
        <div class="uk-width-1-6@m"><ul class="uk-nav uk-nav-default"><li><a href="#">Link</a></li></ul></div>
        <div class="uk-width-1-6@m"><ul class="uk-nav uk-nav-default"><li><a href="#">Link</a></li></ul></div>
        <div class="uk-width-1-6@m"><ul class="uk-nav uk-nav-default"><li><a href="#">Link</a></li></ul></div>
      </div>
    </div>
  </footer>

  <!-- mobile menu -->
  <div id="mobile" uk-offcanvas="overlay: true"><div class="uk-offcanvas-bar">
    <button class="uk-offcanvas-close" type="button" uk-close></button>
    <ul class="uk-nav uk-nav-default"><li class="uk-active"><a href="#">Product</a></li></ul>
  </div></div>

</body>
```

For the basic (non-commercial-rhythm) landing scaffold, `../patterns/page-scaffolds.md`
also has a simpler version.
