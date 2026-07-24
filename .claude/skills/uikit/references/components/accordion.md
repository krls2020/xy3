# Accordion
> Create a list of items that can be shown individually by clicking an item's header.  ·  Content · JS

The Accordion component consists of a parent container with the `uk-accordion` attribute, and a title and content part for each accordion item.

To apply a style to the accordion add the `.uk-accordion-default` modifier.

## Classes

| Class | Description |
|---|---|
| `.uk-accordion-title` | Defines and styles the toggle for each accordion item. Use `<a>` elements. |
| `.uk-accordion-content` | Defines the content part for each accordion item. |

## JS — attr `uk-accordion="…"` · api `UIkit.accordion(el, opts)`

| Option | Default | Description |
|---|---|---|
| `active` | `false` | Index of the element to open initially. |
| `animation` | `true` | Reveal item directly or with a transition. |
| `collapsible` | `true` | Allow all items to be closed. |
| `content` | `> .uk-accordion-content` | The content selector, which selects the accordion content elements. |
| `duration` | `200` | Animation duration in milliseconds. |
| `multiple` | `false` | Allow multiple open items. |
| `targets` | `> *` | CSS selector of the element(s) to toggle. |
| `toggle` | `> .uk-accordion-title` | The toggle selector, which toggles accordion items. |
| `transition` | `ease` | The transition to use when revealing items. Use keyword for [easing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#Keywords_for_common_timing-functions). |
| `offset` | `0` | Pixel offset added to scroll top. |

## Markup

```html
<ul class="uk-accordion-default" uk-accordion>
    <li>
        <a class="uk-accordion-title" href></a>
        <div class="uk-accordion-content"></div>
    </li>
</ul>
```
