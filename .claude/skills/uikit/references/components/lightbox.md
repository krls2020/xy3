# Lightbox
> Create a responsive lightbox gallery with images and videos.  ·  Media · JS

To apply this component, add the `uk-lightbox` attribute to a container to turn all anchors inside that container into lightbox links.

## JS — attr `uk-lightbox="…"` · api `UIkit.lightbox(el, opts)`

| Option | Description |
|---|---|
| `data-type="image"` | The content type is an image. |
| `data-type="video"` | The content type is a video. |
| `data-type="iframe"` | The content type is a regular website. |

| Option | Default | Description |
|---|---|---|
| `animation` | `slide` | Lightbox animation mode (`slide`, `fade` or `scale`). |
| `autoplay` | `false` | Lightbox autoplays. |
| `autoplay-interval` | `7000` | The delay between switching slides in autoplay mode. |
| `pause-on-hover` | `false` | Pause autoplay mode on hover. |
| `video-autoplay` | `false` | Lightbox videos autoplay. A value of `inline` will autoplay the video, make it muted and without controls. |
| `counter` | `false` | Lightbox shows counter. |
| `nav` | `false` | Lightbox navigation (`dotnav`, `thumbnav`). |
| `slidenav` | `true` | Lightbox shows slidenav controls. |
| `index` | `0` | Lightbox item to show. 0 based index. |
| `delay-controls` | `3000` | Delay time before controls fade out in ms. Setting `0` will prevent hiding controls. |
| `toggle` | `a` | Toggle selector - opens the Lightbox Panel upon click. |

| Option | Default | Description |
|---|---|---|
| `animation` | `slide` | Lightbox animation mode (`slide`, `fade` or `scale`). |
| `autoplay` | `false` | Lightbox autoplays. |
| `autoplay-interval` | `7000` | The delay between switching slides in autoplay mode. |
| `pause-on-hover` | `false` | Pause autoplay mode on hover. |
| `video-autoplay` | `false` | Lightbox videos autoplay. A value of `inline` will autoplay the video, make it muted and without controls. |
| `counter` | `false` | Lightbox shows counter. |
| `nav` | `false` | Lightbox navigation (`dotnav`, `thumbnav`). |
| `slidenav` | `true` | Lightbox shows slidenav controls. |
| `index` | `0` | The initial item to show. (zero-based) |
| `velocity` | `2` | The animation velocity (pixel/ms). |
| `preload` | `1` | The number of items to preload. (left and right of the currently active item) |
| `items` | `[]` | An array of items to display, e.g. `[{source: 'images/size1.jpg', caption: '900x600'}]` |
| `template` | Default markup | The template string. |
| `delay-controls` | `3000` | Delay time before controls fade out in ms. Setting `0` will prevent hiding controls. |
| `container` | `body` | Define a target container via a selector to specify where the Lightbox should be appended in the DOM. |

## Markup

```html
<div uk-lightbox>
    <a href="image.jpg"></a>
</div>
```
