# Thumbnav
> Create a flexible thumbnail navigation.  ·  Category: **Navigation**

<sub>Source: [getuikit.com/docs/thumbnav](https://getuikit.com/docs/thumbnav) · demo: `tests/thumbnav.html`</sub>

## Usage

To create a navigation with thumbnails, use the following classes. This component is built with Flexbox. So to align a thumbnav, you can use [Flex component](flex.md).

**Note** For a better layout, if items should wrap into the next row, add the `uk-margin` attribute from the [Margin component](margin.md).

## Classes & modifiers

| Class          | Description                                                                                                                            |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `.uk-thumbnav` | Add this class to a `<ul>` element to define the Thumbnav component. Nest your thumbnail images inside `<a>` elements within the list. |
| `.uk-active `  | Add this class to a list item to apply an active state.                                                                                |

## Markup

```html
<ul class="uk-thumbnav">
    <li class="uk-active"><a href=""><img src="" width="" height="" alt=""></a></li>
    <li><a href=""><img src="" alt=""></a></li>
</ul>
```

## See also

[flex](flex.md) · [margin](margin.md) · [slideshow](slideshow.md) · [position](position.md)
