# Tab
> Create a tabbed navigation with different styles.  ·  Navigation · JS

The Tab component consists of clickable tabs, that are aligned side by side in a list. Its JavaScript functionality extends the [Switcher component](switcher.md) and is necessary to dynamically transition through different contents using the tabbed navigation.

## Classes

| Class/Attribute | Description |
|---|---|
| `uk-tab` | Add this attribute to a `<ul>` element to define the Tab component. Use `<a>` elements as tab items within the list. |
| `.uk-active ` | Add this class to a list item to apply an active state. |
| `.uk-disabled ` | Add this class to a list item to apply a disabled state. Also remove the `href` attribute from the anchor to make it inaccessible through keyboard navigation. |

## JS — attr `uk-tab="…"` · api `UIkit.tab(el, opts)`

| Option | Default | Description |
|---|---|---|
| `connect` | `false` | Related item's container. By default, this is the next element with the 'uk-switcher' class. |
| `toggle ` | `> *` | The toggle selector, which triggers content switching on click. |
| `active ` | `0` | Active index on init. Providing a negative number indicates a position starting from the end of the set. |
| `animation` | `false` | Space-separated names of [animations](animation.md). Comma-separated for animation out. |
| `duration` | `200` | The animation duration. |
| `swiping` | `true` | Use swiping. |
| `media` | `960` | Condition for the horizontal mode - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). |

## Markup

```html
<ul uk-tab>
    <li class="uk-active"><a href=""></a></li>
    <li><a href=""></a></li>
    <li class="uk-disabled"><a></a></li>
</ul>
```
