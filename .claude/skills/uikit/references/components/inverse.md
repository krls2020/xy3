# Inverse
> Inverse colors of any component for light or dark backgrounds.  ·  Utilities · JS

Add the `.uk-light` class to color the text and all containing content to make it look great on dark backgrounds, and add the `.uk-dark` class on light backgrounds correspondingly.

Since there is already a default text color, for light styles it is dark, and for dark styles it's light, only one of the classes is needed to change the text color for different backgrounds. In light styles, the `.uk-light` class is needed and in dark styles the `.uk-dark` class. Mind that if one of the classes is used, the color cannot be changed back.

## JS — attr `uk-inverse="…"` · api `UIkit.inverse(el, opts)`

| Option | Default | Description |
|---|---|---|
| `target` | `false` | A list of targets that will be checked. |
| `sel-active` | `false` | A selector that needs to match for a color to be set, otherwise the color is removed. If omitted, color will always be set. |

## Markup

```html
<div class="uk-light"></div>

<div class="uk-dark"></div>
```
