# Slideshow
> Create a responsive slideshow with images and videos.  ·  Media · JS

To apply this component, add the `uk-slideshow` attribute to a container element and create a list of slides with the `.uk-slideshow-items` class.

Add an image in the background of each slide using the `uk-cover` attribute from the [Cover component](cover.md).

## JS — attr `uk-slideshow="…"` · api `UIkit.slideshow(el, opts)`

| Option | Default | Description |
|---|---|---|
| `animation` | `slide` | Slideshow animation mode (`slide`, `fade`, `scale`, `pull` or `push`). |
| `autoplay` | `false` | Slideshow autoplays. |
| `autoplay-interval` | `7000` | The delay between switching slides in autoplay mode. |
| `draggable` | `true ` | Enable pointer dragging. |
| `easing` | `ease` | The animation easing (CSS timing functions or cubic-bezier). |
| `finite` | `false` | Disable infinite sliding. |
| `pause-on-hover` | `true` | Pause autoplay mode on hover. |
| `index` | `0` | Slideshow item to show. 0 based index. |
| `velocity` | `1` | The animation velocity (pixel/ms). |
| `ratio` | `16:9` | The ratio. (`false` prevents height adjustment) |
| `min-height` | `false` | The minimum height. |
| `max-height` | `false` | The maximum height. |

## Markup

```html
<div uk-slideshow>
    <div class="uk-slideshow-items">
        <div>
            <img src="" alt="" uk-cover>
        </div>
    </div>
</div>
```
