# Slideshow
> Create a responsive slideshow with images and videos.  ·  Category: **Media**  ·  JS component

<sub>Source: [getuikit.com/docs/slideshow](https://getuikit.com/docs/slideshow) · demo: `tests/slideshow.html`</sub>

## Usage

To apply this component, add the `uk-slideshow` attribute to a container element and create a list of slides with the `.uk-slideshow-items` class.

Add an image in the background of each slide using the `uk-cover` attribute from the [Cover component](cover.md).

## JavaScript

Activate with the `uk-slideshow` attribute (no JS needed). Programmatic: `UIkit.slideshow(element, options)`.

**Component options** (set in the attribute, e.g. `uk-slideshow="option: value"`):

| Option              | Value           | Default | Description                                                            |
|---------------------|-----------------|---------|------------------------------------------------------------------------|
| `animation`         | String          | `slide` | Slideshow animation mode (`slide`, `fade`, `scale`, `pull` or `push`). |
| `autoplay`          | Boolean         | `false` | Slideshow autoplays.                                                   |
| `autoplay-interval` | Number          | `7000`  | The delay between switching slides in autoplay mode.                   |
| `draggable`         | Boolean         | `true ` | Enable pointer dragging.                                               |
| `easing`            | String          | `ease`  | The animation easing (CSS timing functions or cubic-bezier).           |
| `finite`            | Boolean         | `false` | Disable infinite sliding.                                              |
| `pause-on-hover`    | Boolean         | `true`  | Pause autoplay mode on hover.                                          |
| `index`             | Number          | `0`     | Slideshow item to show. 0 based index.                                 |
| `velocity`          | Number          | `1`     | The animation velocity (pixel/ms).                                     |
| `ratio`             | Boolean, String | `16:9`  | The ratio. (`false` prevents height adjustment)                        |
| `min-height`        | Boolean, Number | `false` | The minimum height.                                                    |
| `max-height`        | Boolean, Number | `false` | The maximum height.                                                    |

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

## See also

[cover](cover.md) · [height](height.md) · [slidenav](slidenav.md) · [dotnav](dotnav.md) · [thumbnav](thumbnav.md) · [inverse](inverse.md) · [utility](utility.md) · [position](position.md)
