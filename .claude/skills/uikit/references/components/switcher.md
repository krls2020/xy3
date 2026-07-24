# Switcher
> Dynamically transition through different content panes.  ·  Category: **Interactive**  ·  JS component

<sub>Source: [getuikit.com/docs/switcher](https://getuikit.com/docs/switcher) · demo: `tests/switcher.html`</sub>

## Usage

The Switcher component consists of a number of toggles and their related content items. Add the `uk-switcher` attribute to a list element that contains the toggles. Add the `.uk-switcher` class to the element containing the content items.

By default, the element with the `.uk-switcher` class has to succeed the toggle directly in order for the switcher to function. If you need it to be nested in another element, for example when using a grid, add the `connect: SELECTOR` option to the `uk-switcher` attribute and select the element containing the items for switching.

## JavaScript

Activate with the `uk-switcher` attribute (no JS needed). Programmatic: `UIkit.switcher(element, options)`.

**Component options** (set in the attribute, e.g. `uk-switcher="option: value"`):

| Option        | Value        | Default              | Description                                                                                              |
|---------------|--------------|----------------------|----------------------------------------------------------------------------------------------------------|
| `connect`     | CSS selector | `~.uk-switcher`      | Related items container. By default succeeding elements with class 'uk-switcher'.                        |
| `toggle `     | CSS selector | `> * > :first-child` | Select the clickable elements which trigger content switching.                                           |
| `itemNav `    | CSS selector | `false`              | Related nav container. By default, nav items are found in related items container only.                  |
| `active `     | Number       | `0`                  | Active index on init. Providing a negative number indicates a position starting from the end of the set. |
| `animation`   | String       | `false`              | Space-separated names of [animations](animation.md). Comma-separated for animation out.                  |
| `duration`    | Number       | `200`                | The animation duration.                                                                                  |
| `swiping`     | Boolean      | `true`               | Use swiping.                                                                                             |
| `followFocus` | Boolean      | `false`              | Selection follows focus automatically.                                                                   |

## Markup

```html
<!-- This is the nav containing the toggling elements -->
<ul uk-switcher>
    <li><a href="#"></a></li>
</ul>

<!-- This is the container of the content items -->
<div class="uk-switcher">
    <div></div>
</div>
```

## See also

[subnav](subnav.md) · [animation](animation.md) · [tab](tab.md) · [grid](grid.md) · [width](width.md) · [button](button.md) · [nav](nav.md)
