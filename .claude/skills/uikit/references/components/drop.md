# Drop
> Position any element in relation to another element.  ·  Interactive · JS

Any content, like a button, can toggle the drop component. Just add the `uk-drop` attribute to a block element following the toggle.

To group the toggle and the dropdown, just wrap them with a container element and add the `.uk-inline` class from the [Utility component](utility.md#inline).

## JS — attr `uk-drop="…"` · api `UIkit.drop(el, opts)`

| Option | Default | Description |
|---|---|---|
| `toggle` | `- *` | CSS selector for the element to be used as toggle. By default, the preceding element. |
| `pos` | `bottom-left` | Drop position. |
| `stretch` | `false` | Stretch drop on both (true) or given axis (`x`, `y`). |
| `mode` | `click, hover` | Comma-separated list of drop trigger behavior modes (`click`, `hover`). |
| `delay-show` | `0` | Delay time in hover mode before a drop is shown in ms. |
| `delay-hide` | `800` | Delay time in hover mode before a drop is hidden in ms. |
| `auto-update` | `true` | Disable dynamic positioning while scrolling by setting this option to `false`. |
| `boundary` | `false` | The area the drop can't exceed causing it to flip and shift. By default, the nearest scrolling ancestor. |
| `boundary-x` | `false` | The area on the x-axis the drop can't exceed causing it to flip and shift. |
| `boundary-y` | `false` | The area on the y-axis the drop can't exceed causing it to flip and shift. |
| `target` | `false` | The element the drop is positioned to (`true` for window). |
| `target-x` | `false` | The element's X axis the drop is positioned to (`true` for window). |
| `target-y` | `false` | The element's Y axis the drop is positioned to (`true` for window). |
| `inset` | `false` | Position inside its target. |
| `flip` | `true` | Flip the drop along the main axis if it overflows the boundary. |
| `shift` | `true` | Shift the drop along the cross-axis if it overflows the boundary. |
| `offset` | `0` | The drop offset. |
| `animation` | `uk-animation-fade` | Space-separated names of animations. Comma-separated for animation out. |
| `animate-out` | `false` | Use animation when closing the drop. |
| `bg-scroll` | `true` | Allow background scrolling while drop is opened. |
| `close-on-scroll` | `false` | Close the drop on scrolling a parent scroll container. |
| `duration` | `200` | The animation duration. |
| `container` | `false` | Define a target container via a selector to specify where the drop should be appended in the DOM. |

## Markup

```html
<button type="button"></button>
<div uk-drop></div>
```
