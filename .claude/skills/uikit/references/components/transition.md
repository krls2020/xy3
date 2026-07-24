# Transition
> Create smooth transitions between two states when hovering an element.  ·  Category: **Utilities**

<sub>Source: [getuikit.com/docs/transition](https://getuikit.com/docs/transition) · demo: `tests/transition.html`</sub>

## Usage

To toggle a transition on hover or focus, add the `.uk-transition-toggle` class to a parent element. Also add `tabindex="0"` to make the animation focusable through keyboard navigation and on touch devices. Add one of the `.uk-transition-*` classes to any child element to apply the actual effect.

This component is mostly used in combination with the [Overlay component](overlay.md) as elements are transitioned from invisible to visible state. To place the overlay on top of another element, like an image, use the [Position component](position.md).

## Classes & modifiers

| Class                                                                                                                                                      | Description                                                                        |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| `.uk-transition-fade`                                                                                                                                      | Lets the element fade in                                                           |
| `.uk-transition-scale-up`<br> `.uk-transition-scale-down`                                                                                                  | The element scales up or down.                                                     |
| `.uk-transition-slide-top`<br> `.uk-transition-slide-bottom`<br> `.uk-transition-slide-left`<br> `.uk-transition-slide-right`                              | Lets the element slide in from the top                                             |
| `.uk-transition-slide-top-small`<br> `.uk-transition-slide-bottom-small`<br>  `.uk-transition-slide-left-small`<br> `.uk-transition-slide-right-small`     | The element slides in from the top, bottom, left or right with a smaller distance. |
| `.uk-transition-slide-top-medium`<br> `.uk-transition-slide-bottom-medium`<br>  `.uk-transition-slide-left-medium`<br> `.uk-transition-slide-right-medium` | The element slides in from the top, bottom, left or right with a medium distance.  |

## Markup

```html
<div class="uk-transition-toggle" tabindex="0">
    <div class="uk-transition-fade"></div>
</div>
```

## See also

[overlay](overlay.md) · [position](position.md)
