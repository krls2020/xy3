# Icon system & custom icons

UIkit ships an SVG icon library bundled in **one** file — `uikit-icons.min.js`.
No separate SVG files are needed. It must be loaded alongside `uikit.min.js`
(see `setup.md`), or every icon renders as an empty element.

## Using an icon — `components/icon.md`

`icon` is the **primary option**, so both forms work:

```html
<span uk-icon="icon: heart"></span>
<span uk-icon="heart"></span>          <!-- primary-option shorthand -->
```

Size with `ratio` (1 = default):

```html
<span uk-icon="icon: heart; ratio: 2"></span>
```

Icons inherit the current text color, so color them with `.uk-text-*` (or the
inverse system on dark backgrounds).

### Icons as links / buttons

```html
<a href="#" class="uk-icon-link" uk-icon="icon: copy"></a>
<button class="uk-icon-button" uk-icon="icon: plus" type="button"></button>
```

### Icon navigation

For a row of social/action icons use Iconnav — `components/iconnav.md`:

```html
<ul class="uk-iconnav">
    <li><a href="#" uk-icon="icon: github"></a></li>
    <li><a href="#" uk-icon="icon: twitter"></a></li>
</ul>
```

Find valid icon names in the Icon component doc (getuikit.com/docs/icon) or in
`src/images/icons/` and `src/images/components/` of the source. Don't guess
names — an unknown name renders nothing.

## Inline SVG — `components/svg.md`

Load and inline an external SVG (so it inherits `currentColor` and can be styled)
with the `uk-svg` attribute on an `<img>`:

```html
<img src="/images/logo.svg" width="100" height="40" alt="" uk-svg>
```

The SVG markup is injected inline, letting CSS target its paths.

## Custom icons

Add or override icons at build time (requires the GitHub-source setup — see
`setup.md`). The build scans:

1. `custom/icons/*.svg` — added globally → bundled into `dist/js/uikit-icons.js`
2. `custom/<theme>/icons/*.svg` — theme-scoped → `dist/js/uikit-icons-<theme>.js`

```sh
pnpm compile
```

- A file named after an **existing** icon (e.g. `custom/icons/close.svg`)
  **overwrites** that icon.
- A new name (e.g. `custom/icons/example.svg`) adds a new icon, usable as
  `<span uk-icon="example"></span>`.
- To avoid clobbering a built-in, check `src/images/components/` and
  `src/images/icons/` for the name first.

## Runtime registration (no rebuild)

You can also add icons from JS at runtime by passing SVG strings to the icon
library via `UIkit.icon.add({ name: '<svg …>' })` after loading UIkit — handy
when you can't run the build.
