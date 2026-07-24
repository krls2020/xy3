# Cover
> Expand images, videos or iframes to cover their entire container and place your own content on top.  ·  Category: **Layout**  ·  JS component

<sub>Source: [getuikit.com/docs/cover](https://getuikit.com/docs/cover) · demo: `tests/cover.html`</sub>

## Usage

To have an image cover its parent element, add the `.uk-cover-container` class to the parent and the `uk-cover` attribute to the image.

**Note** To position content on top of the covering element, use the [Position component](position.md). To adapt your content for better visibility, add the `.uk-light` or `.uk-dark` class from the [Inverse component](inverse.md).

## JavaScript

Activate with the `uk-cover` attribute (no JS needed). Programmatic: `UIkit.cover(element, options)`.

**Component options** (set in the attribute, e.g. `uk-cover="option: value"`):

| Option     | Value   | Default | Description                           |
|------------|---------|---------|---------------------------------------|
| `automute` | Boolean | true    | Tries to automute the iframe's video. |
| `width`    | Number  |         | The element's width.                  |
| `height`   | Number  |         | The element's height.                 |

## Markup

```html
<div class="uk-cover-container">
    <img src="" alt="" uk-cover>
</div>
```

## See also

[position](position.md) · [inverse](inverse.md) · [video](video.md) · [height](height.md)
