# Position
> A collection of utility classes to position content.  ·  Category: **Layout**

<sub>Source: [getuikit.com/docs/position](https://getuikit.com/docs/position) · demo: `tests/position.html`</sub>

## Usage

To apply this component, add one of the `.uk-position-*` classes to a block element. When using this component to place content on top of an image, add the `.uk-inline` class from the [Utility component](utility.md#inline) to a container element around the image and the element to create a position context.

**Note** This is often used to position an overlay from the [Overlay component](overlay.md). Use the `.uk-light` or `.uk-dark` class from the [Inverse component](inverse.md) to apply a light or dark color for better visibility.

## Classes & modifiers

| Class                 | Description                          |
| --------------------- | ------------------------------------ |
| `.uk-position-top`    | Positions the element at the top.    |
| `.uk-position-left`   | Positions the element at the left.   |
| `.uk-position-right`  | Positions the element at the right.  |
| `.uk-position-bottom` | Positions the element at the bottom. |

| Class                        | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| `.uk-position-top-left`      | Positions the element at the top left.                   |
| `.uk-position-top-center`    | Positions the element at the top center.                 |
| `.uk-position-top-right`     | Positions the element at the top right.                  |
| `.uk-position-center`        | Positions the element vertically centered in the middle. |
| `.uk-position-center-left`   | Positions the element vertically centered on the left.   |
| `.uk-position-center-right`  | Positions the element vertically centered on the right.  |
| `.uk-position-bottom-left`   | Positions the element at the bottom left.                |
| `.uk-position-bottom-center` | Positions the element at the bottom center.              |
| `.uk-position-bottom-right`  | Positions the element at the bottom right.               |

| Class                            | Description                                             |
| -------------------------------- | ------------------------------------------------------- |
| `.uk-position-center-horizontal` | Positions the element at the center from top to bottom. |
| `.uk-position-center-vertical`   | Positions the element at the center from left to right. |

| Class                           | Description                                                     |
| ------------------------------- | --------------------------------------------------------------- |
| `.uk-position-center-left-out`  | Positions the element vertically centered outside on the left.  |
| `.uk-position-center-right-out` | Positions the element vertically centered outside on the right. |

| Class                           | Description                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------ |
| `.uk-position-relative`         | Add this class to apply relative positioning.                                        |
| `.uk-position-absolute`         | Add this class to apply absolute positioning.                                        |
| `.uk-position-fixed`            | Add this class to apply fixed positioning.                                           |
| `.uk-position-z-index`          | Add this class to apply a z-index of 1.                                              |
| `.uk-position-z-index-negative` | Add this class to apply a z-index of -1.                                             |
| `.uk-position-z-index-high`     | Add this class to apply a high z-index which is the lowest of UIkits z-index stack.  |
| `.uk-position-z-index-highest`  | Add this class to apply a high z-index which is the highest of UIkits z-index stack. |

## Markup

```html
<div class="uk-inline">

    <!-- Place any content, like an image, here -->

    <div class="uk-position-center"></div>

</div>
```

## See also

[utility](utility.md) · [overlay](overlay.md) · [inverse](inverse.md) · [slidenav](slidenav.md) · [slideshow](slideshow.md) · [slider](slider.md) · [visibility](visibility.md)
