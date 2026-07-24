# Dropbar
> Create a toggleable, full-width section called dropbar.  ·  Category: **Interactive**

<sub>Source: [getuikit.com/docs/dropbar](https://getuikit.com/docs/dropbar) · demo: `tests/dropbar.html`</sub>

## Usage

To apply this component, add the `.uk-dropbar` class and add a modifier class for the direction from which the dropbar appears, for example `.uk-dropbar-top`.

Additionally, add the `uk-drop` attribute to the dropbar and a toggle element before. Any content, like a button, can toggle the drop component. Since the dropbar visually requires to extend to the full width or height of the viewport, add the `stretch: true` option to the `uk-drop` attribute. To only stretch to one axis, use `stretch: x` or `stretch: y`. For all the animation details take a look at the [Drop component](drop.md).

## Markup

```html
<div class="uk-dropbar uk-dropbar-top"></div>
```

## See also

[drop](drop.md) · [navbar](navbar.md) · [dropnav](dropnav.md) · [nav](nav.md) · [dropdown](dropdown.md)
