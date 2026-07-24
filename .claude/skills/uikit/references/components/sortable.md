# Sortable
> Create sortable grids and lists to rearrange the order of its elements.  ·  Interactive · JS

To apply this component, add the `uk-sortable` attribute to a container and create child elements.

## JS — attr `uk-sortable="…"` · api `UIkit.sortable(el, opts)`

| Option | Default | Description |
|---|---|---|
| `group` |  | The group |
| `animation` | `slide` | Animation mode (`slide`, `false`). |
| `duration` | `150` | Animation duration in milliseconds. |
| `threshold` | `5` | Mouse move threshold before dragging starts. |
| `cls-item` | `uk-sortable-item` | The item class. |
| `cls-placeholder` | `uk-sortable-placeholder` | The placeholder class. |
| `cls-drag` | `uk-sortable-drag` | The ghost class. |
| `cls-drag-state` | `uk-drag` | The body's dragging class. |
| `cls-base` | `uk-sortable` | The list's class. |
| `cls-no-drag` | `uk-sortable-nodrag` | Disable dragging on elements with this class. |
| `cls-empty` | `uk-sortable-empty` | The empty list class. |
| `cls-custom` |  | The ghost's custom class. |
| `handle` | `false` | The handle selector. |

## Markup

```html
<div uk-sortable>
    <div></div>
    <div></div>
</div>
```
