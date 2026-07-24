# Dropbar
> Create a toggleable, full-width section called dropbar.  ·  Interactive

To apply this component, add the `.uk-dropbar` class and add a modifier class for the direction from which the dropbar appears, for example `.uk-dropbar-top`.

Additionally, add the `uk-drop` attribute to the dropbar and a toggle element before. Any content, like a button, can toggle the drop component. Since the dropbar visually requires to extend to the full width or height of the viewport, add the `stretch: true` option to the `uk-drop` attribute. To only stretch to one axis, use `stretch: x` or `stretch: y`. For all the animation details take a look at the [Drop component](drop.md).

## Markup

```html
<div class="uk-dropbar uk-dropbar-top"></div>
```
