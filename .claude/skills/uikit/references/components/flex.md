# Flex
> Utilize the power of flexbox to create a wide range of layouts.  ·  Layout

To apply the flexbox layout model, use one of the following classes. By default, all flex items are aligned to the left, as wide as their content and matched in height.

## Classes

| Class | Description |
|---|---|
| `.uk-flex` | Create the flex container and behave like a block element. |
| `.uk-flex-inline` | Create the flex container and behave like an inline element. |

| Class | Description |
|---|---|
| `.uk-flex-left` | Add this class to align flex items to the left. |
| `.uk-flex-center` | Add this class to center flex items along the main axis. |
| `.uk-flex-right` | Add this class to align flex items to the right. |
| `.uk-flex-between` | Add this class to distribute items evenly, with equal space between the items along the main axis. |
| `.uk-flex-around` | Add this class to distribute items evenly with equal space on both sides of each item. |

| Class | Description |
|---|---|
| `.uk-flex-stretch` | Add this class to expand flex items to fill the height of their parent. |
| `.uk-flex-top` | Add this class to align flex items to the top. |
| `.uk-flex-middle` | Add this class to center flex items along the cross axis. |
| `.uk-flex-bottom` | Add this class to align flex items to the bottom. |

| Class | Description |
|---|---|
| `.uk-flex-row` | Add this class to lay out flex items as horizontal rows. |
| `.uk-flex-row-reverse` | Add this class to lay out flex items from right to left. |
| `.uk-flex-column` | Add this class to lay out flex items as vertical columns. |
| `.uk-flex-column-reverse` | Add this class to lay out flex items from bottom to top. |

| Class | Description |
|---|---|
| `.uk-flex-wrap` | Add this class to make flex items wrap into another line when they no longer fit their container. |
| `.uk-flex-wrap-reverse` | Add this class to change the items' direction so that they run from right to left. |
| `.uk-flex-nowrap` | Add this class to force the flex items into one line. This is the default behavior. |

| Class | Description |
|---|---|
| `.uk-flex-wrap-stretch` | Add this class, so that item lines stretch to take up the remaining space |
| `.uk-flex-wrap-between` | Add this class to distribute item lines evenly, with the first row at the top and the last row at the bottom of the container. |
| `.uk-flex-wrap-around` | Add this class to distribute lines evenly with equal space at the top and bottom of each row. |
| `.uk-flex-wrap-top` | Add this class to align multi-line flex items to the top. |
| `.uk-flex-wrap-middle` | Add this class to vertically centered multirow flex items. |
| `.uk-flex-wrap-bottom` | Add this class to align multi-line flex items to the bottom. |

| Class | Description |
|---|---|
| `.uk-flex-first` | Displays the item as the first one. |
| `.uk-flex-last` | Displays the item as the last one. |

| Class | Description |
|---|---|
| `.uk-flex-initial` | The box's size is determined by its content, but shrinks. |
| `.uk-flex-none` | The box's size is determined by its content. |
| `.uk-flex-auto` | The space is allocated considering the item's content. |
| `.uk-flex-1` | The space is allocated solely based on flex. |

<sub>Classes above also take responsive suffixes `@s @m @l @xl`.</sub>

## Markup

```html
<div class="uk-flex">
    <div></div>
</div>
```
