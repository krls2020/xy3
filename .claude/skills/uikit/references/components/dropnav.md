# Dropnav
> Create dropdown menus for any navigation.  ·  Navigation · JS

The Dropnav component consists of a number of toggles and their related dropdowns. Add the `uk-dropnav` attribute to a list element that contains the toggles or its parent container element. Use the [Dropdown component](dropdown.md) by adding the `.uk-dropdown` class to the dropdowns and the `.uk-dropdown-nav` class to navs inside the dropdown.

## JS — attr `uk-dropnav="…"` · api `UIkit.dropnav(el, opts)`

| Option | Default | Description |
|---|---|---|
| `align` | `left` | Dropdown alignment (`left`, `right`, `center`). |
| `dropbar ` | `false` | Enable or disable dropbar behavior. |
| `dropbar-anchor` | `false` | If set, dropbar will be inserted after the anchor element. |
| `stretch` | `false` | Stretch dropdown on both (true) or given axis (`x`, `y`). |
| `mode` | `click, hover` | Comma-separated list of dropdown trigger behavior modes (`click`, `hover`). |
| `delay-show` | `0` | Delay time in hover mode before a dropdown is shown in ms. |
| `delay-hide` | `800` | Delay time in hover mode before a dropdown is hidden in ms. |
| `boundary` | `true` | The area the dropdown can't exceed causing it to flip and shift. By default, the nearest scrolling ancestor. |
| `target` | `false` | The element the dropdown is positioned to (`true` for window). |
| `target-x` | `false` | The element's X axis the dropdown is positioned to (`true` for window). |
| `target-y` | `false` | The element's Y axis the dropdown is positioned to (`true` for window). |
| `offset` | `0` | The dropdown offset. |
| `animation` | `uk-animation-fade` | Space-separated names of animations. Comma-separated for animation out. |
| `animate-out` | `false` | Use animation when closing the drop. |
| `bg-scroll` | `true` | Allow background scrolling while dropdown is opened. |
| `close-on-scroll` | `false` | Close the drop on scrolling a parent scroll container. |
| `duration` | `200` | The animation duration. |
| `container` | `false` | Define a target container via a selector to specify where the dropdown should be appended in the DOM. |

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
