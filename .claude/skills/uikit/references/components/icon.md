# Icon
> Place scalable vector icons anywhere in your content.  ·  Category: **Utilities**  ·  JS component

<sub>Source: [getuikit.com/docs/icon](https://getuikit.com/docs/icon) · demo: `tests/icon.html`</sub>

## Usage

Make sure to include the icon library script, for more details see the [installation instructions](installation.md).

To apply this component, add the `uk-icon` attribute to a `` or `` element. To display the actual icon, you need to append the `icon: NAME` parameter to the attribute. Et voilà, you have a vector icon that inherits color just like your text does.

## JavaScript

Activate with the `uk-icon` attribute (no JS needed). Programmatic: `UIkit.icon(element, options)`.

**Component options** (set in the attribute, e.g. `uk-icon="option: value"`):

| Option  | Value  | Default | Description          |
|---------|--------|---------|----------------------|
| `icon`  | String |         | The icon to display. |
| `ratio` | Number | `1`     | The icon size ratio. |

## Markup

```html
<script src="uikit/dist/js/uikit-icons.min.js"></script>
```

