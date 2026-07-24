# Alert
> Display success, warning and error messages.  ·  Content · JS

To apply this component, add the `uk-alert` attribute to a block element.

## Classes

| Class | Description |
|---|---|
| `.uk-alert-primary` | Give the message a prominent styling. |
| `.uk-alert-success` | Indicates success or a positive message. |
| `.uk-alert-warning` | Indicates a message containing a warning. |
| `.uk-alert-danger` | Indicates an important or error message. |

## JS — attr `uk-alert="…"` · api `UIkit.alert(el, opts)`

| Option | Default | Description |
|---|---|---|
| `animation` | `true` | Fade out or hide directly. |
| `duration` | `150` | Animation duration in milliseconds. |
| `sel-close` | `.uk-alert-close` | The close trigger element. |

## Markup

```html
<div uk-alert></div>
```
