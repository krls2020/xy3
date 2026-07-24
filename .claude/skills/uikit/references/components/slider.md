# Slider
> Create a responsive carousel slider.  ·  Category: **Media**  ·  JS component

<sub>Source: [getuikit.com/docs/slider](https://getuikit.com/docs/slider) · demo: `tests/slider.html`</sub>

## Usage

To apply this component, add the `uk-slider` attribute to a container element and create a list of slides with the `.uk-slider-items` class. Add an image or any other content to each item.

To define the widths of the slider items, use the [Width component](width.md). Either apply the `.uk-child-width-*` classes to define the width of all slider items or apply individual widths for each list item using the `.uk-width-*` classes. If no specific width is set, each item's width depends on the dimensions of the content itself.

## JavaScript

Activate with the `uk-slider` attribute (no JS needed). Programmatic: `UIkit.slider(element, options)`.

**Component options** (set in the attribute, e.g. `uk-slider="option: value"`):

| Option              | Value   | Default | Description                                                             |
|---------------------|---------|---------|-------------------------------------------------------------------------|
| `autoplay`          | Boolean | `false` | Slider autoplays.                                                       |
| `autoplay-interval` | Number  | `7000`  | The delay between switching slides in autoplay mode.                    |
| `center`            | Boolean | `false` | Center the active slide.                                                |
| `draggable`         | Boolean | `true ` | Enable pointer dragging.                                                |
| `easing`            | String  | `ease`  | The animation easing (CSS timing functions or cubic-bezier).            |
| `finite`            | Boolean | `false` | Disable infinite sliding.                                               |
| `index`             | Number  | `0`     | Slider item to show. 0 based index.                                     |
| `active`            | String  | `all`   | Slider item/items to apply the transition active class to (all, first). |
| `pause-on-hover`    | Boolean | `true`  | Pause autoplay mode on hover.                                           |
| `sets`              | Boolean | `false` | Slide in sets.                                                          |
| `velocity`          | Number  | `1`     | The animation velocity (pixel/ms).                                      |

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

## See also

[width](width.md) · [grid](grid.md) · [slidenav](slidenav.md) · [dotnav](dotnav.md) · [thumbnav](thumbnav.md) · [inverse](inverse.md) · [position](position.md) · [height](height.md)
