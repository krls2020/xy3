# Slider
> Create a responsive carousel slider.  ·  Media · JS

To apply this component, add the `uk-slider` attribute to a container element and create a list of slides with the `.uk-slider-items` class. Add an image or any other content to each item.

To define the widths of the slider items, use the [Width component](width.md). Either apply the `.uk-child-width-*` classes to define the width of all slider items or apply individual widths for each list item using the `.uk-width-*` classes. If no specific width is set, each item's width depends on the dimensions of the content itself.

## JS — attr `uk-slider="…"` · api `UIkit.slider(el, opts)`

| Option | Default | Description |
|---|---|---|
| `autoplay` | `false` | Slider autoplays. |
| `autoplay-interval` | `7000` | The delay between switching slides in autoplay mode. |
| `center` | `false` | Center the active slide. |
| `draggable` | `true ` | Enable pointer dragging. |
| `easing` | `ease` | The animation easing (CSS timing functions or cubic-bezier). |
| `finite` | `false` | Disable infinite sliding. |
| `index` | `0` | Slider item to show. 0 based index. |
| `active` | `all` | Slider item/items to apply the transition active class to (all, first). |
| `pause-on-hover` | `true` | Pause autoplay mode on hover. |
| `sets` | `false` | Slide in sets. |
| `velocity` | `1` | The animation velocity (pixel/ms). |

## Markup

```html
<div uk-slider>
    <div class="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@">
        <div>
            <img src="" width="" height="" alt="">
        </div>
    </div>
</div>
```
