# Pattern: Navigation (navbar + responsive mobile menu)

Composed, copy-pasteable navigation recipes. See `components/navbar.md`,
`components/offcanvas.md`, `components/nav.md`, `components/dropdown.md`.

## Key principle

The navbar container has **no horizontal padding** — wrap the `uk-navbar` in a
`.uk-container` so it aligns with the rest of the page. Structure is always:
`.uk-navbar-container` → `.uk-container` → `[uk-navbar]` → `.uk-navbar-left` /
`.uk-navbar-right` → `.uk-navbar-nav`.

## Responsive navbar with a mobile off-canvas menu (the standard pattern)

Show the horizontal nav on desktop (`uk-visible@m`), swap to a hamburger toggle
on mobile (`uk-hidden@m`) that opens an off-canvas holding the same links.

```html
<nav class="uk-navbar-container">
    <div class="uk-container">
        <div uk-navbar>

            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo" href="#">Logo</a>
            </div>

            <div class="uk-navbar-right">

                <!-- Desktop nav -->
                <ul class="uk-navbar-nav uk-visible@m">
                    <li class="uk-active"><a href="#">Home</a></li>
                    <li>
                        <a href="#">Products</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">About</a></li>
                </ul>

                <a class="uk-button uk-button-primary uk-margin-small-left uk-visible@m" href="#">Sign up</a>

                <!-- Mobile hamburger -->
                <a class="uk-navbar-toggle uk-hidden@m" href="#mobile-nav" uk-toggle uk-navbar-toggle-icon></a>

            </div>
        </div>
    </div>
</nav>

<!-- Off-canvas menu, opened by the toggle above -->
<div id="mobile-nav" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <ul class="uk-nav uk-nav-default">
            <li class="uk-active"><a href="#">Home</a></li>
            <li class="uk-parent">
                <a href="#">Products</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </li>
            <li><a href="#">About</a></li>
            <li class="uk-margin-small-top"><a class="uk-button uk-button-primary" href="#">Sign up</a></li>
        </ul>
    </div>
</div>
```

## Sticky navbar

Make the header stick on scroll — wrap it in a `uk-sticky` element. `sel-target`
+ `cls-active` let you restyle it once stuck; `show-on-up` reveals it only when
scrolling up. See `components/sticky.md`.

```html
<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <nav class="uk-navbar-container">
        <div class="uk-container">
            <div uk-navbar> … </div>
        </div>
    </nav>
</div>
```

## Transparent navbar over a hero

Place the navbar above a full-bleed hero and let the hero show through. Put the
navbar in a `.uk-position-top` element and add `.uk-light` (dark hero) so the
links are legible. See `hero-sections.md`.

```html
<div class="uk-position-relative">
    <div class="uk-position-top uk-light">
        <nav class="uk-navbar-container uk-navbar-transparent">
            <div class="uk-container"><div uk-navbar> … </div></div>
        </nav>
    </div>
    <!-- hero cover container here -->
</div>
```

## Sidebar / vertical nav (docs & dashboards)

Use `uk-nav` for a vertical menu; pair with the layout grid for a sidebar.

```html
<div uk-grid>
    <div class="uk-width-1-4@m">
        <ul class="uk-nav uk-nav-default" uk-nav>
            <li class="uk-active"><a href="#">Getting started</a></li>
            <li class="uk-parent">
                <a href="#">Components</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">Button</a></li>
                    <li><a href="#">Card</a></li>
                </ul>
            </li>
            <li class="uk-nav-divider"></li>
            <li class="uk-nav-header">Resources</li>
            <li><a href="#">Docs</a></li>
        </ul>
    </div>
    <div class="uk-width-expand@m">
        <!-- main content -->
    </div>
</div>
```

Adding the `uk-nav` **attribute** makes parent items collapsible (accordion-style).

## Gotchas

- Always wrap `uk-navbar` in `.uk-container` — otherwise it's flush to the edges.
- The mobile toggle's `href` must match the off-canvas `id`; `uk-toggle` does the
  opening (no JS).
- Reuse `uk-nav` (not `uk-navbar-nav`) inside the off-canvas bar — navbar-nav is
  horizontal, nav is vertical.
