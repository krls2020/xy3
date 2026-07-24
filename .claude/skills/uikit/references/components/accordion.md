# Accordion
> Create a list of items that can be shown individually by clicking an item's header.  ·  Category: **Content**  ·  JS component

<sub>Source: [getuikit.com/docs/accordion](https://getuikit.com/docs/accordion) · demo: `tests/accordion.html`</sub>

## Usage

The Accordion component consists of a parent container with the `uk-accordion` attribute, and a title and content part for each accordion item.

To apply a style to the accordion add the `.uk-accordion-default` modifier.

## Classes & modifiers

| Class                   | Description                                                                |
| ----------------------- | -------------------------------------------------------------------------- |
| `.uk-accordion-title`   | Defines and styles the toggle for each accordion item. Use `<a>` elements. |
| `.uk-accordion-content` | Defines the content part for each accordion item.                          |

## JavaScript

Activate with the `uk-accordion` attribute (no JS needed). Programmatic: `UIkit.accordion(element, options)`.

**Component options** (set in the attribute, e.g. `uk-accordion="option: value"`):

| Option        | Value   | Default                   | Description                                                                                                                                                                                              |
| ------------- | ------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`      | Number  | `false`                   | Index of the element to open initially.                                                                                                                                                                  |
| `animation`   | Boolean | `true`                    | Reveal item directly or with a transition.                                                                                                                                                               |
| `collapsible` | Boolean | `true`                    | Allow all items to be closed.                                                                                                                                                                            |
| `content`     | String  | `> .uk-accordion-content` | The content selector, which selects the accordion content elements.                                                                                                                                      |
| `duration`    | Number  | `200`                     | Animation duration in milliseconds.                                                                                                                                                                      |
| `multiple`    | Boolean | `false`                   | Allow multiple open items.                                                                                                                                                                               |
| `targets`     | String  | `> *`                     | CSS selector of the element(s) to toggle.                                                                                                                                                                |
| `toggle`      | String  | `> .uk-accordion-title`   | The toggle selector, which toggles accordion items.                                                                                                                                                      |
| `transition`  | String  | `ease`                    | The transition to use when revealing items. Use keyword for [easing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#Keywords_for_common_timing-functions). |
| `offset`      | Number  | `0`                       | Pixel offset added to scroll top.                                                                                                                                                                        |

## Markup

```html
<ul class="uk-accordion-default" uk-accordion>
    <li>
        <a class="uk-accordion-title" href></a>
        <div class="uk-accordion-content"></div>
    </li>
</ul>
```

