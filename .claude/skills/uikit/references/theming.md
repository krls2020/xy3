# Theming with LESS / SCSS

UIkit is themed by **overriding variables** (and optionally **hooks**) and
recompiling — not by fighting the compiled CSS with overrides. UIkit ships both a
LESS and a SCSS source with full parity; pick whichever your project uses.

## The fastest theme: override global variables

Most of the look derives from `@global-*` (LESS) / `$global-*` (SCSS) variables.
Many components infer their colors from these, so changing a few cascades
everywhere.

**LESS** — create `custom/my-theme.less`:

```less
// 1. set variables BEFORE importing
@global-link-color: #DA7D02;
@global-primary-background: #1e87f0;

// 2. import UIkit (core + default theme)
@import "../src/less/uikit.theme.less";
```

**SCSS** — import in the required order, variables first:

```scss
// 1. your overrides
$global-link-color: #DA7D02;

// 2. UIkit variables, then mixins, then styles (ORDER MATTERS)
@import "uikit/src/scss/variables-theme.scss";
@import "uikit/src/scss/mixins-theme.scss";
// ...your own variable tweaks / functions can go here...
@import "uikit/src/scss/uikit-theme.scss";
```

Use the `*-theme.*` files for UIkit + default theme; use `variables.scss` /
`mixins.scss` / `uikit.scss` (no `-theme`) for **core only** (no default theme —
you supply the look).

Find a variable's name inside the component's source
(`src/less/components/*.less` or `src/scss/components/*.scss`, and the central
`variables` file).

## Hooks — inject CSS into predefined selectors

When no variable exists for what you want, use a **hook** mixin. UIkit calls
`.hook-<component>()` inside its own rules, so defining it adds your CSS at the
right place (no selector-specificity wars).

```less
// in custom/my-theme.less
.hook-card() {
    color: #000;
}
```

For anything with neither a variable nor a hook, use the `-misc` hook to place a
full custom selector correctly in the output:

```less
.hook-card-misc() {
    .uk-card a { color: #f00; }
}
```

## Build

```sh
pnpm install
pnpm compile     # or: pnpm watch
```

(Requires the GitHub-source setup — see `setup.md` / `conflicts-and-scope.md`.)
The compiled CSS lands in `dist/`. With your own bundler you can instead
`@import` UIkit's LESS/SCSS entry directly (see `setup.md`).

## Structure a larger theme

Keep per-component customizations in a theme folder (`custom/my-theme/`) with an
`_import.less` that pulls in each component file, then import UIkit + your theme
from one root file:

```less
@import "../../src/less/uikit.less";
@import "my-theme/_import.less";
```

## Dark mode / inverse

Dark sections don't need a separate theme — use the **inverse** utility
(`.uk-light` / `.uk-dark`) covered in `utilities.md`. The inverse component's own
variables (`@inverse-*`) let you theme the dark variant. You can disable the
inverse component entirely in a custom build if unused.

## Accessibility tie-in

UIkit's default muted colors can fail WCAG contrast. Fix it at the source by
overriding the relevant `@global-*` / `$global-*` color variables rather than
patching CSS. See `accessibility-rtl.md`.
