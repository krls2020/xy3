# Sortable
> Create sortable grids and lists to rearrange the order of its elements.  ·  Category: **Interactive**  ·  JS component

<sub>Source: [getuikit.com/docs/sortable](https://getuikit.com/docs/sortable) · demo: `tests/sortable.html`</sub>

## Usage

To apply this component, add the `uk-sortable` attribute to a container and create child elements.

## JavaScript

Activate with the `uk-sortable` attribute (no JS needed). Programmatic: `UIkit.sortable(element, options)`.

**Component options** (set in the attribute, e.g. `uk-sortable="option: value"`):

| Option            | Value           | Default                   | Description                                   |
| ----------------- | --------------- |---------------------------| --------------------------------------------- |
| `group`           | String          |                           | The group                                     |
| `animation`       | String, Boolean | `slide`                   | Animation mode (`slide`, `false`).            |
| `duration`        | Number          | `150`                     | Animation duration in milliseconds.           |
| `threshold`       | Number          | `5`                       | Mouse move threshold before dragging starts.  |
| `cls-item`        | String          | `uk-sortable-item`        | The item class.                               |
| `cls-placeholder` | String          | `uk-sortable-placeholder` | The placeholder class.                        |
| `cls-drag`        | String          | `uk-sortable-drag`        | The ghost class.                              |
| `cls-drag-state`  | String          | `uk-drag`                 | The body's dragging class.                    |
| `cls-base`        | String          | `uk-sortable`             | The list's class.                             |
| `cls-no-drag`     | String          | `uk-sortable-nodrag`      | Disable dragging on elements with this class. |
| `cls-empty`       | String          | `uk-sortable-empty`       | The empty list class.                         |
| `cls-custom`      | String          |                           | The ghost's custom class.                     |
| `handle`          | String          | `false`                   | The handle selector.                          |

## Markup

```html
<div uk-sortable>
    <div></div>
    <div></div>
</div>
```

## See also

[nav](nav.md)
