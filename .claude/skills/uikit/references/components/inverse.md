# Inverse
> Inverse colors of any component for light or dark backgrounds.  ·  Category: **Utilities**  ·  JS component

<sub>Source: [getuikit.com/docs/inverse](https://getuikit.com/docs/inverse) · demo: —</sub>

## Usage

Add the `.uk-light` class to color the text and all containing content to make it look great on dark backgrounds, and add the `.uk-dark` class on light backgrounds correspondingly.

Since there is already a default text color, for light styles it is dark, and for dark styles it's light, only one of the classes is needed to change the text color for different backgrounds. In light styles, the `.uk-light` class is needed and in dark styles the `.uk-dark` class. Mind that if one of the classes is used, the color cannot be changed back.

## JavaScript

Activate with the `uk-inverse` attribute (no JS needed). Programmatic: `UIkit.inverse(element, options)`.

**Component options** (set in the attribute, e.g. `uk-inverse="option: value"`):

| Option       | Value        | Default | Description                                                                                                                 |
| ------------ | ------------ | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| `target`     | CSS selector | `false` | A list of targets that will be checked.                                                                                     |
| `sel-active` | CSS selector | `false` | A selector that needs to match for a color to be set, otherwise the color is removed. If omitted, color will always be set. |

## Markup

```html
<div class="uk-light"></div>

<div class="uk-dark"></div>
```

## See also

[section](section.md) · [tile](tile.md) · [card](card.md) · [overlay](overlay.md) · [offcanvas](offcanvas.md) · [navbar](navbar.md) · [dropdown](dropdown.md) · [dropbar](dropbar.md)
