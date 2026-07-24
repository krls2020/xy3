# Scrollspy
> Trigger events and animations while scrolling your page.  ·  Category: **Interactive**  ·  JS component

<sub>Source: [getuikit.com/docs/scrollspy](https://getuikit.com/docs/scrollspy) · demo: `tests/scrollspy.html`</sub>

## Usage

The Scrollspy component listens to page scrolling and triggers events based on the scroll position. For example, if you scroll down a page, and an element appears in the viewport for the first time, you can trigger a smooth animation to fade in the element. Just add the `uk-scrollspy` attribute which takes the following options.

## JavaScript

Activate with the `uk-scrollspy` attribute (no JS needed). Programmatic: `UIkit.scrollspy(element, options)`.

**Component options** (set in the attribute, e.g. `uk-scrollspy="option: value"`):

| Option   | Value                 | Default | Description                                                                                                                                |
| -------- | --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `cls`    | String                |         | Class to toggle when the element enters/leaves viewport.                                                                                   |
| `target` | Boolean, CSS selector | `false` | Target to apply the scrollspy to. Defaults to the element itself.                                                                          |
| `hidden` | Boolean               | `true`  | Hides the element while out of view.                                                                                                       |
| `margin` | String                | `-1px`  | The margin is added to the viewport's bounding box, before computing an intersection with the element. The value must be in px or % units. |
| `repeat` | Boolean               | `false` | Applies the `cls` class every time the element is in view.                                                                                 |
| `delay`  | Number                | `0`     | Delay time in ms.                                                                                                                          |

| Option    | Value                 | Default     | Description                                                   |
|-----------|-----------------------|-------------|---------------------------------------------------------------|
| `cls`     | String                | `uk-active` | Class to add to the active links.                             |
| `closest` | Boolean, CSS selector | `false`     | Target to apply the class to. Defaults to the element itself. |
| `scroll`  | Boolean               | `false`     | Adds the [Scroll component](scroll.md) to its links.          |
| `target`  | CSS selector          | `a[href]`   | Targets the anchor elements that should be used.              |
| `offset`  | Number                | `0`         | Offset added to scroll top.                                   |

## Markup

```html
<div uk-scrollspy="cls:uk-animation-fade"></div>
```

## See also

[animation](animation.md) · [card](card.md) · [scroll](scroll.md)
