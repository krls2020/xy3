# Margin
> A collection of utility classes to add spacing between elements.  ·  Category: **Layout**  ·  JS component

<sub>Source: [getuikit.com/docs/margin](https://getuikit.com/docs/margin) · demo: `tests/margin.html`</sub>

## Usage

Add one or more of the following classes to any element to create the same vertical and/or horizontal margin that a paragraph usually has.

## Classes & modifiers

| Class               | Description                                                                      |
|---------------------|----------------------------------------------------------------------------------|
| `.uk-margin`        | Adds top margin, if it is preceded by another element, and always bottom margin. |
| `.uk-margin-top`    | Adds top margin.                                                                 |
| `.uk-margin-bottom` | Adds bottom margin.                                                              |
| `.uk-margin-left`   | Adds left margin.                                                                |
| `.uk-margin-right`  | Adds right margin.                                                               |

| Class                     | Description                                                                            |
|---------------------------|----------------------------------------------------------------------------------------|
| `.uk-margin-xsmall`        | Adds smaller top margin, if it is preceded by another element, and always bottom margin. |
| `.uk-margin-xsmall-top`    | Adds smaller top margin.                                                                 |
| `.uk-margin-xsmall-bottom` | Adds smaller bottom margin.                                                              |
| `.uk-margin-xsmall-left`   | Adds smaller left margin.                                                                |
| `.uk-margin-xsmall-right`  | Adds smaller right margin.                                                               |

| Class                     | Description                                                                            |
|---------------------------|----------------------------------------------------------------------------------------|
| `.uk-margin-small`        | Adds small top margin, if it is preceded by another element, and always bottom margin. |
| `.uk-margin-small-top`    | Adds small top margin.                                                                 |
| `.uk-margin-small-bottom` | Adds small bottom margin.                                                              |
| `.uk-margin-small-left`   | Adds small left margin.                                                                |
| `.uk-margin-small-right`  | Adds small right margin.                                                               |

| Class                      | Description                                                                             |
|----------------------------|-----------------------------------------------------------------------------------------|
| `.uk-margin-medium`        | Adds medium top margin, if it is preceded by another element, and always bottom margin. |
| `.uk-margin-medium-top`    | Adds medium top margin.                                                                 |
| `.uk-margin-medium-bottom` | Adds medium bottom margin.                                                              |
| `.uk-margin-medium-left`   | Adds medium left margin.                                                                |
| `.uk-margin-medium-right`  | Adds medium right margin.                                                               |

| Class                     | Description                                                                        |
|---------------------------|------------------------------------------------------------------------------------|
| `.uk-margin-large`        | Adds large margin, if it is preceded by another element, and always bottom margin. |
| `.uk-margin-large-top`    | Adds large top margin.                                                             |
| `.uk-margin-large-bottom` | Adds large bottom margin.                                                          |
| `.uk-margin-large-left`   | Adds large left margin.                                                            |
| `.uk-margin-large-right`  | Adds large right margin.                                                           |

| Class                      | Description                                                                         |
|----------------------------|-------------------------------------------------------------------------------------|
| `.uk-margin-xlarge`        | Adds larger margin, if it is preceded by another element, and always bottom margin. |
| `.uk-margin-xlarge-top`    | Adds larger top margin.                                                             |
| `.uk-margin-xlarge-bottom` | Adds larger bottom margin.                                                          |
| `.uk-margin-xlarge-left`   | Adds larger left margin.                                                            |
| `.uk-margin-xlarge-right`  | Adds larger right margin.                                                           |

| Class                           | Description                                                |
|---------------------------------|------------------------------------------------------------|
| `.uk-margin-remove`             | Removes all margins.                                       |
| `.uk-margin-remove-top`         | Removes top margin.                                        |
| `.uk-margin-remove-bottom`      | Removes bottom margin.                                     |
| `.uk-margin-remove-left`        | Removes left margin.                                       |
| `.uk-margin-remove-right`       | Removes right margin.                                      |
| `.uk-margin-remove-vertical`    | Removes all vertical margins.                              |
| `.uk-margin-remove-adjacent`    | Removes the top margin of the directly succeeding element. |
| `.uk-margin-remove-first-child` | Removes the top margin of the first child element.         |
| `.uk-margin-remove-last-child`  | Removes the bottom margin of the last child element.       |

| Class                                                        | Description                                   |
|--------------------------------------------------------------|-----------------------------------------------|
| `.uk-margin-remove-left@s`<br> `.uk-margin-remove-right@s`   | Affects device widths of _640px_ and larger.  |
| `.uk-margin-remove-left@m`<br> `.uk-margin-remove-right@m`   | Affects device widths of _960px_ and larger.  |
| `.uk-margin-remove-left@l`<br> `.uk-margin-remove-right@l`   | Affects device widths of _1200px_ and larger. |
| `.uk-margin-remove-left@xl`<br> `.uk-margin-remove-right@xl` | Affects device widths of _1600px_ and larger. |

| Class                      | Description                                                                         |
|----------------------------|-------------------------------------------------------------------------------------|
| `.uk-margin-auto`          | Sets left and right margin to auto, horizontally centering block and flex elements. |
| `.uk-margin-auto-top`      | Sets top margin to auto, pushing block and flex elements to the bottom.             |
| `.uk-margin-auto-bottom`   | Sets bottom margin to auto, pushing block and flex elements to the top.             |
| `.uk-margin-auto-left`     | Sets left margin to auto, pushing block and flex elements to the right.             |
| `.uk-margin-auto-right`    | Sets right margin to auto, pushing block and flex elements to the left              |
| `.uk-margin-auto-vertical` | Sets top and bottom margin to auto, vertically centering only flex elements.        |

| Class                                                                             | Description                                   |
|-----------------------------------------------------------------------------------|-----------------------------------------------|
| `.uk-margin-auto-left@s`<br> `.uk-margin-auto@s`<br> `.uk-margin-auto-right@s`    | Affects device widths of _640px_ and larger.  |
| `.uk-margin-auto-left@m`<br> `.uk-margin-auto@m`<br>   `.uk-margin-auto-right@m`  | Affects device widths of _960px_ and larger.  |
| `.uk-margin-auto-left@l`<br> `.uk-margin-auto@l`<br> `.uk-margin-auto-right@l`    | Affects device widths of _1200px_ and larger. |
| `.uk-margin-auto-left@xl`<br> `.uk-margin-auto@xl`<br> `.uk-margin-auto-right@xl` | Affects device widths of _1600px_ and larger. |

## JavaScript

Activate with the `uk-margin` attribute (no JS needed). Programmatic: `UIkit.margin(element, options)`.

**Component options** (set in the attribute, e.g. `uk-margin="option: value"`):

| Option         | Value  | Default             | Description                                                                                                |
|----------------|--------|---------------------|------------------------------------------------------------------------------------------------------------|
| `margin `      | String | `uk-margin-small-top` | This class is added to items that break into the next row, typically to create a margin for the previous row. |
| `first-column` | String | `uk-first-column`     | This class is added to the first element in each row.                                                      |

## Markup

```html
<div class="uk-margin"></div>
```

