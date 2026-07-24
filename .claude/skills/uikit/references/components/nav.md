# Nav
> Defines different styles for list navigations.  ·  Category: **Navigation**  ·  JS component

<sub>Source: [getuikit.com/docs/nav](https://getuikit.com/docs/nav) · demo: `tests/nav.html`</sub>

## Usage

To apply this component, use the following classes.

**Note** By default, the nav has no styling. That's why it is important to add a modifier class. In our example we are using the `.uk-nav-default` class.

## Classes & modifiers

| Class         | Description                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| `.uk-nav`     | Add this class to a `<ul>` element to define the Nav component. Use `<a>` elements as nav items within the list. |
| `.uk-active ` | Add this class to a list item to apply an active state to a menu item.                                           |

| Class                 | Description                                      |
|-----------------------|--------------------------------------------------|
| `.uk-nav-medium`  | Add this class to apply a medium-sized primary nav.  |
| `.uk-nav-large`   | Add this class to apply a large-sized primary nav.   |
| `.uk-nav-xlarge`  | Add this class to apply a xlarge-sized primary nav.  |

## JavaScript

Activate with the `uk-nav` attribute (no JS needed). Programmatic: `UIkit.nav(element, options)`.

**Component options** (set in the attribute, e.g. `uk-nav="option: value"`):

| Option        | Value           | Default        | Description                                                                             |
| ------------- | --------------- | -------------- | --------------------------------------------------------------------------------------- |
| `targets`     | CSS selector    | `> .uk-parent` | The element(s) to toggle.                                                               |
| `toggle `     | CSS selector    | `> a`          | The toggle element(s).                                                                  |
| `content`     | CSS selector    | `> ul`         | The content element(s).                                                                 |
| `collapsible` | Boolean         | `true`         | Allow all items to be closed.                                                           |
| `multiple`    | Boolean         | `false`        | Allow multiple open items.                                                              |
| `transition`  | String          | `ease`         | The transition to use.                                                                  |
| `animation`   | Boolean, String | `true`         | Space-separated names of [animations](animation.md). Comma-separated for animation out. |
| `duration`    | Number          | `200`          | The animation duration in milliseconds.                                                 |

## Markup

```html
<ul class="uk-nav">
    <li class="uk-active"><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
```

## See also

[dropdown](dropdown.md) · [navbar](navbar.md) · [offcanvas](offcanvas.md) · [animation](animation.md)
