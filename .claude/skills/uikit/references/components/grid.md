# Grid
> Create a fully responsive, fluid and nestable grid layout.  ·  Category: **Layout**  ·  JS component

<sub>Source: [getuikit.com/docs/grid](https://getuikit.com/docs/grid) · demo: `tests/grid.html`</sub>

## Usage

To create the grid container, add the `uk-grid` attribute to a `` element. Add child `` elements to create the cells. By default, all grid cells are stacked. To place them side by side, add one of the classes from the [Width component](width.md). Using `.uk-child-width-expand` will automatically apply equal width to items, regardless of how many there are.

## Classes & modifiers

| Class               | Description                                                                          |
| ------------------- | ------------------------------------------------------------------------------------ |
| `.uk-grid-small`    | Add this class to apply a small gap.                                                 |
| `.uk-grid-medium`   | Add this class to apply a medium gap like the default one, but without a breakpoint. |
| `.uk-grid-large`    | Add this class to apply a large gap with breakpoints.                                |
| `.uk-grid-collapse` | Add this class to remove the grid-gap entirely.                                      |

| Class                                                 | Description                                                                      |
| ----------------------------------------------------- | -------------------------------------------------------------------------------- |
| `.uk-grid-column-small`<br>`.uk-grid-row-small`       | Add one of these classes to apply a small gap to the column or row.              |
| `.uk-grid-column-medium`<br>`.uk-grid-row-medium`     | Add one of these classes to apply a medium gap to the column or row.             |
| `.uk-grid-column-large`<br>`.uk-grid-row-large`       | Add one of these classes to apply a large gap to the column or row.              |
| `.uk-grid-column-collapse`<br>`.uk-grid-row-collapse` | Add one of these classes to remove the grid-gap entirely from the column or row. |

## JavaScript

Activate with the `uk-grid` attribute (no JS needed). Programmatic: `UIkit.grid(element, options)`.

**Component options** (set in the attribute, e.g. `uk-grid="option: value"`):

| Option             | Value           | Default                 | Description                                                                                                                                                                                         |
| ------------------ | --------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `margin `          | String          | `uk-grid-margin`        | This class is added to items that break into the next row, typically to create margin to the previous row.                                                                                          |
| `first-column`     | String          | `uk-first-column`       | This class is added to the first element in each row.                                                                                                                                               |
| `masonry`          | String, Boolean | `false`, `pack`, `next` | Enables masonry layout for this grid.                                                                                                                                                               |
| `parallax`         | Number          | `0`                     | Parallax translation value. The value can be in vh, % and px. Falsy disables the parallax effect (default).                                                                                         |
| `parallax-start`   | Length          | `0`                     | Start offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the grid's top border and viewport's bottom border intersect.   |
| `parallax-end`     | Length          | `0`                     | End offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the grid's bottom border and the viewport's top border intersect. |
| `parallax-justify` | Boolean         | `false`                 | With parallax enabled, all columns will reach the bottom at the same time.                                                                                                                          |

## Markup

```html
<div uk-grid>
    <div></div>
    <div></div>
</div>
```

## See also

[width](width.md) · [flex](flex.md) · [card](card.md) · [height](height.md) · [filter](filter.md)
