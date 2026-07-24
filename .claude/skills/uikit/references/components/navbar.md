# Navbar
> Create a navigation bar with dropdown menus for the main site navigation.  ·  Category: **Navigation**  ·  JS component

<sub>Source: [getuikit.com/docs/navbar](https://getuikit.com/docs/navbar) · demo: `tests/navbar.html`</sub>

## Usage

The Navbar component consists of a navbar container, the navbar itself and one or more navigations.

Neither the navbar, nor the navbar container have horizontal padding. To set the same horizontal padding as the rest of the page use the [Container component](container.md).

## Classes & modifiers

| Class                         | Description                                              |
| ----------------------------- | -------------------------------------------------------- |
| `.uk-navbar-dropdown-width-2` | Add this class to double the dropdown's width.           |
| `.uk-navbar-dropdown-width-3` | Add this class to triple the dropdown's width.           |
| `.uk-navbar-dropdown-width-4` | Add this class to multiply the dropdown's width by four. |
| `.uk-navbar-dropdown-width-5` | Add this class to multiply the dropdown's width by five. |

## JavaScript

Activate with the `uk-navbar` attribute (no JS needed). Programmatic: `UIkit.navbar(element, options)`.

**Component options** (set in the attribute, e.g. `uk-navbar="option: value"`):

| Option                     | Value                 | Default             | Description                                                                                                  |
| -------------------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------ |
| `align`                    | String                | `left`              | Dropdown alignment (`left`, `right`, `center`).                                                              |
| `dropbar `                 | Boolean               | `false`             | Enable or disable dropbar behavior.                                                                          |
| `dropbar-anchor`           | CSS selector          | `false`             | If set, dropbar will be inserted after the anchor element.                                                   |
| `dropbar-transparent-mode` | Boolean, String       | `false`             | The dropbar transparent mode (`behind`, `remove`).                                                           |
| `stretch`                  | Boolean, String       | `false`             | Stretch dropdown on both (true) or given axis (`x`, `y`).                                                    |
| `mode`                     | String                | `click, hover`      | Comma-separated list of dropdown trigger behavior modes (`click`, `hover`).                                  |
| `delay-show`               | Number                | `0`                 | Delay time in hover mode before a dropdown is shown in ms.                                                   |
| `delay-hide`               | Number                | `800`               | Delay time in hover mode before a dropdown is hidden in ms.                                                  |
| `boundary`                 | CSS selector          | `true`              | The area the dropdown can't exceed causing it to flip and shift. By default, the nearest scrolling ancestor. |
| `target`                   | Boolean, CSS selector | `false`             | The element the dropdown is positioned to (`true` for window).                                               |
| `target-x`                 | Boolean, CSS selector | `false`             | The element's X axis the dropdown is positioned to (`true` for window).                                      |
| `target-y`                 | Boolean, CSS selector | `false`             | The element's Y axis the dropdown is positioned to (`true` for window).                                      |
| `offset`                   | Number                | `0`                 | The dropdown offset.                                                                                         |
| `animation`                | String                | `uk-animation-fade` | Space-separated names of animations. Comma-separated for animation out.                                      |
| `animate-out`              | Boolean               | `false`             | Use animation when closing the dropdown.                                                                     |
| `bg-scroll`                | Boolean               | `true`              | Allow background scrolling while dropdown is opened.                                                         |
| `close-on-scroll`          | Boolean               | `false`             | Close the dropdown on scrolling a parent scroll container.                                                   |
| `duration`                 | Number                | `200`               | The animation duration.                                                                                      |
| `container`                | Boolean               | `false`             | Define a target container via a selector to specify where the dropdown should be appended in the DOM.        |

## Markup

```html
<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href=""></a></li>
            <li class="uk-parent"><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </div>
</nav>
```

## See also

[container](container.md) · [inverse](inverse.md) · [utility](utility.md) · [offcanvas](offcanvas.md) · [modal](modal.md) · [dropdown](dropdown.md) · [drop](drop.md) · [grid](grid.md)
