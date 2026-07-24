# Dropdown
> Defines different styles for a toggleable dropdown.  ·  Interactive · JS

A dropdown is an example of the [drop](drop.md) that provides its own styling. Any content, like a button, can toggle a dropdown. Just add the `uk-dropdown` attribute to a block element following the toggle.

A dropdown can be enabled by hovering and clicking the toggle. Just add the `mode: click` option to the attribute to force `click` mode only. If you want to group the toggle and the dropdown, you can just add the `.uk-inline` class from the [Utility component](utility.md#inline) to a container element around both.

## JS — attr `uk-dropdown="…"` · api `UIkit.dropdown(el, opts)`

| Option | Default | Description |
|---|---|---|
| `toggle` | `- *` | CSS selector for the element to be used as a toggle. By default, the preceding element. |
| `pos` | `bottom-left` | Drop position. |
| `stretch` | `false` | Stretch dropdown on both (true) or given axis (`x`, `y`). |
| `mode` | `click, hover` | Comma-separated list of dropdown trigger behavior modes (`click`, `hover`). |
| `delay-show` | `0` | Delay time in hover mode before a dropdown is shown in ms. |
| `delay-hide` | `800` | Delay time in hover mode before a dropdown is hidden in ms. |
| `auto-update` | `true` | Disable dynamic positioning while scrolling by setting this option to `false`. |
| `boundary` | `false` | The area the dropdown can't exceed causing it to flip and shift. By default, the nearest scrolling ancestor. |
| `boundary-x` | `false` | The area on the x-axis the drop can't exceed causing it to flip and shift. |
| `boundary-y` | `false` | The area on the y-axis the drop can't exceed causing it to flip and shift. |
| `target` | `false` | The element the dropdown is positioned to (`true` for window). |
| `target-x` | `false` | The element's X axis the dropdown is positioned to (`true` for window). |
| `target-y` | `false` | The element's Y axis the dropdown is positioned to (`true` for window). |
| `inset` | `false` | Position inside its target. |
| `flip` | `true` | Flip the dropdown along the main axis if it overflows the boundary. |
| `shift` | `true` | Shift the dropdown along the cross axis if it overflows the boundary. |
| `offset` | `0` | The dropdown offset. |
| `animation` | `uk-animation-fade` | Space-separated names of animations. Comma-separated for animation out. |
| `animate-out` | `false` | Use animation when closing the drop. |
| `bg-scroll` | `true` | Allow background scrolling while dropdown is opened. |
| `close-on-scroll` | `false` | Close the dropdown on scrolling a parent scroll container. |
| `duration` | `200` | The animation duration. |
| `container` | `false` | Define a target container via a selector to specify where the dropdown should be appended in the DOM. |

## Markup

```html
<button type="button"></button>
<div uk-dropdown></div>
```
