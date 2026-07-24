# Image
> Use background images with lazy loading, responsive images and different image sources  ·  Category: **Media**  ·  JS component

<sub>Source: [getuikit.com/docs/image](https://getuikit.com/docs/image) · demo: `tests/image.html`</sub>

## Usage

To apply this component, add the `uk-img` and the `data-src` attribute containing the image path for the background image to a `div` or any other element. By default, the background image will be lazy-loaded as it enters the viewport when scrolling.

## JavaScript

Activate with the `uk-image` attribute (no JS needed). Programmatic: `UIkit.image(element, options)`.

**Component options** (set in the attribute, e.g. `uk-image="option: value"`):

| Option    | Value  | Default | Description                                                                                                                                                                             |
|-----------|--------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `dataSrc` | String |         | The image's `src` attribute.                                                                                                                                                            |
| `sources` | String |         | The image's sources. This option is used for background images only. The source attributes are passed in `key: value;` format for a single source. For multiple sources in JSON format. |
| `loading` | String | `lazy`  | Enable lazy/eager loading. Set to `eager` for images within the first visible viewport.                                                                                                 |
| `margin`  | String | `50%`   | The margin is added to the viewport's bounding box, before computing an intersection with the image. The value must be in px or % units.                                                |
| `target`  | String | `false` | A list of targets whose bounding boxes will be used to compute an intersection with the image. Defaults to the image itself.                                                            |

## Markup

```html
<div data-src="" uk-img>…</div>
```

