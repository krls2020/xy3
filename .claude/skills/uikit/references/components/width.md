# Width
> Define the width of elements for different viewport sizes.  ·  Layout

Add one of the `.uk-width-*` classes to an element to determine its size. Typically, you would use a grid from the [Grid component](grid.md) and its child elements to create the units.

**Note** We remove redundancy into each set of unit classes, so that for instance instead of `.uk-width-3-6` you should use `.uk-width-1-2`.

## Classes

| Class | Description |
|---|---|
| `.uk-width-1-1` | Fills 100% of the available width. |
| `.uk-width-1-2` | The element takes up halves of its parent container. |
| `.uk-width-1-3`, `.uk-width-2-3` | The element takes up thirds of its parent container. |
| `.uk-width-1-4`, `.uk-width-3-4` | The element takes up fourths of its parent container. |
| `.uk-width-1-5`, `.uk-width-2-5`,<br>`.uk-width-3-5`, `.uk-width-4-5` | The element takes up fifths of its parent container. |
| `.uk-width-1-6`, `.uk-width-5-6` | The element takes up sixths of its parent container. |

| Class | Description |
|---|---|
| `.uk-width-auto` | The item expands only to the width of its own content. |
| `.uk-width-expand` | The item expands to fill up the remaining space of the grid container. |

| Class | Description |
|---|---|
| `.uk-child-width-1-2` | All elements take up half of their parent container. |
| `.uk-child-width-1-3` | All elements take up a third of their parent container. |
| `.uk-child-width-1-4` | All elements take up a fourth of their parent container. |
| `.uk-child-width-1-5` | All elements take up a fifth of their parent container. |
| `.uk-child-width-1-6` | All elements take up a sixth of their parent container. |
| `.uk-child-width-auto` | Divides the grid into equal units depending on the content size. |
| `.uk-child-width-expand` | Divides the grid into equal units depending on the available space. |

| Class | Description |
|---|---|
| `.uk-width-small` | Applies a fixed width of _150px_. |
| `.uk-width-medium` | Applies a fixed width of _300px_. |
| `.uk-width-large` | Applies a fixed width of _450px_. |
| `.uk-width-xlarge` | Applies a fixed width of _600px_. |
| `.uk-width-2xlarge` | Applies a fixed width of _750px_. |

| Class | Description |
|---|---|
| `.uk-width-*`<br> `.uk-child-width-*` | Affects all device widths, grid columns stay side by side. |
| `.uk-width-*@s`<br> `.uk-child-width-*@s` | Affects device widths of _640px_ and larger. Grid columns will stack on smaller sizes. |
| `.uk-width-*@m`<br> `.uk-child-width-*@m` | Affects device widths of _960px_ and larger. Grid columns will stack on smaller sizes. |
| `.uk-width-*@l`<br> `.uk-child-width-*@l` | Affects device widths of _1200px_ and larger. Grid columns will stack on smaller sizes. |
| `.uk-width-*@xl`<br> `.uk-child-width-*@xl` | Affects device widths of _1600px_ and larger. Grid columns will stack on smaller sizes. |

## Markup

```html
<div uk-grid>
    <div class="uk-width-1-2"></div>
    <div class="uk-width-1-2"></div>
</div>
```
