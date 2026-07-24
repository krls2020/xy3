# SVG
> Inject inline SVG images into the page markup and style them with CSS.  ·  Utilities · JS

To apply this component, add the `uk-svg` attribute to an `<img>` element.

Using the `uk-svg` attribute also allows you to inject a symbol from the SVG file. Just append the symbol's ID to the image path as you would in any fragmented URL.

## JS — attr `uk-svg="…"` · api `UIkit.svg(el, opts)`

| Option | Default | Description |
|---|---|---|
| `src` |  | The SVG source URL. If a location hash is present, only the `<symbol>` of the SVG with the given ID is shown. |
| `stroke-animation` | `false` | Animate all elements with the `stroke` attribute in the SVG. |

## Markup

```html
<img src="" width="" height="" uk-svg>
```
