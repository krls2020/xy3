# Accessibility & RTL

## What UIkit handles for you

UIkit's interactive JS components (dropdown, modal, slideshow, lightbox,
offcanvas, tab, accordion, …) are built to be accessible:

- **Keyboard support** follows the usual convention — <kbd>Tab</kbd> /
  <kbd>Shift+Tab</kbd> move between components; arrow keys move within a component
  that has multiple focusable items. Specific keys are noted on each component's
  page.
- **WAI-ARIA** roles, states and properties are set **automatically** in the
  markup so screen readers can operate the components.

## What you still must do

- Provide **text alternatives**: `alt` on images, `aria-label` on icon-only
  buttons/links (`<a uk-icon="icon: twitter" aria-label="Twitter">`).
- Use **semantic landmarks and headings** (`<nav> <main> <header> <footer>`, a
  sensible `<h1>`…`<h6>` order). UIkit styles them but won't invent structure.
- Because components are generic, UIkit can't always infer the exact role — for
  complex widgets, verify against the ARIA Authoring Practices Guide (APG).
- **Color contrast:** UIkit's default muted text/background can fall below WCAG
  (4.5:1 text, 3:1 non-text). Fix by overriding the `@global-*` / `$global-*`
  color variables (see `theming.md`), not by patching CSS.

## Internationalization (i18n)

Component `aria-label` default texts are translatable. Set translations per
instance via the component's options, or globally. The translation keys live in
each component's documentation.

```js
// Global example
UIkit.mixin({ i18n: { totop: { label: 'Nach oben' } } }, 'totop');
```

## Right-to-left (RTL)

1. Use the RTL stylesheet `uikit.rtl.min.css` (in `dist/`) instead of
   `uikit.min.css`.
2. Add `dir="rtl"` to `<html>`.
3. The **JavaScript is unchanged** — include the normal `uikit.min.js` /
   `uikit-icons.min.js`.

```html
<html dir="rtl">
    <head>
        <link rel="stylesheet" href="css/uikit.rtl.min.css" />
        <script src="js/uikit.min.js"></script>
        <script src="js/uikit-icons.min.js"></script>
    </head>
    ...
```

RTL flips floats, text-align, positions and shadow direction automatically.
Classes explicitly named `*-left` / `*-right` stay as-is. Markup is otherwise
identical to LTR. To compile RTL from source: `pnpm compile-rtl` (output files
end in `*.rtl.css`).
