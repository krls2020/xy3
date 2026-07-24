# Filter
> Filter or sort items in any given layout by metadata.  ·  Interactive · JS

To apply this component, you need a container element with the `uk-filter="target: SELECTOR"` attribute. Inside this container create a list of filter controls as well as the layout items you want to filter. Use the `target: SELECTOR` option to select the element containing the layout items.

Next, we need to define the metadata for each layout item, for example which category the item belongs to. Use any HTML class or attribute to do so.

## JS — attr `uk-filter="…"` · api `UIkit.filter(el, opts)`

| Option | Default | Description |
|---|---|---|
| `target` |  | The targeted list on which to apply the filter to. |
| `selActive` | `false` | A selector for the initially active filter controls. |
| `animation` | `slide` | Animation mode (`slide`, `fade`, `delayed-fade` or `false`). |
| `duration` | `250` | Animation duration in milliseconds. |

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
