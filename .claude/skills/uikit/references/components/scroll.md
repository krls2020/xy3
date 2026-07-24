# Scroll
> Scroll smoothly when jumping to different sections on a page.  ·  Interactive · JS

Simply add the `uk-scroll` attribute to any page-internal link that contains a URL fragment to add the smooth scrolling behavior.

The height of a sticky element, for example the sticky navbar, is automatically added as offset to the scroll target so it is not covered by the sticky element.

## JS — attr `uk-scroll="…"` · api `UIkit.scroll(el, opts)`

| Option | Default | Description |
|---|---|---|
| `offset` | `0` | Offset added to scroll top. |

## Markup

```html
<a href="#my-id" uk-scroll></a>
```
