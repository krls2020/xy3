# Modal
> Create modal dialogs with different styles and transitions.  ·  Category: **Interactive**  ·  JS component

<sub>Source: [getuikit.com/docs/modal](https://getuikit.com/docs/modal) · demo: `tests/modal.html`</sub>

## Usage

The Modal component consists of an overlay, a dialog and an optional close button. You can use any element to toggle a modal dialog. To enable the necessary JavaScript, add the `uk-toggle` attribute. An `` element needs to be linked to the modal's id. If you are using another element, like a button, just add the `uk-toggle="target: #ID"` attribute to target the id of the modal container.

## Classes & modifiers

| Class              | Description                                                                                             |
|--------------------|---------------------------------------------------------------------------------------------------------|
| `.uk-modal-dialog` | Add this class to a child `<div>` element to create the dialog                                          |
| `.uk-modal-body`   | Add this class to create padding between the modal and its content.                                     |
| `.uk-modal-title`  | Add this class to a heading element to create the modal title.                                          |
| `.uk-modal-close`  | Add this class to an `<a>` or `<button>` element to create a close button and enable its functionality. |

| Class              | Description                                                     |
|--------------------|-----------------------------------------------------------------|
| `.uk-modal-header` | Add this class to a `<div>` element to create the modal header. |
| `.uk-modal-footer` | Add this class to a `<div>` element to create the modal footer. |

## JavaScript

Activate with the `uk-modal` attribute (no JS needed). Programmatic: `UIkit.modal(element, options)`.

**Component options** (set in the attribute, e.g. `uk-modal="option: value"`):

| Option      | Value   | Default                     | Description                                                                                                                                          |
|-------------|---------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `esc-close` | Boolean | `true`                      | Close the modal when the _Esc_ key is pressed.                                                                                                       |
| `bg-close`  | Boolean | `true`                      | Close the modal when the background is clicked.                                                                                                      |
| `stack`     | Boolean | `false`                     | Stack modals, when more than one is open. By default, the previous modal will be hidden.                                                             |
| `container` | String  | `true`                      | Define a target container via a selector to specify where the modal should be appended in the DOM. Setting it to `false` will prevent this behavior. |
| `cls-page`  | String  | `uk-modal-page`             | Class to add to `<html>` when modal is active                                                                                                        |
| `cls-panel` | String  | `uk-modal-dialog`           | Class of the element to be considered the panel of the modal                                                                                         |
| `sel-close` | String  | `[class*="uk-modal-close"]` | CSS selector for all elements that should trigger the closing of the modal                                                                           |

## Markup

```html
<!-- This is a button toggling the modal -->
<button uk-toggle="target: #my-id" type="button"></button>

<!-- This is the modal -->
<div id="my-id" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title"></h2>
        <button class="uk-modal-close" type="button"></button>
    </div>
</div>
```

## See also

[close](close.md) · [margin](margin.md) · [container](container.md) · [grid](grid.md) · [width](width.md) · [utility](utility.md) · [lightbox](lightbox.md) · [video](video.md)
