# Flex
> Utilize the power of flexbox to create a wide range of layouts.  ·  Category: **Layout**

<sub>Source: [getuikit.com/docs/flex](https://getuikit.com/docs/flex) · demo: `tests/flex.html`</sub>

## Usage

To apply the flexbox layout model, use one of the following classes. By default, all flex items are aligned to the left, as wide as their content and matched in height.

## Classes & modifiers

| Class             | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `.uk-flex`        | Create the flex container and behave like a block element.   |
| `.uk-flex-inline` | Create the flex container and behave like an inline element. |

| Class                                                                                                              | Description                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `.uk-flex-left`                                                                                                    | Add this class to align flex items to the left.                                                    |
| `.uk-flex-center`                                                                                                  | Add this class to center flex items along the main axis.                                           |
| `.uk-flex-right`                                                                                                   | Add this class to align flex items to the right.                                                   |
| `.uk-flex-between`                                                                                                 | Add this class to distribute items evenly, with equal space between the items along the main axis. |
| `.uk-flex-around`                                                                                                  | Add this class to distribute items evenly with equal space on both sides of each item.             |
| `.uk-flex-left@s`<br>`.uk-flex-center@s`<br>`.uk-flex-right@s`<br>`.uk-flex-between@s`<br>`.uk-flex-around@s`      | Only affects device widths of _640px_ and higher.                                                  |
| `.uk-flex-left@m`<br>`.uk-flex-center@m`<br>`.uk-flex-right@m`<br>`.uk-flex-between@m`<br>`.uk-flex-around@m`      | Only affects device widths of _960px_ and higher.                                                  |
| `.uk-flex-left@l`<br>`.uk-flex-center@l`<br>`.uk-flex-right@l`<br>`.uk-flex-between@l`<br>`.uk-flex-around@l`      | Only affects device widths of _1200px_ and higher.                                                 |
| `.uk-flex-left@xl`<br>`.uk-flex-center@xl`<br>`.uk-flex-right@xl`<br>`.uk-flex-between@xl`<br>`.uk-flex-around@xl` | Only affects device widths of _1600px_ and higher.                                                 |

| Class                                                                                         | Description                                                             |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `.uk-flex-stretch`                                                                            | Add this class to expand flex items to fill the height of their parent. |
| `.uk-flex-top`                                                                                | Add this class to align flex items to the top.                          |
| `.uk-flex-middle`                                                                             | Add this class to center flex items along the cross axis.               |
| `.uk-flex-bottom`                                                                             | Add this class to align flex items to the bottom.                       |
| `.uk-flex-stretch@s`<br> `.uk-flex-top@s`<br> `.uk-flex-middle@s`<br> `.uk-flex-bottom@s`     | Only affects device widths of _640px_ and higher.                       |
| `.uk-flex-stretch@m`<br> `.uk-flex-top@m`<br> `.uk-flex-middle@m`<br> `.uk-flex-bottom@m`     | Only affects device widths of _960px_ and higher.                       |
| `.uk-flex-stretch@l`<br> `.uk-flex-top@l`<br> `.uk-flex-middle@l`<br> `.uk-flex-bottom@l`     | Only affects device widths of _1200px_ and higher.                      |
| `.uk-flex-stretch@xl`<br> `.uk-flex-top@xl`<br> `.uk-flex-middle@xl`<br> `.uk-flex-bottom@xl` | Only affects device widths of _1600px_ and higher.                      |

| Class                                      | Description                                               |
| ------------------------------------------ | --------------------------------------------------------- |
| `.uk-flex-row`                             | Add this class to lay out flex items as horizontal rows.  |
| `.uk-flex-row-reverse`                     | Add this class to lay out flex items from right to left.  |
| `.uk-flex-column`                          | Add this class to lay out flex items as vertical columns. |
| `.uk-flex-column-reverse`                  | Add this class to lay out flex items from bottom to top.  |
| `.uk-flex-row@s`<br> `.uk-flex-column@s`   | Only affects device widths of _640px_ and higher.         |
| `.uk-flex-row@m`<br> `.uk-flex-column@m`   | Only affects device widths of _960px_ and higher.         |
| `.uk-flex-row@l`<br> `.uk-flex-column@l`   | Only affects device widths of _1200px_ and higher.        |
| `.uk-flex-row@xl`<br> `.uk-flex-column@xl` | Only affects device widths of _1600px_ and higher.        |

| Class                   | Description                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------- |
| `.uk-flex-wrap`         | Add this class to make flex items wrap into another line when they no longer fit their container. |
| `.uk-flex-wrap-reverse` | Add this class to change the items' direction so that they run from right to left.                |
| `.uk-flex-nowrap`       | Add this class to force the flex items into one line. This is the default behavior.               |

| Class                   | Description                                                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `.uk-flex-wrap-stretch` | Add this class, so that item lines stretch to take up the remaining space                                                  |
| `.uk-flex-wrap-between` | Add this class to distribute item lines evenly, with the first row at the top and the last row at the bottom of the container. |
| `.uk-flex-wrap-around`  | Add this class to distribute lines evenly with equal space at the top and bottom of each row.                              |
| `.uk-flex-wrap-top`     | Add this class to align multi-line flex items to the top.                                                                  |
| `.uk-flex-wrap-middle`  | Add this class to vertically centered multirow flex items.                                                                 |
| `.uk-flex-wrap-bottom`  | Add this class to align multi-line flex items to the bottom.                                                               |

| Class                                     | Description                                        |
| ----------------------------------------- | -------------------------------------------------- |
| `.uk-flex-first`                          | Displays the item as the first one.                |
| `.uk-flex-last`                           | Displays the item as the last one.                 |
| `.uk-flex-first@s`<br>`.uk-flex-last@s`   | Only affects device widths of _640px_ and higher.  |
| `.uk-flex-first@m`<br>`.uk-flex-last@m`   | Only affects device widths of _960px_ and higher.  |
| `.uk-flex-first@l`<br>`.uk-flex-last@l`   | Only affects device widths of _1200px_ and higher. |
| `.uk-flex-first@xl`<br>`.uk-flex-last@xl` | Only affects device widths of _1600px_ and higher. |

| Class                                                            | Description                                               |
| ---------------------------------------------------------------- | --------------------------------------------------------- |
| `.uk-flex-initial`                                               | The box's size is determined by its content, but shrinks. |
| `.uk-flex-none`                                                  | The box's size is determined by its content.              |
| `.uk-flex-auto`                                                  | The space is allocated considering the item's content.    |
| `.uk-flex-1`                                                     | The space is allocated solely based on flex.              |
| `.uk-flex-initial@s`<br> `.uk-flex-none@s`<br> `.uk-flex-1@s`    | Only affects device widths of _640px_ and higher.         |
| `.uk-flex-initial@m`<br> `.uk-flex-none@m`<br> `.uk-flex-1@m`    | Only affects device widths of _960px_ and higher.         |
| `.uk-flex-initial@l`<br> `.uk-flex-none@l`<br> `.uk-flex-1@l`    | Only affects device widths of _1200px_ and higher.        |
| `.uk-flex-initial@xl`<br> `.uk-flex-none@xl`<br> `.uk-flex-1@xl` | Only affects device widths of _1600px_ and higher.        |

## Markup

```html
<div class="uk-flex">
    <div></div>
</div>
```

## See also

[grid](grid.md) · [navbar](navbar.md) · [subnav](subnav.md) · [breadcrumb](breadcrumb.md) · [pagination](pagination.md) · [tab](tab.md) · [dotnav](dotnav.md)
