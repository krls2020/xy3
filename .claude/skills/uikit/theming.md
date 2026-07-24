# Theming UIkit

Two mechanisms, in the order you should reach for them. Both compile UIkit from
source; neither means writing CSS that overrides the shipped stylesheet.

`uikit vars` lists the ~49 globals, `uikit vars <component>` the rest —
1273 variables across 67 components, so look them up rather than guessing a name.

## 1. Variables — covers most of what people want

Globals cascade into every component, so changing one is usually enough:

```less
// my-theme.less
@global-primary-background: #0b5fff;
@global-font-family:        "Inter", sans-serif;
@global-font-size:          16px;
@breakpoint-medium:         900px;

@import "uikit/src/less/uikit.theme.less";
```

Set variables **before** the import — LESS takes the last definition, and UIkit's own
defaults are inside that file. Component variables follow the same pattern and are
named after what they affect (`@card-body-padding-horizontal`,
`@button-primary-background`, `@navbar-nav-item-height`).

SCSS is the same set of names with `$` instead of `@`, importing
`uikit/src/scss/uikit-theme.scss` (unstyled base: `uikit.scss`). UIkit declares them
`!default`, so your values must come before the import there too.

## 2. Hooks — for rules a variable cannot express

Every component calls empty mixins at the points it expects to be extended:

```less
// card.less, near the end of the file
.hook-card-body() {}
```

Define one and your declarations land inside that component's own rule, at its own
specificity — no `!important`, no selector duplication, no ordering fight:

```less
.hook-card() {
    border-radius: 12px;
    transition: transform .2s;
}
.hook-card-body() { padding: 30px; }
```

Find what a component offers with `grep '\.hook-' src/less/components/card.less`;
`.hook-inverse()` covers the inverse (dark-surface) variants.

In SCSS the same extension points are mixins, invoked only if you have defined them:

```scss
// card.scss
@if(meta.mixin-exists(hook-card-body)) { @include hook-card-body(); }
```

so you write `@mixin hook-card-body() { padding: 30px; }` before the import. The
full set is listed in `src/scss/mixins-theme.scss`.

## Building

```
npm install uikit
node build/less.js        # or point your own LESS/SCSS build at uikit.theme.less
```

`uikit.less` is the unstyled base; `uikit.theme.less` is the base plus the default
theme. Theme almost always means the latter.

## What not to do

Do not ship a stylesheet that re-declares `.uk-card` or `.uk-button`. It fights the
compiled output, breaks on upgrade, and the checker will flag the hand-written CSS.
If you cannot find a variable or hook for what you need, that is the moment to ask —
not the moment to override.
