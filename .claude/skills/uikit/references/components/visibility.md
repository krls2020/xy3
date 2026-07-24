# Visibility
> Use responsive visibility classes to display or hide elements on different devices.  ·  Category: **Layout**

<sub>Source: [getuikit.com/docs/visibility](https://getuikit.com/docs/visibility) · demo: `tests/visibility.html`</sub>

## Usage

Add one of these classes to hide an element.

## Classes & modifiers

| Class           | Description                                                                                                                        |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------|
| `.uk-hidden`    | Hides the element on any device. This is more of a legacy class. The recommended way to do this, is to use the `hidden` attribute. |
| `.uk-invisible` | Hides the element without removing it from the document flow.                                                                      |

| Class          | Description                                        |
|----------------|----------------------------------------------------|
| `uk-hidden@s`  | Only affects device widths of _640px_ and larger.  |
| `uk-hidden@m`  | Only affects device widths of _960px_ and larger.  |
| `uk-hidden@l`  | Only affects device widths of _1200px_ and larger. |
| `uk-hidden@xl` | Only affects device widths of _1600px_ and larger. |

| Class           | Description                                        |
|-----------------|----------------------------------------------------|
| `uk-visible@s`  | Only affects device widths of _640px_ and larger.  |
| `uk-visible@m`  | Only affects device widths of _960px_ and larger.  |
| `uk-visible@l`  | Only affects device widths of _1200px_ and larger. |
| `uk-visible@xl` | Only affects device widths of _1600px_ and larger. |

| Class                 | Description                                                    |
|-----------------------|----------------------------------------------------------------|
| `.uk-hidden-hover`    | The element is removed from the document flow when hidden.     |
| `.uk-invisible-hover` | The element is not removed from the document flow when hidden. |

## Markup

```html
<div hidden></div>

<div class="uk-invisible"></div>
```

