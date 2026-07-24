# Alert
> Display success, warning and error messages.  ·  Category: **Content**  ·  JS component

<sub>Source: [getuikit.com/docs/alert](https://getuikit.com/docs/alert) · demo: `tests/alert.html`</sub>

## Usage

To apply this component, add the `uk-alert` attribute to a block element.

## Classes & modifiers

| Class               | Description                               |
|---------------------|-------------------------------------------|
| `.uk-alert-primary` | Give the message a prominent styling.     |
| `.uk-alert-success` | Indicates success or a positive message.  |
| `.uk-alert-warning` | Indicates a message containing a warning. |
| `.uk-alert-danger`  | Indicates an important or error message.  |

## JavaScript

Activate with the `uk-alert` attribute (no JS needed). Programmatic: `UIkit.alert(element, options)`.

**Component options** (set in the attribute, e.g. `uk-alert="option: value"`):

| Option       | Value        | Default           | Description                         |
|--------------|--------------|-------------------|-------------------------------------|
| `animation`  | Boolean      | `true`            | Fade out or hide directly.          |
| `duration`   | Number       | `150`             | Animation duration in milliseconds. |
| `sel-close`  | CSS selector | `.uk-alert-close` | The close trigger element.          |

## Markup

```html
<div uk-alert></div>
```

## See also

[close](close.md)
