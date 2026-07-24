# Tooltip
> Easily create a nice looking tooltip.  ·  Interactive · JS

To apply this component, add the `uk-tooltip` attribute to an element. You also need to add the `title: TEXT` option to the attribute, whose value will represent your tooltip's text.

If `title` is the only option in the attribute value, you can also use `uk-tooltip="TEXT"`

## JS — attr `uk-tooltip="…"` · api `UIkit.tooltip(el, opts)`

| Option | Default | Description |
|---|---|---|
| `title` |  | Tooltip text. |
| `pos` | `top-center` | Tooltip position. |
| `offset` | `false` | Tooltip offset. |
| `animation` | `uk-animation-scale-up` | Space-separated names of [animations](animation.md). Comma-separated for animation out. |
| `duration` | `100` | The animation duration. |
| `delay` | `0` | The show delay. |
| `cls` | `uk-active` | The active class. |
| `container` | `body` | Define a target container via a selector to specify where the tooltip should be appended in the DOM. |

## Markup

```html
<div uk-tooltip="title: Hello World"></div>
```
