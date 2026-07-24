# Filter
> Filter or sort items in any given layout by metadata.  ·  Category: **Interactive**  ·  JS component

<sub>Source: [getuikit.com/docs/filter](https://getuikit.com/docs/filter) · demo: `tests/filter.html`</sub>

## Usage

To apply this component, you need a container element with the `uk-filter="target: SELECTOR"` attribute. Inside this container create a list of filter controls as well as the layout items you want to filter. Use the `target: SELECTOR` option to select the element containing the layout items.

Next, we need to define the metadata for each layout item, for example which category the item belongs to. Use any HTML class or attribute to do so.

## JavaScript

Activate with the `uk-filter` attribute (no JS needed). Programmatic: `UIkit.filter(element, options)`.

**Component options** (set in the attribute, e.g. `uk-filter="option: value"`):

| Option      | Value           | Default | Description                                                  |
| ----------- | --------------- | ------- | ------------------------------------------------------------ |
| `target`    | String          |         | The targeted list on which to apply the filter to.           |
| `selActive` | String, Boolean | `false` | A selector for the initially active filter controls.         |
| `animation` | String, Boolean | `slide` | Animation mode (`slide`, `fade`, `delayed-fade` or `false`). |
| `duration`  | Number          | `250`   | Animation duration in milliseconds.                          |

## Markup

```html
<div uk-filter="target: .js-filter">

    <!-- Filter controls -->
    <ul>
        <li><a href="#"></a></li>
    </ul>

    <!-- Layout items -->
    <ul class="js-filter">
        <li></li>
    </ul>

</div>
```

## See also

[grid](grid.md) · [nav](nav.md) · [subnav](subnav.md) · [tab](tab.md)
