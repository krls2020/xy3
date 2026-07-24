# Animation
> A collection of smooth animations to use within your page.  ·  Utilities

Add one of the `.uk-animation-*` classes to any element. The animation is shown when the class is added, so usually immediately on page load. To show the animation at another point, for example when the element enters the viewport, you would add the class using JavaScript — with the [Scrollspy component](scrollspy.md) for instance. This is what happens in many of UIkit's components that make use of animations. All animations themselves are implemented with CSS, so they do not require JavaScript to play.

## Classes

| Class | Description |
|---|---|
| `.uk-animation-fade` | The element fades in. |
| `.uk-animation-scale-up`<br> `.uk-animation-scale-down` | The element fades in and scales up or down. |
| `.uk-animation-slide-top`<br> `.uk-animation-slide-bottom` `.uk-animation-slide-left`<br> `.uk-animation-slide-right` | The element fades and slides in from the top, bottom, left or right by its own height or width. |
| `.uk-animation-slide-top-small`<br> `.uk-animation-slide-bottom-small` `.uk-animation-slide-left-small`<br> `.uk-animation-slide-right-small` | The element fades and slides in from the top, bottom, left or right with a smaller distance which is specified by a fixed pixel value. |
| `.uk-animation-slide-top-medium`<br> `.uk-animation-slide-bottom-medium` `.uk-animation-slide-left-medium`<br> `.uk-animation-slide-right-medium` | The element fades and slides in from the top, bottom, left or right with a medium distance which is specified by a fixed pixel value. |
| `.uk-animation-kenburns` | The element scales very slowly up without fading in. |
| `.uk-animation-shake` | The element shakes. |
| `.uk-animation-stroke` | The SVG element strokes are drawn. |

## Markup

```html
<div class="uk-animation-toggle" tabindex="0">
    <div class="uk-animation-fade"></div>
</div>
```
