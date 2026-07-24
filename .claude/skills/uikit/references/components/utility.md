# Utility
> A collection of useful utility classes to style your content.  ·  Category: **Utilities**

<sub>Source: [getuikit.com/docs/utility](https://getuikit.com/docs/utility) · demo: `tests/utility.html`</sub>

## Classes & modifiers

| Class             | Description                                                                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.uk-float-left`  | Add this class to float the element to the left.                                                                                                                |
| `.uk-float-right` | Add this class to float the element to the right.                                                                                                               |
| `.uk-clearfix`    | Add this class to a parent container to clear floats. Alternatively, you can create a new block format context, e.g. by adding the `.uk-overflow-hidden` class. |

| Class                 | Description                                                                                                                                                           |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.uk-overflow-hidden` | Add this class to clip content that exceeds the dimensions of its container.                                                                                          |
| `.uk-overflow-auto`   | Add this class to create a container that provides a horizontal or vertical scrollbar whenever the elements content is wider or higher than the container itself. |

| Class                 | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| `.uk-resize`          | Add this class to enable horizontal and vertical resizing. |
| `.uk-resize-vertical` | Add this class to enable only vertical resizing.           |

| Class                      | Description                                                |
| -------------------------- | ---------------------------------------------------------- |
| `.uk-display-block`        | Forces the element to behave like a block element.         |
| `.uk-display-inline`       | Forces the element to behave like an inline element.       |
| `.uk-display-inline-block` | Forces the element to behave like an inline-block element. |

| Class             | Description                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `.uk-inline`      | Add this class to apply inline-block behavior to an element, add a max-width of 100% and create a position context. |
| `.uk-inline-clip` | Same as `.uk-inline`, it also clips overflowing child elements.                                                    |

| Class                   | Description                                                                                                                                                                                                                                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.uk-responsive-width`  | Add this class to apply the same responsive behavior to any other element. It adjusts the object's width according to its parent's width, keeping the original aspect ratio.                                                                                                                               |
| `.uk-responsive-height` | Add this class to adjust the object's height (instead of its width) according to its parent's height, keeping the original aspect ratio.                                                                                                                                                                   |
| `.uk-preserve-width`    | Add this class to avoid the default responsive behavior and preserve the original image dimensions. You can also add the class to a parent element and it will be applied to all relevant elements content. If you are embedding Google Maps into your site, you may need this to fix the map's images. |

| Class                   | Description                                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------------------- |
| `.uk-object-cover`      | Scales the image by keeping its aspect ratio to completely cover the content box.                           |
| `.uk-object-contain`    | Scales the image by keeping its aspect ratio as far as its width and height can fit inside the content box. |
| `.uk-object-fill`       | Scales the image to fill the element's content box.                                                         |
| `.uk-object-none`       | Doesn't scale the image at all.                                                                             |
| `.uk-object-scale-down` | Like contain, but never up-scales.                                                                          |

| Class                      | Description                |
| -------------------------- | -------------------------- |
| `.uk-object-top-left`      | Align to the top left.     |
| `.uk-object-top-center`    | Align to the top.          |
| `.uk-object-top-right`     | Align to the top right.    |
| `.uk-object-center-left`   | Align to the left.         |
| `.uk-object-center-center` | Align to the center.       |
| `.uk-object-center-right`  | Align to the right.        |
| `.uk-object-bottom-left`   | Align to the bottom left.  |
| `.uk-object-bottom-center` | Align to the bottom.       |
| `.uk-object-bottom-right`  | Align to the bottom right. |

| Class                | Description                              |
| -------------------- | ---------------------------------------- |
| `.uk-border-rounded` | Add this class to apply rounded corners. |
| `.uk-border-circle`  | Add this class to apply a circled shape. |
| `.uk-border-pill`    | Add this class to apply a pill shape.    |

| Class                   | Description                                      |
| ----------------------- | ------------------------------------------------ |
| `.uk-box-shadow-small`  | Add this class to apply a small box shadow.      |
| `.uk-box-shadow-medium` | Add this class to apply a medium box shadow.     |
| `.uk-box-shadow-large`  | Add this class to apply a large box shadow.      |
| `.uk-box-shadow-xlarge` | Add this class to apply a very large box shadow. |

| Class                         | Description                                               |
| ----------------------------- | --------------------------------------------------------- |
| `.uk-box-shadow-hover-small`  | Add this class to apply a small box shadow on hover.      |
| `.uk-box-shadow-hover-medium` | Add this class to apply a medium box shadow on hover.     |
| `.uk-box-shadow-hover-large`  | Add this class to apply a large box shadow on hover.      |
| `.uk-box-shadow-hover-xlarge` | Add this class to apply a very large box shadow on hover. |

| Class                   | Description                                    |
| ----------------------- | ---------------------------------------------- |
| `.uk-blend-multiply`    | This class sets the blend mode to multiply.    |
| `.uk-blend-screen`      | This class sets the blend mode to screen.      |
| `.uk-blend-overlay`     | This class sets the blend mode to overlay.     |
| `.uk-blend-darken`      | This class sets the blend mode to darken.      |
| `.uk-blend-lighten`     | This class sets the blend mode to lighten.     |
| `.uk-blend-color-dodge` | This class sets the blend mode to color dodge. |
| `.uk-blend-color-burn`  | This class sets the blend mode to color burn.  |
| `.uk-blend-hard-light`  | This class sets the blend mode to hard light.  |
| `.uk-blend-soft-light`  | This class sets the blend mode to soft light.  |
| `.uk-blend-difference`  | This class sets the blend mode to difference.  |
| `.uk-blend-exclusion`   | This class sets the blend mode to exclusion.   |
| `.uk-blend-hue`         | This class sets the blend mode to hue.         |
| `.uk-blend-saturation`  | This class sets the blend mode to saturation.  |
| `.uk-blend-color`       | This class sets the blend mode to color.       |
| `.uk-blend-luminosity`  | This class sets the blend mode to luminosity.  |

| Class                                | Description                                      |
| ------------------------------------ | ------------------------------------------------ |
| `.uk-transform-origin-top-left`      | The transition originates from the top left.     |
| `.uk-transform-origin-top-center`    | The transition originates from the top.          |
| `.uk-transform-origin-top-right`     | The transition originates from the top right.    |
| `.uk-transform-origin-center-left`   | The transition originates from the left.         |
| `.uk-transform-origin-center-right`  | The transition originates from the right.        |
| `.uk-transform-origin-bottom-left`   | The transition originates from the bottom left.  |
| `.uk-transform-origin-bottom-center` | The transition originates from the bottom.       |
| `.uk-transform-origin-bottom-right`  | The transition originates from the bottom right. |

## Markup

```html
<div id="my-id" uk-modal>
    <div class="uk-modal-dialog" uk-overflow-auto></div>
</div>
```

## See also

[grid](grid.md) · [height](height.md) · [modal](modal.md) · [position](position.md) · [inverse](inverse.md) · [svg](svg.md) · [overlay](overlay.md) · [animation](animation.md)
