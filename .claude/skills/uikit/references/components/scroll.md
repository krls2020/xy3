# Scroll
> Scroll smoothly when jumping to different sections on a page.  ·  Category: **Interactive**  ·  JS component

<sub>Source: [getuikit.com/docs/scroll](https://getuikit.com/docs/scroll) · demo: `tests/scroll.html`</sub>

## Usage

Simply add the `uk-scroll` attribute to any page-internal link that contains a URL fragment to add the smooth scrolling behavior.

The height of a sticky element, for example the sticky navbar, is automatically added as offset to the scroll target so it is not covered by the sticky element.

## JavaScript

Activate with the `uk-scroll` attribute (no JS needed). Programmatic: `UIkit.scroll(element, options)`.

**Component options** (set in the attribute, e.g. `uk-scroll="option: value"`):

| Option   | Value  | Default | Description                 |
|----------|--------|---------|-----------------------------|
| `offset` | Number | `0`     | Offset added to scroll top. |

## Markup

```html
<a href="#my-id" uk-scroll></a>
```

