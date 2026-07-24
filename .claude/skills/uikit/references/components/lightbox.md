# Lightbox
> Create a responsive lightbox gallery with images and videos.  ·  Category: **Media**  ·  JS component

<sub>Source: [getuikit.com/docs/lightbox](https://getuikit.com/docs/lightbox) · demo: `tests/lightbox.html`</sub>

## Usage

To apply this component, add the `uk-lightbox` attribute to a container to turn all anchors inside that container into lightbox links.

## JavaScript

Activate with the `uk-lightbox` attribute (no JS needed). Programmatic: `UIkit.lightbox(element, options)`.

**Component options** (set in the attribute, e.g. `uk-lightbox="option: value"`):

| Option               | Description                            |
| -------------------- | -------------------------------------- |
| `data-type="image"`  | The content type is an image.          |
| `data-type="video"`  | The content type is a video.           |
| `data-type="iframe"` | The content type is a regular website. |

| Option              | Value           | Default | Description                                                                                                |
|---------------------|-----------------|---------|------------------------------------------------------------------------------------------------------------|
| `animation`         | String          | `slide` | Lightbox animation mode (`slide`, `fade` or `scale`).                                                      |
| `autoplay`          | Boolean         | `false` | Lightbox autoplays.                                                                                        |
| `autoplay-interval` | Number          | `7000`  | The delay between switching slides in autoplay mode.                                                       |
| `pause-on-hover`    | Boolean         | `false` | Pause autoplay mode on hover.                                                                              |
| `video-autoplay`    | Boolean, String | `false` | Lightbox videos autoplay. A value of `inline` will autoplay the video, make it muted and without controls. |
| `counter`           | Boolean         | `false` | Lightbox shows counter.                                                                                    |
| `nav`               | Boolean, String | `false` | Lightbox navigation (`dotnav`, `thumbnav`).                                                                |
| `slidenav`          | Boolean         | `true`  | Lightbox shows slidenav controls.                                                                          |
| `index`             | String, Number  | `0`     | Lightbox item to show. 0 based index.                                                                      |
| `delay-controls`    | Number          | `3000`  | Delay time before controls fade out in ms. Setting `0` will prevent hiding controls.                       |
| `toggle`            | CSS selector    | `a`     | Toggle selector - opens the Lightbox Panel upon click.                                                     |

| Option              | Value           | Default        | Description                                                                                                |
| ------------------- | --------------- | -------------- | ---------------------------------------------------------------------------------------------------------- |
| `animation`         | String          | `slide`        | Lightbox animation mode (`slide`, `fade` or `scale`).                                                      |
| `autoplay`          | Boolean         | `false`        | Lightbox autoplays.                                                                                        |
| `autoplay-interval` | Number          | `7000`         | The delay between switching slides in autoplay mode.                                                       |
| `pause-on-hover`    | Boolean         | `false`        | Pause autoplay mode on hover.                                                                              |
| `video-autoplay`    | Boolean, String | `false`        | Lightbox videos autoplay. A value of `inline` will autoplay the video, make it muted and without controls. |
| `counter`           | Boolean         | `false`        | Lightbox shows counter.                                                                                    |
| `nav`               | Boolean, String | `false`        | Lightbox navigation (`dotnav`, `thumbnav`).                                                                |
| `slidenav`          | Boolean         | `true`         | Lightbox shows slidenav controls.                                                                          |
| `index`             | Number          | `0`            | The initial item to show. (zero-based)                                                                     |
| `velocity`          | Number          | `2`            | The animation velocity (pixel/ms).                                                                         |
| `preload`           | Number          | `1`            | The number of items to preload. (left and right of the currently active item)                              |
| `items`             | Array           | `[]`           | An array of items to display, e.g. `[{source: 'images/size1.jpg', caption: '900x600'}]`                    |
| `template`          | String          | Default markup | The template string.                                                                                       |
| `delay-controls`    | Number          | `3000`         | Delay time before controls fade out in ms. Setting `0` will prevent hiding controls.                       |
| `container`         | String          | `body`         | Define a target container via a selector to specify where the Lightbox should be appended in the DOM.      |

## Markup

```html
<div uk-lightbox>
    <a href="image.jpg"></a>
</div>
```

## See also

[slidenav](slidenav.md) · [thumbnav](thumbnav.md) · [dotnav](dotnav.md) · [inverse](inverse.md)
