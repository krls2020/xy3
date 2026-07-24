# Parallax
> Animate CSS properties depending on the scroll position of the document.  ·  Category: **Media**  ·  JS component

<sub>Source: [getuikit.com/docs/parallax](https://getuikit.com/docs/parallax) · demo: `tests/parallax.html`</sub>

## Usage

To apply this component, add the `uk-parallax` attribute to any element. Use one of the following options to animate the corresponding CSS property.

You can use `px`, `%`, `vw` and `vh` units for the length values. The pixel unit can be left out. For example, `x: 200` is the same as `x: 200px`. Basic mathematics operands `+` and `-` are also supported.

## JavaScript

Activate with the `uk-parallax` attribute (no JS needed). Programmatic: `UIkit.parallax(element, options)`.

**Component options** (set in the attribute, e.g. `uk-parallax="option: value"`):

| Option             | Description                        | Values         | Start Value |
| ------------------ | ---------------------------------- | -------------- | ----------- |
| `x`                | Animate translateX.                | Length         | `0`         |
| `y`                | Animate translateY.                | Length         | `0`         |
| `bgy`              | Animate background Y position.     | Length         | *Initial*   |
| `bgx`              | Animate background X position.     | Length         | *Initial*   |
| `rotate`           | Animate rotation clockwise.        | `deg`          | `0`         |
| `scale`            | Animate scaling.                   | Number, Length | `1`         |
| `color`            | Animate color                      | Color          | *Initial*   |
| `background-color` | Animate background-color           | Color          | *Initial*   |
| `border-color`     | Animate border color               | Color          | *Initial*   |
| `opacity`          | Animate the opacity.               | Number         | *Initial*   |
| `blur`             | Animate the blur filter.           | `px`           | `0`         |
| `hue`              | Animate the hue rotation filter.   | `deg`          | `0`         |
| `grayscale`        | Animate the grayscale filter.      | `%`            | `0`         |
| `invert`           | Animate the invert filter.         | `%`            | `0`         |
| `saturate`         | Animate the saturated filter.      | `%`            | `0`         |
| `sepia`            | Animate the sepia filter.          | `%`            | `0`         |
| `stroke`           | Animate strokes within SVG images. |                | `0`         |

| Option   | Value                   | Default | Description                                                                                                                                                                                           |
| -------- | ----------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `easing` | Number                  | `1`     | Animation easing during scrolling                                                                                                                                                                     |
| `target` | CSS Selector            | `false` | Element dimension reference for animation duration.                                                                                                                                                   |
| `start`  | Length                  | `0`     | Start offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the target's top border and viewport's bottom border intersect.   |
| `end`    | Length                  | `0`     | End offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the target's bottom border and the viewport's top border intersect. |
| `media`  | Boolean, Number, String | `false` | Condition for the active status - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)).                                            |

## Markup

```html
<div uk-parallax="bgy: -200">…</div>
```

## See also

[svg](svg.md) · [sticky](sticky.md)
