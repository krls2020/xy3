# Form
> Easily create nice looking forms with different styles and layouts.  ·  Category: **Forms**  ·  JS component

<sub>Source: [getuikit.com/docs/form](https://getuikit.com/docs/form) · demo: `tests/form.html`</sub>

## Usage

Add one of the following classes to form controls inside a `` element to define them.

Add the `.uk-fieldset` class to a `` element and the `.uk-legend` class to a `` element to define a fieldset and a form legend.

## Classes & modifiers

| Class          | Description                                                                |
|----------------|----------------------------------------------------------------------------|
| `.uk-input`    | Add this class to `<input>` elements.                                      |
| `.uk-select`   | Add this class to `<select>` elements.                                     |
| `.uk-textarea` | Add this class to `<textarea>` elements.                                   |
| `.uk-radio`    | Add this class to `<input type="radio">` elements to create radio buttons. |
| `.uk-checkbox` | Add this class to `<input type="checkbox">` elements to create checkboxes. |
| `.uk-range`    | Add this class to `<input type="range">` elements to create range forms.   |

| Class              | Description                                                        |
|--------------------|--------------------------------------------------------------------|
| `.uk-form-danger`  | Add this class to notify the user that the value is not validated. |
| `.uk-form-success` | Add this class to notify the user that the value is validated.     |

| Class            | Description                                 |
|------------------|---------------------------------------------|
| `.uk-form-large` | Add this class to make the element larger.  |
| `.uk-form-small` | Add this class to make the element smaller. |

| Class                   | Description                 |
|-------------------------|-----------------------------|
| `.uk-form-width-large`  | Applies a width of _500px_. |
| `.uk-form-width-medium` | Applies a width of _200px_. |
| `.uk-form-width-small`  | Applies a width of _130px_. |
| `.uk-form-width-xsmall` | Applies a width of _40px_.  |

| Class                 | Description                                                 |
|-----------------------|-------------------------------------------------------------|
| `.uk-form-stacked`    | Add this class to display labels on top of controls.        |
| `.uk-form-horizontal` | Add this class to display labels and controls side by side. |
| `.uk-form-label`      | Add this class to define form labels.                       |
| `.uk-form-controls`   | Add this class to define form controls.                     |

## JavaScript

Activate with the `uk-form` attribute (no JS needed). Programmatic: `UIkit.form(element, options)`.

**Component options** (set in the attribute, e.g. `uk-form="option: value"`):

| Option   | Value                 | Default | Description           |
|----------|-----------------------|---------|-----------------------|
| `target` | CSS selector, Boolean | `false` | Value display target. |

## Markup

```html
<form>
    <input class="uk-input" type="text">
    <select class="uk-select">
        <option></option>
        <option></option>
    </select>
    <textarea class="uk-textarea"></textarea>
    <input class="uk-radio" type="radio">
    <input class="uk-checkbox" type="checkbox">
    <input class="uk-range" type="range">
</form>
```

## See also

[width](width.md) · [icon](icon.md) · [utility](utility.md) · [grid](grid.md)
