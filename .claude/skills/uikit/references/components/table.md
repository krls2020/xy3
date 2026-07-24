# Table
> Easily create nice looking tables, which come in different styles.  ·  Content

To apply this component, add the `.uk-table` class to a `<table>` element.

## Classes

| Class | Description |
|---|---|
| `.uk-table-shrink ` | Add this class to a `<th>` or `<td>` element to reduce the column width to fit its content. |
| `.uk-table-expand` | Add this class to a `<th>` or `<td>` element to expand the column width to fill the remaining space and apply a min-width. |
| `.uk-width-*` | Add one of these classes from the [Width component](width.md) to a `<th>` or `<td>` element to modify the column width. |

| Class | Description |
|---|---|
| `.uk-table-link` | To link an entire cell, add this class to a `<th>`or `<td>` element and insert an `<a>` element. Add the `.uk-link-reset`class from the [Link component](link.md) to reset the default link styling. |
| `.uk-preserve-width ` | Since images are responsive by default in UIkit, using an image inside a table cell with the `.uk-table-shrink` class would reduce the image width to 0. To prevent this behavior, add the `.uk-preserve-width` class from the [Base component](base.md) to the `<img>` element. |
| `.uk-text-truncate` | When applying a fixed width to a table cell, you might want to add this class from the [Text component](text.md) to the `<td>` element to truncate the text. |
| `.uk-text-nowrap` | Add this class from the [Text component](text.md) to keep text from wrapping, for example when using the `.uk-table-shrink` class. |

## Markup

```html
<table class="uk-table">
    <caption></caption>
    <thead>
        <tr>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td></td>
        </tr>
    </tfoot>
</table>
```
