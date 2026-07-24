# Setup & Installation

How to get UIkit onto a page and the boilerplate every UIkit document needs.

## Minimal starter document (copy-paste)

This is the canonical skeleton. Note **three** files load, and the two JS files
go in the `<head>` (UIkit auto-initializes; `defer` is fine and recommended).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Title</title>

    <!-- UIkit CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3/dist/css/uikit.min.css" />

    <!-- UIkit JS + the icon library (BOTH are required for icons to render) -->
    <script src="https://cdn.jsdelivr.net/npm/uikit@3/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3/dist/js/uikit-icons.min.js"></script>
</head>
<body>

    <div class="uk-container uk-margin-large-top">
        <h1>Hello UIkit</h1>
        <p class="uk-text-lead">Content goes inside a container.</p>
    </div>

</body>
</html>
```

`uikit-icons.min.js` is **not optional** if you use any `uk-icon` — without it,
icons render as empty spans.

## Installation options

| Method | Command / link | You get |
|---|---|---|
| CDN (jsDelivr) | `https://cdn.jsdelivr.net/npm/uikit@3/dist/…` | Prebuilt CSS + JS, zero build |
| npm / pnpm | `pnpm add uikit` (or `npm i uikit`) | Prebuilt CSS + JS **and** the Less sources (for theming) |
| GitHub source | `git clone https://github.com/uikit/uikit.git` | All sources + build scripts |
| Download release | github.com/uikit/uikit/releases/latest | Zip of compiled CSS + JS |

Pin a version in production (e.g. `uikit@3.25.20`) rather than `@3` for
reproducibility; grab SRI hashes from jsDelivr if you need them.

## Importing via a bundler (Vite / webpack / Rollup)

```js
import 'uikit/dist/css/uikit.min.css';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// Load the icon library into UIkit
UIkit.use(Icons);

// Optional: expose globally so uk-* attributes anywhere are handled
window.UIkit = UIkit;
```

The `uk-*` attributes still work the same way once UIkit is imported and running —
you rarely call the JS API directly. See `javascript.md`.

## What ships in `dist`

| File | Use |
|---|---|
| `css/uikit.min.css` | Full CSS incl. the default theme — the normal choice |
| `css/uikit-core.min.css` | Core styles **without** the default theme (for custom themes) |
| `css/uikit.rtl.min.css` | Right-to-left version (see `accessibility-rtl.md`) |
| `js/uikit.min.js` | Full JS: core + all components |
| `js/uikit-core.min.js` | Core only; extra components live in `js/components/` |
| `js/uikit-icons.min.js` | The SVG icon library — always include alongside the JS |

## Compiling from source

```sh
pnpm install     # once
pnpm compile     # build dist/
pnpm watch       # rebuild on change
```

Compile from source when you want a **custom theme** (override Less/SCSS
variables — see `theming.md`), a **custom prefix**, or a **scoped** build (see
`conflicts-and-scope.md`).

## Editor autocomplete

UIkit has autocomplete plugins/snippets (VS Code: "UIkit 3 snippets", plus
Sublime/Atom packages) — worth installing so class names are suggested.
