# Button
> Easily create nice looking buttons, which come in different styles.  ·  Content

To apply this component, add the `.uk-button` class and a modifier such as `.uk-button-default` to an `<a>` or `<button>` element. Add the `disabled` attribute to a `<button>` element to disable the button.

**Note** If you are displaying a number of buttons in a row, you can add a top margin to them, when they stack on smaller viewports. Just add the `uk-margin` attribute from the [Margin component](margin.md) to their parent element.

## Classes

| Class | Description |
|---|---|
| `.uk-button-default` | Default button style. |
| `.uk-button-primary` | Indicates the primary action. |
| `.uk-button-secondary` | Indicates an important action. |
| `.uk-button-danger` | Indicates a dangerous or negative action. |
| `.uk-button-text` | Applies a typographic style. |
| `.uk-button-link` | Applies a plain link style. |

## Markup

```html
<a class="uk-button uk-button-default" href=""></a>

<button class="uk-button uk-button-default"></button>

<button class="uk-button uk-button-default" disabled></button>
```
