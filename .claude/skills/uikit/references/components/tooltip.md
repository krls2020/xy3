# Tooltip
> Easily create a nice looking tooltip.  ·  Category: **Interactive**  ·  JS component

<sub>Source: [getuikit.com/docs/tooltip](https://getuikit.com/docs/tooltip) · demo: `tests/tooltip.html`</sub>

## Usage

To apply this component, add the `uk-tooltip` attribute to an element. You also need to add the `title: TEXT` option to the attribute, whose value will represent your tooltip's text.

If `title` is the only option in the attribute value, you can also use `uk-tooltip="TEXT"`

## JavaScript

Activate with the `uk-tooltip` attribute (no JS needed). Programmatic: `UIkit.tooltip(element, options)`.

**Component options** (set in the attribute, e.g. `uk-tooltip="option: value"`):

| Option      | Value  | Default                 | Description                                                                                          |
|-------------|--------|-------------------------|------------------------------------------------------------------------------------------------------|
| `title`     | String |                         | Tooltip text.                                                                                        |
| `pos`       | String | `top-center`            | Tooltip position.                                                                                    |
| `offset`    | Number | `false`                 | Tooltip offset.                                                                                      |
| `animation` | String | `uk-animation-scale-up` | Space-separated names of [animations](animation.md). Comma-separated for animation out.              |
| `duration`  | Number | `100`                   | The animation duration.                                                                              |
| `delay`     | Number | `0`                     | The show delay.                                                                                      |
| `cls`       | String | `uk-active`             | The active class.                                                                                    |
| `container` | String | `body`                  | Define a target container via a selector to specify where the tooltip should be appended in the DOM. |

## Markup

```html
<div uk-tooltip="title: Hello World"></div>
```

## See also

[animation](animation.md)
