# Modal
> Create modal dialogs with different styles and transitions.  ·  Interactive · JS

The Modal component consists of an overlay, a dialog and an optional close button. You can use any element to toggle a modal dialog. To enable the necessary JavaScript, add the `uk-toggle` attribute. An `<a>` element needs to be linked to the modal's id. If you are using another element, like a button, just add the `uk-toggle="target: #ID"` attribute to target the id of the modal container.

## Classes

| Class | Description |
|---|---|
| `.uk-modal-dialog` | Add this class to a child `<div>` element to create the dialog |
| `.uk-modal-body` | Add this class to create padding between the modal and its content. |
| `.uk-modal-title` | Add this class to a heading element to create the modal title. |
| `.uk-modal-close` | Add this class to an `<a>` or `<button>` element to create a close button and enable its functionality. |

| Class | Description |
|---|---|
| `.uk-modal-header` | Add this class to a `<div>` element to create the modal header. |
| `.uk-modal-footer` | Add this class to a `<div>` element to create the modal footer. |

## JS — attr `uk-modal="…"` · api `UIkit.modal(el, opts)`

| Option | Default | Description |
|---|---|---|
| `esc-close` | `true` | Close the modal when the _Esc_ key is pressed. |
| `bg-close` | `true` | Close the modal when the background is clicked. |
| `stack` | `false` | Stack modals, when more than one is open. By default, the previous modal will be hidden. |
| `container` | `true` | Define a target container via a selector to specify where the modal should be appended in the DOM. Setting it to `false` will prevent this behavior. |
| `cls-page` | `uk-modal-page` | Class to add to `<html>` when modal is active |
| `cls-panel` | `uk-modal-dialog` | Class of the element to be considered the panel of the modal |
| `sel-close` | `[class*="uk-modal-close"]` | CSS selector for all elements that should trigger the closing of the modal |

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
