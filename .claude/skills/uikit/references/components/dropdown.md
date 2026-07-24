# Dropdown
> Defines different styles for a toggleable dropdown.  ·  Category: **Interactive**  ·  JS component

<sub>Source: [getuikit.com/docs/dropdown](https://getuikit.com/docs/dropdown) · demo: `tests/dropdown.html`</sub>

## Usage

A dropdown is an example of the [drop](drop.md) that provides its own styling. Any content, like a button, can toggle a dropdown. Just add the `uk-dropdown` attribute to a block element following the toggle.

A dropdown can be enabled by hovering and clicking the toggle. Just add the `mode: click` option to the attribute to force `click` mode only. If you want to group the toggle and the dropdown, you can just add the `.uk-inline` class from the [Utility component](utility.md#inline) to a container element around both.

## JavaScript

Activate with the `uk-dropdown` attribute (no JS needed). Programmatic: `UIkit.dropdown(element, options)`.

**Component options** (set in the attribute, e.g. `uk-dropdown="option: value"`):

| Option            | Value                 | Default             | Description                                                                                                  |
| ----------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------ |
| `toggle`          | CSS selector          | `- *`               | CSS selector for the element to be used as a toggle. By default, the preceding element.                      |
| `pos`             | String                | `bottom-left`       | Drop position.                                                                                               |
| `stretch`         | Boolean, String       | `false`             | Stretch dropdown on both (true) or given axis (`x`, `y`).                                                    |
| `mode`            | String                | `click, hover`      | Comma-separated list of dropdown trigger behavior modes (`click`, `hover`).                                  |
| `delay-show`      | Number                | `0`                 | Delay time in hover mode before a dropdown is shown in ms.                                                   |
| `delay-hide`      | Number                | `800`               | Delay time in hover mode before a dropdown is hidden in ms.                                                  |
| `auto-update`     | Boolean               | `true`              | Disable dynamic positioning while scrolling by setting this option to `false`.                               |
| `boundary`        | CSS selector          | `false`             | The area the dropdown can't exceed causing it to flip and shift. By default, the nearest scrolling ancestor. |
| `boundary-x`      | CSS selector          | `false`             | The area on the x-axis the drop can't exceed causing it to flip and shift.                               |
| `boundary-y`      | CSS selector          | `false`             | The area on the y-axis the drop can't exceed causing it to flip and shift.                               |
| `target`          | Boolean, CSS selector | `false`             | The element the dropdown is positioned to (`true` for window).                                               |
| `target-x`        | Boolean, CSS selector | `false`             | The element's X axis the dropdown is positioned to (`true` for window).                                      |
| `target-y`        | Boolean, CSS selector | `false`             | The element's Y axis the dropdown is positioned to (`true` for window).                                      |
| `inset`           | Boolean               | `false`             | Position inside its target.                                                                                  |
| `flip`            | Boolean               | `true`              | Flip the dropdown along the main axis if it overflows the boundary.                                          |
| `shift`           | Boolean               | `true`              | Shift the dropdown along the cross axis if it overflows the boundary.                                        |
| `offset`          | Number                | `0`                 | The dropdown offset.                                                                                         |
| `animation`       | String                | `uk-animation-fade` | Space-separated names of animations. Comma-separated for animation out.                                      |
| `animate-out`     | Boolean               | `false`             | Use animation when closing the drop.                                                                         |
| `bg-scroll`       | Boolean               | `true`              | Allow background scrolling while dropdown is opened.                                                         |
| `close-on-scroll` | Boolean               | `false`             | Close the dropdown on scrolling a parent scroll container.                                                   |
| `duration`        | Number                | `200`               | The animation duration.                                                                                      |
| `container`       | Boolean               | `false`             | Define a target container via a selector to specify where the dropdown should be appended in the DOM.        |

## Markup

```html
<button type="button"></button>
<div uk-dropdown></div>
```

## See also

[drop](drop.md) · [utility](utility.md) · [nav](nav.md) · [grid](grid.md) · [width](width.md) · [animation](animation.md)
