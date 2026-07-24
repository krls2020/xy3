# Height
> Define the height of elements depending on the viewport or match the heights of different elements.  ·  Layout · JS

UIkit provides a number of useful classes to alter an element's height.

## Classes

| Class | Description |
|---|---|
| `.uk-height-1-1` | This class applies a height of 100%. This only works if the parent element has a set height. |
| `.uk-height-small `<br> `.uk-height-max-small ` | These classes apply a height or max-height of _150px_. |
| `.uk-height-medium `<br> `.uk-height-max-medium ` | These classes apply a height or max-height of _300px_. |
| `.uk-height-large `<br> `.uk-height-max-large ` | These classes apply a height or max-height of _450px_. |

## JS — attr `uk-height-match / uk-height-viewport` · api `UIkit.heightMatch / UIkit.heightViewport(el, opts)`

| Option | Default | Description |
|---|---|---|
| `offset-top` | `false` | Subtracts the element's (true) or given element's (CSS Selector) offset top from its height. |
| `offset-bottom` | `false` | Subtracts the height (true) of the sibling that immediately follows the element, the given percentage (Number), Pixel (px) value from element's own height or the given element's height. |
| `expand` | `false` | Expands the element's height to make a short page fill the viewport. |
| `min` | `0` | Sets a minimum height. Useful if all children are positioned absolutely. |
| `property` | `min-height` | The CSS property to set. (min-height, height, max-height) |
| `media` | `false` | Condition for the component to be active - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). |

| Option | Default | Description |
|---|---|---|
| `target` | `> *` | Elements that should match. |
| `row` | `true` | By default only items in the same row will be matched. For example, once grid columns extend to a width of 100%, their heights will no longer be matched. This makes sense, for example, if they stack vertically in narrower viewports. |

## Markup

```html
<div class="uk-height-small"></div>
```
