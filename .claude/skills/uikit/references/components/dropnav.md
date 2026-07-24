# Dropnav
> Create dropdown menus for any navigation.  ·  Category: **Navigation**  ·  JS component

<sub>Source: [getuikit.com/docs/dropnav](https://getuikit.com/docs/dropnav) · demo: `tests/dropnav.html`</sub>

## Usage

The Dropnav component consists of a number of toggles and their related dropdowns. Add the `uk-dropnav` attribute to a list element that contains the toggles or its parent container element. Use the [Dropdown component](dropdown.md) by adding the `.uk-dropdown` class to the dropdowns and the `.uk-dropdown-nav` class to navs inside the dropdown.

## JavaScript

Activate with the `uk-dropnav` attribute (no JS needed). Programmatic: `UIkit.dropnav(element, options)`.

**Component options** (set in the attribute, e.g. `uk-dropnav="option: value"`):

| Option            | Value                 | Default             | Description                                                                                                  |
| ----------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------ |
| `align`           | String                | `left`              | Dropdown alignment (`left`, `right`, `center`).                                                              |
| `dropbar `        | Boolean               | `false`             | Enable or disable dropbar behavior.                                                                          |
| `dropbar-anchor`  | CSS selector          | `false`             | If set, dropbar will be inserted after the anchor element.                                                   |
| `stretch`         | Boolean, String       | `false`             | Stretch dropdown on both (true) or given axis (`x`, `y`).                                                    |
| `mode`            | String                | `click, hover`      | Comma-separated list of dropdown trigger behavior modes (`click`, `hover`).                                  |
| `delay-show`      | Number                | `0`                 | Delay time in hover mode before a dropdown is shown in ms.                                                   |
| `delay-hide`      | Number                | `800`               | Delay time in hover mode before a dropdown is hidden in ms.                                                  |
| `boundary`        | CSS selector          | `true`              | The area the dropdown can't exceed causing it to flip and shift. By default, the nearest scrolling ancestor. |
| `target`          | Boolean, CSS selector | `false`             | The element the dropdown is positioned to (`true` for window).                                               |
| `target-x`        | Boolean, CSS selector | `false`             | The element's X axis the dropdown is positioned to (`true` for window).                                      |
| `target-y`        | Boolean, CSS selector | `false`             | The element's Y axis the dropdown is positioned to (`true` for window).                                      |
| `offset`          | Number                | `0`                 | The dropdown offset.                                                                                         |
| `animation`       | String                | `uk-animation-fade` | Space-separated names of animations. Comma-separated for animation out.                                      |
| `animate-out`     | Boolean               | `false`             | Use animation when closing the drop.                                                                         |
| `bg-scroll`       | Boolean               | `true`              | Allow background scrolling while dropdown is opened.                                                         |
| `close-on-scroll` | Boolean               | `false`             | Close the drop on scrolling a parent scroll container.                                                       |
| `duration`        | Number                | `200`               | The animation duration.                                                                                      |
| `container`       | Boolean               | `false`             | Define a target container via a selector to specify where the dropdown should be appended in the DOM.        |

## Markup

```html
<ul uk-dropnav>
    <li>
        <a href=""></a>
        <div class="uk-dropdown">
            <ul class="uk-nav uk-dropdown-nav">…</ul>
        </div>
    </li>
</ul>
```

## See also

[dropdown](dropdown.md) · [subnav](subnav.md) · [drop](drop.md) · [tab](tab.md)
