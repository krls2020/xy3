# Leader
> Create dot leaders for pricing menus or tables of contents.  ·  Category: **Content**  ·  JS component

<sub>Source: [getuikit.com/docs/leader](https://getuikit.com/docs/leader) · demo: `tests/leader.html`</sub>

## Usage

To apply this component, add the `uk-leader` attribute to the element on the left. A line of characters, by default dots, will then fill the remaining space between the item and its adjacent element.

## JavaScript

Activate with the `uk-leader` attribute (no JS needed). Programmatic: `UIkit.leader(element, options)`.

**Component options** (set in the attribute, e.g. `uk-leader="option: value"`):

| Option  | Value                   | Default | Description                                                                                                                                                |
| ------- | ----------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fill`  | String                  |         | Optional fill character.                                                                                                                                   |
| `media` | Boolean, Number, String | `false` | Condition for the space filling - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). |

## Markup

```html
<div uk-leader></div>
```

