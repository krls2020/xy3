# Card
> Create layout boxes with different styles.  ·  Content

The Card component consists of the card itself, the card body and an optional card title. Typically, cards are arranged in grid columns from the [Grid component](grid.md).

By default, a card is blank. That is why it is important to add a modifier class for styling. In our example we are using the `.uk-card-default` class.

## Classes

| Class | Description |
|---|---|
| `.uk-card` | Add this class to a `<div>` element to define the Card component. |
| `.uk-card-body` | Add this class to the card to create padding between the card and its content. |
| `.uk-card-title` | Add this class to a heading to define a card title. |

| Class | Description |
|---|---|
| `.uk-card-default` | Add this class to create a visually styled box. |
| `.uk-card-primary` | Add this class to emphasize it with a primary color. |
| `.uk-card-secondary` | Add this class to give it a secondary background color. |
| `.uk-card-overlay` | Add this class to make the card work best on background images. |

| Class | Description |
|---|---|
| `.uk-card-small` | Add this class to apply a smaller padding. |
| `.uk-card-large` | Add this class to apply a larger padding. |

| Class | Description |
|---|---|
| `.uk-card-media-top` | This class indicates that the media element is aligned to the top. |
| `.uk-card-media-bottom` | This class indicates that the media element is aligned to the bottom. |
| `.uk-card-media-left` | This class indicates that the media element is aligned to the left. |
| `.uk-card-media-right` | This class indicates that the media element is aligned to the right. |

## Markup

```html
<div class="uk-card uk-card-body">
    <h3 class="uk-card-title"></h3>
</div>
```
