# Off-canvas
> Create an off-canvas sidebar that slides in and out of the page, which is perfect for creating mobile navigations.  ·  Category: **Interactive**  ·  JS component

<sub>Source: [getuikit.com/docs/offcanvas](https://getuikit.com/docs/offcanvas) · demo: `tests/offcanvas.html`</sub>

## Usage

To apply this component, add the `uk-offcanvas` attribute to a parent `` element and use the following classes.

You can use any element to toggle an off-canvas sidebar. To enable the necessary JavaScript, add the `uk-toggle` attribute. An `` element needs to be linked to the id of the off-canvas container. If you are using another element, like a button, just add the `uk-toggle="target: #ID"` attribute to target the id of the off-canvas container.

## Classes & modifiers

| Class                 | Description                                                                                                                          |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `.uk-offcanvas-bar`   | Add this class to a child `<div>` element.                                                                                           |
| `.uk-offcanvas-close` | Add this class and the `uk-close` attribute to an `<a>` or `<button>` element to create a close button and enable its functionality. |

## JavaScript

Activate with the `uk-offcanvas` attribute (no JS needed). Programmatic: `UIkit.offcanvas(element, options)`.

**Component options** (set in the attribute, e.g. `uk-offcanvas="option: value"`):

| Option      | Value   | Default | Description                                                                                                                                               |
|-------------|---------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `mode`      | String  | `slide` | Off-canvas animation mode (`slide`, `reveal`, `push` or `none`).                                                                                           |
| `flip`      | Boolean | `false` | Flip off-canvas to the right side.                                                                                                                        |
| `overlay`   | Boolean | `false` | Display the off-canvas together with an overlay.                                                                                                          |
| `esc-close` | Boolean | `true`  | Close the off-canvas when the _Esc_ key is pressed.                                                                                                       |
| `bg-close`  | Boolean | `true`  | Close the off-canvas when the background is clicked.                                                                                                      |
| `container` | String  | `false` | Define a target container via a selector to specify where the off-canvas should be appended in the DOM. Setting it to `false` will prevent this behavior. |

## Markup

```html
<body>

    <!-- This is a button toggling the off-canvas -->
    <button uk-toggle="target: #my-id" type="button"></button>

    <!-- This is an anchor toggling the off-canvas -->
    <a href="#my-id" uk-toggle></a>

    <!-- This is the off-canvas -->
    <div id="my-id" uk-offcanvas>
        <div class="uk-offcanvas-bar">

            <button class="uk-offcanvas-close" type="button" uk-close></button>

        </div>
    </div>

</body>
```

## See also

[nav](nav.md)
