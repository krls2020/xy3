# Toggle
> Hide, switch or change the appearance of different contents through a toggle.  ·  Interactive · JS

To apply this component, just add the `uk-toggle="target: #ID"` attribute to a `<button>` or `<a>` element. You can use any selector with the toggle attribute.

The toggle can be used to add or remove a class or attribute from the item. By default, it adds the `hidden` attribute to hide the element.

## JS — attr `uk-toggle="…"` · api `UIkit.toggle(el, opts)`

| Option | Default | Description |
|---|---|---|
| `target` | `false` | CSS selector of the element(s) to toggle. |
| `mode` | `click` | Comma-separated list of trigger behaviour modes. (`hover`, `click`, `media`) |
| `cls` | `false` | The class that is being toggled. Defaults to the `hidden` attribute. |
| `media` | `false` | Condition to trigger the toggle in media mode - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). |
| `animation` | `false` | Space-separated names of [animations](animation.md). Comma-separated for animation out. |
| `duration` | `200` | Animation duration in milliseconds. |
| `queued` | `true` | Toggle the targets successively. |

## Markup

```html
<button uk-toggle="target: #my-id" type="button"></button>
<p id="my-id"></p>
```
