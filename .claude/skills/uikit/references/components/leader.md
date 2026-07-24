# Leader
> Create dot leaders for pricing menus or tables of contents.  ·  Content · JS

To apply this component, add the `uk-leader` attribute to the element on the left. A line of characters, by default dots, will then fill the remaining space between the item and its adjacent element.

## JS — attr `uk-leader="…"` · api `UIkit.leader(el, opts)`

| Option | Default | Description |
|---|---|---|
| `fill` |  | Optional fill character. |
| `media` | `false` | Condition for the space filling - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). |

## Markup

```html
<div uk-leader></div>
```
