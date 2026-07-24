# SVG
> Inject inline SVG images into the page markup and style them with CSS.  ·  Category: **Utilities**  ·  JS component

<sub>Source: [getuikit.com/docs/svg](https://getuikit.com/docs/svg) · demo: `tests/svg.html`</sub>

## Usage

To apply this component, add the `uk-svg` attribute to an `` element.

Using the `uk-svg` attribute also allows you to inject a symbol from the SVG file. Just append the symbol's ID to the image path as you would in any fragmented URL.

## JavaScript

Activate with the `uk-svg` attribute (no JS needed). Programmatic: `UIkit.svg(element, options)`.

**Component options** (set in the attribute, e.g. `uk-svg="option: value"`):

| Option             | Value   | Default | Description                                                                                                   |
|--------------------|---------|---------|---------------------------------------------------------------------------------------------------------------|
| `src`              | String  |         | The SVG source URL. If a location hash is present, only the `<symbol>` of the SVG with the given ID is shown. |
| `stroke-animation` | Boolean | `false` | Animate all elements with the `stroke` attribute in the SVG.                                                  |

## Markup

```html
<img src="" width="" height="" uk-svg>
```

## See also

[animation](animation.md) · [parallax](parallax.md)
