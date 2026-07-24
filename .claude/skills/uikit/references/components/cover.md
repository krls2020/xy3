# Cover
> Expand images, videos or iframes to cover their entire container and place your own content on top.  ·  Layout · JS

To have an image cover its parent element, add the `.uk-cover-container` class to the parent and the `uk-cover` attribute to the image.

**Note** To position content on top of the covering element, use the [Position component](position.md). To adapt your content for better visibility, add the `.uk-light` or `.uk-dark` class from the [Inverse component](inverse.md).

## JS — attr `uk-cover="…"` · api `UIkit.cover(el, opts)`

| Option | Default | Description |
|---|---|---|
| `automute` | true | Tries to automute the iframe's video. |
| `width` |  | The element's width. |
| `height` |  | The element's height. |

## Markup

```html
<div class="uk-cover-container">
    <img src="" alt="" uk-cover>
</div>
```
