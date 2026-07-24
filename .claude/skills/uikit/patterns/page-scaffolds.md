# Pattern: Full-page scaffolds

Complete page skeletons that combine the layout system with components. Start
from one of these and fill in the sections. See `layout-system.md`,
`navigation.md`, `hero-sections.md`, `cards-and-grids.md`.

## Key principle

A page is a **vertical stack of `.uk-section` bands**, each wrapping its content
in a `.uk-container`. Alternate section styles (`-default` / `-muted` /
`-primary`) for visual rhythm; use `.uk-light` on dark bands.

## Marketing / landing page

```html
<body>

    <!-- Header (see navigation.md for the mobile-menu version) -->
    <nav class="uk-navbar-container">
        <div class="uk-container">
            <div uk-navbar>
                <div class="uk-navbar-left">
                    <a class="uk-navbar-item uk-logo" href="#">Logo</a>
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                    </ul>
                    <a class="uk-button uk-button-primary uk-margin-small-left" href="#">Sign up</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero -->
    <div class="uk-cover-container uk-height-large uk-flex uk-flex-center uk-flex-middle uk-light">
        <img src="images/hero.jpg" alt="" uk-cover>
        <div class="uk-position-cover uk-overlay-primary"></div>
        <div class="uk-position-relative uk-text-center uk-padding">
            <h1 class="uk-heading-medium">Your product headline</h1>
            <p class="uk-text-lead">A short, punchy value proposition.</p>
            <a class="uk-button uk-button-primary uk-button-large" href="#">Get started</a>
        </div>
    </div>

    <!-- Features -->
    <section id="features" class="uk-section uk-section-default">
        <div class="uk-container">
            <h2 class="uk-heading-line uk-text-center"><span>Features</span></h2>
            <div class="uk-child-width-1-3@m uk-grid-match uk-margin-large-top" uk-grid uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 100">
                <div>
                    <div class="uk-card uk-card-default uk-card-body uk-text-center">
                        <span uk-icon="icon: bolt; ratio: 2"></span>
                        <h3 class="uk-card-title uk-margin-small-top">Fast</h3>
                        <p>Lightweight and modular.</p>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-body uk-text-center">
                        <span uk-icon="icon: settings; ratio: 2"></span>
                        <h3 class="uk-card-title uk-margin-small-top">Flexible</h3>
                        <p>Themeable with LESS/SCSS.</p>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-default uk-card-body uk-text-center">
                        <span uk-icon="icon: heart; ratio: 2"></span>
                        <h3 class="uk-card-title uk-margin-small-top">Accessible</h3>
                        <p>ARIA and keyboard built in.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to action band -->
    <section class="uk-section uk-section-primary uk-light uk-text-center">
        <div class="uk-container">
            <h2 class="uk-heading-small">Ready to start?</h2>
            <a class="uk-button uk-button-default uk-button-large" href="#">Create account</a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="uk-section uk-section-secondary uk-light">
        <div class="uk-container">
            <div class="uk-child-width-1-2 uk-child-width-1-4@m" uk-grid>
                <div>
                    <h5>Product</h5>
                    <ul class="uk-nav uk-nav-default">
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Company</h5>
                    <ul class="uk-nav uk-nav-default">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

</body>
```

## App / dashboard shell (sidebar + content)

```html
<body>

    <nav class="uk-navbar-container">
        <div class="uk-container uk-container-expand">
            <div uk-navbar>
                <div class="uk-navbar-left">
                    <a class="uk-navbar-toggle uk-hidden@m" href="#sidebar" uk-toggle uk-navbar-toggle-icon></a>
                    <a class="uk-navbar-item uk-logo" href="#">Dashboard</a>
                </div>
                <div class="uk-navbar-right">
                    <a class="uk-navbar-item" href="#" uk-icon="icon: bell"></a>
                    <a class="uk-navbar-item" href="#" uk-icon="icon: user"></a>
                </div>
            </div>
        </div>
    </nav>

    <div class="uk-container uk-container-expand uk-margin">
        <div uk-grid>
            <!-- Sidebar: inline on desktop, off-canvas on mobile -->
            <aside class="uk-width-1-5@m uk-visible@m">
                <ul class="uk-nav uk-nav-default" uk-nav>
                    <li class="uk-active"><a href="#">Overview</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </aside>

            <main class="uk-width-expand@m">
                <div class="uk-child-width-1-2@s uk-child-width-1-4@l uk-grid-match uk-margin" uk-grid>
                    <div><div class="uk-card uk-card-default uk-card-body">
                        <p class="uk-text-meta uk-margin-remove">Users</p>
                        <h2 class="uk-margin-remove">1,208</h2>
                    </div></div>
                    <div><div class="uk-card uk-card-default uk-card-body">
                        <p class="uk-text-meta uk-margin-remove">Revenue</p>
                        <h2 class="uk-margin-remove">$4.2k</h2>
                    </div></div>
                    <div><div class="uk-card uk-card-default uk-card-body">
                        <p class="uk-text-meta uk-margin-remove">Churn</p>
                        <h2 class="uk-margin-remove">1.1%</h2>
                    </div></div>
                    <div><div class="uk-card uk-card-default uk-card-body">
                        <p class="uk-text-meta uk-margin-remove">NPS</p>
                        <h2 class="uk-margin-remove">63</h2>
                    </div></div>
                </div>

                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">Recent activity</h3>
                    <table class="uk-table uk-table-divider uk-table-hover">
                        <thead><tr><th>User</th><th>Action</th><th>Date</th></tr></thead>
                        <tbody>
                            <tr><td>Jane</td><td>Signed up</td><td>Today</td></tr>
                            <tr><td>Bob</td><td>Upgraded</td><td>Yesterday</td></tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    </div>

    <!-- Mobile sidebar -->
    <div id="sidebar" uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar">
            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <ul class="uk-nav uk-nav-default" uk-nav>
                <li class="uk-active"><a href="#">Overview</a></li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
    </div>

</body>
```

## Article / docs layout (content + table of contents)

```html
<div class="uk-container uk-margin-large-top">
    <div uk-grid>
        <div class="uk-width-1-4@m uk-visible@m">
            <ul class="uk-nav uk-nav-default" uk-sticky="offset: 30; bottom: true">
                <li class="uk-nav-header">On this page</li>
                <li class="uk-active"><a href="#intro">Introduction</a></li>
                <li><a href="#usage">Usage</a></li>
                <li><a href="#api">API</a></li>
            </ul>
        </div>
        <article class="uk-width-expand@m">
            <h1>Article title</h1>
            <p class="uk-text-lead">Lead paragraph.</p>
            <h2 id="usage">Usage</h2>
            <p>…</p>
        </article>
    </div>
</div>
```

## Gotchas

- Wrap every section's content in `.uk-container` (use `.uk-container-expand` for
  full-width dashboards).
- Reuse the sidebar's `uk-nav` markup in both the inline sidebar and the mobile
  off-canvas.
- `uk-scrollspy` on a grid animates children in as they scroll into view — the
  `target: > div` selector targets the grid cells.
