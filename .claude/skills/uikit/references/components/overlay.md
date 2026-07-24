# Overlay
> Create an image overlay, which comes in different styles.  ·  Category: **Utilities**

<sub>Source: [getuikit.com/docs/overlay](https://getuikit.com/docs/overlay) · demo: `tests/overlay.html`</sub>

## Usage

Add the `.uk-overlay` class to an element following an image to create the overlay panel. To create a position context, add the `.uk-inline` class from the [Utility component](utility.md#inline) to a container element around both. Finally, add one of the `.uk-position-*` classes from the [Position component](position.md) to align the overlay.

## Markup

```html
<div class="uk-inline">
    <img src="" width="" height="" alt="">
    <div class="uk-overlay uk-position-bottom"></div>
</div>
```

## See also

[utility](utility.md) · [position](position.md)
