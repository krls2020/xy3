# Image
> Use background images with lazy loading, responsive images and different image sources  ·  Media · JS

To apply this component, add the `uk-img` and the `data-src` attribute containing the image path for the background image to a `div` or any other element. By default, the background image will be lazy-loaded as it enters the viewport when scrolling.

## JS — attr `uk-img` · api `UIkit.img(el, opts)`

| Option | Default | Description |
|---|---|---|
| `dataSrc` |  | The image's `src` attribute. |
| `sources` |  | The image's sources. This option is used for background images only. The source attributes are passed in `key: value;` format for a single source. For multiple sources in JSON format. |
| `loading` | `lazy` | Enable lazy/eager loading. Set to `eager` for images within the first visible viewport. |
| `margin` | `50%` | The margin is added to the viewport's bounding box, before computing an intersection with the image. The value must be in px or % units. |
| `target` | `false` | A list of targets whose bounding boxes will be used to compute an intersection with the image. Defaults to the image itself. |

## Markup

```html
<div data-src="" uk-img>…</div>
```
