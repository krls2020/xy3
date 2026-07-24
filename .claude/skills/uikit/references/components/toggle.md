# Toggle
> Hide, switch or change the appearance of different contents through a toggle.  ·  Category: **Interactive**  ·  JS component

<sub>Source: [getuikit.com/docs/toggle](https://getuikit.com/docs/toggle) · demo: `tests/toggle.html`</sub>

## Usage

To apply this component, just add the `uk-toggle="target: #ID"` attribute to a `` or `` element. You can use any selector with the toggle attribute.

The toggle can be used to add or remove a class or attribute from the item. By default, it adds the `hidden` attribute to hide the element.

## JavaScript

Activate with the `uk-toggle` attribute (no JS needed). Programmatic: `UIkit.toggle(element, options)`.

**Component options** (set in the attribute, e.g. `uk-toggle="option: value"`):

| Option      | Value                   | Default | Description                                                                                                                                                              |
| ----------- | ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `target`    | String                  | `false` | CSS selector of the element(s) to toggle.                                                                                                                                |
| `mode`      | String                  | `click` | Comma-separated list of trigger behaviour modes. (`hover`, `click`, `media`)                                                                                             |
| `cls`       | String                  | `false` | The class that is being toggled. Defaults to the `hidden` attribute.                                                                                                     |
| `media`     | Boolean, Number, String | `false` | Condition to trigger the toggle in media mode - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). |
| `animation` | String                  | `false` | Space-separated names of [animations](animation.md). Comma-separated for animation out.                                                                                  |
| `duration`  | Number                  | `200`   | Animation duration in milliseconds.                                                                                                                                      |
| `queued`    | Boolean                 | `true`  | Toggle the targets successively.                                                                                                                                         |

## Markup

```html
<button uk-toggle="target: #my-id" type="button"></button>
<p id="my-id"></p>
```

## See also

[animation](animation.md)
