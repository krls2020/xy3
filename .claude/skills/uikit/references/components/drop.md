# Drop
> Position any element in relation to another element.  ·  Category: **Interactive**  ·  JS component

<sub>Source: [getuikit.com/docs/drop](https://getuikit.com/docs/drop) · demo: `tests/drop.html`</sub>

## Usage

Any content, like a button, can toggle the drop component. Just add the `uk-drop` attribute to a block element following the toggle.

To group the toggle and the dropdown, just wrap them with a container element and add the `.uk-inline` class from the [Utility component](utility.md#inline).

## JavaScript

Activate with the `uk-drop` attribute (no JS needed). Programmatic: `UIkit.drop(element, options)`.

**Component options** (set in the attribute, e.g. `uk-drop="option: value"`):

| Option            | Value                 | Default             | Description                                                                                              |
| ----------------- | --------------------- | ------------------- | -------------------------------------------------------------------------------------------------------- |
| `toggle`          | CSS selector          | `- *`               | CSS selector for the element to be used as toggle. By default, the preceding element.                    |
| `pos`             | String                | `bottom-left`       | Drop position.                                                                                           |
| `stretch`         | Boolean, String       | `false`             | Stretch drop on both (true) or given axis (`x`, `y`).                                                    |
| `mode`            | String                | `click, hover`      | Comma-separated list of drop trigger behavior modes (`click`, `hover`).                                  |
| `delay-show`      | Number                | `0`                 | Delay time in hover mode before a drop is shown in ms.                                                   |
| `delay-hide`      | Number                | `800`               | Delay time in hover mode before a drop is hidden in ms.                                                  |
| `auto-update`     | Boolean               | `true`              | Disable dynamic positioning while scrolling by setting this option to `false`.                           |
| `boundary`        | CSS selector          | `false`             | The area the drop can't exceed causing it to flip and shift. By default, the nearest scrolling ancestor. |
| `boundary-x`      | CSS selector          | `false`             | The area on the x-axis the drop can't exceed causing it to flip and shift.                               |
| `boundary-y`      | CSS selector          | `false`             | The area on the y-axis the drop can't exceed causing it to flip and shift.                               |
| `target`          | Boolean, CSS selector | `false`             | The element the drop is positioned to (`true` for window).                                               |
| `target-x`        | Boolean, CSS selector | `false`             | The element's X axis the drop is positioned to (`true` for window).                                      |
| `target-y`        | Boolean, CSS selector | `false`             | The element's Y axis the drop is positioned to (`true` for window).                                      |
| `inset`           | Boolean               | `false`             | Position inside its target.                                                                              |
| `flip`            | Boolean               | `true`              | Flip the drop along the main axis if it overflows the boundary.                                          |
| `shift`           | Boolean               | `true`              | Shift the drop along the cross-axis if it overflows the boundary.                                        |
| `offset`          | Number                | `0`                 | The drop offset.                                                                                         |
| `animation`       | String                | `uk-animation-fade` | Space-separated names of animations. Comma-separated for animation out.                                  |
| `animate-out`     | Boolean               | `false`             | Use animation when closing the drop.                                                                     |
| `bg-scroll`       | Boolean               | `true`              | Allow background scrolling while drop is opened.                                                         |
| `close-on-scroll` | Boolean               | `false`             | Close the drop on scrolling a parent scroll container.                                                   |
| `duration`        | Number                | `200`               | The animation duration.                                                                                  |
| `container`       | Boolean               | `false`             | Define a target container via a selector to specify where the drop should be appended in the DOM.        |

## Markup

```html
<button type="button"></button>
<div uk-drop></div>
```

## See also

[utility](utility.md) · [card](card.md) · [grid](grid.md) · [width](width.md) · [animation](animation.md)
