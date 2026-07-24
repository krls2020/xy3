# Nav
> Defines different styles for list navigations.  ·  Navigation · JS

To apply this component, use the following classes.

**Note** By default, the nav has no styling. That's why it is important to add a modifier class. In our example we are using the `.uk-nav-default` class.

## Classes

| Class | Description |
|---|---|
| `.uk-nav` | Add this class to a `<ul>` element to define the Nav component. Use `<a>` elements as nav items within the list. |
| `.uk-active ` | Add this class to a list item to apply an active state to a menu item. |

| Class | Description |
|---|---|
| `.uk-nav-medium` | Add this class to apply a medium-sized primary nav. |
| `.uk-nav-large` | Add this class to apply a large-sized primary nav. |
| `.uk-nav-xlarge` | Add this class to apply a xlarge-sized primary nav. |

## JS — attr `uk-nav="…"` · api `UIkit.nav(el, opts)`

| Option | Default | Description |
|---|---|---|
| `targets` | `> .uk-parent` | The element(s) to toggle. |
| `toggle ` | `> a` | The toggle element(s). |
| `content` | `> ul` | The content element(s). |
| `collapsible` | `true` | Allow all items to be closed. |
| `multiple` | `false` | Allow multiple open items. |
| `transition` | `ease` | The transition to use. |
| `animation` | `true` | Space-separated names of [animations](animation.md). Comma-separated for animation out. |
| `duration` | `200` | The animation duration in milliseconds. |

## Markup

```html
<ul class="uk-nav">
    <li class="uk-active"><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
```
