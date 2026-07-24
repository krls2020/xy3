# Scrollspy
> Trigger events and animations while scrolling your page.  ·  Interactive · JS

The Scrollspy component listens to page scrolling and triggers events based on the scroll position. For example, if you scroll down a page, and an element appears in the viewport for the first time, you can trigger a smooth animation to fade in the element. Just add the `uk-scrollspy` attribute which takes the following options.

## JS — attr `uk-scrollspy="…"` · api `UIkit.scrollspy(el, opts)`

| Option | Default | Description |
|---|---|---|
| `cls` |  | Class to toggle when the element enters/leaves viewport. |
| `target` | `false` | Target to apply the scrollspy to. Defaults to the element itself. |
| `hidden` | `true` | Hides the element while out of view. |
| `margin` | `-1px` | The margin is added to the viewport's bounding box, before computing an intersection with the element. The value must be in px or % units. |
| `repeat` | `false` | Applies the `cls` class every time the element is in view. |
| `delay` | `0` | Delay time in ms. |

| Option | Default | Description |
|---|---|---|
| `cls` | `uk-active` | Class to add to the active links. |
| `closest` | `false` | Target to apply the class to. Defaults to the element itself. |
| `scroll` | `false` | Adds the [Scroll component](scroll.md) to its links. |
| `target` | `a[href]` | Targets the anchor elements that should be used. |
| `offset` | `0` | Offset added to scroll top. |

## Markup

```html
<div uk-scrollspy="cls:uk-animation-fade"></div>
```
