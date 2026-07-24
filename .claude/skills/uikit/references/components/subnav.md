# Subnav
> Defines different styles for a sub navigation.  ·  Category: **Navigation**

<sub>Source: [getuikit.com/docs/subnav](https://getuikit.com/docs/subnav) · demo: `tests/subnav.html`</sub>

## Usage

To apply this component, use the following classes. To align a subnav, for example to horizontally center it, you can use the [Flex component](flex.md).

**Note** For a better layout, if items should wrap into the next row, add the `uk-margin` attribute from the [Margin component](margin.md).

## Classes & modifiers

| Class         | Description                                                                                                         |
|---------------|---------------------------------------------------------------------------------------------------------------------|
| `.uk-subnav`  | Add this class to a `<ul>` element to define the Subnav component. Use `<a>` elements as nav items within the list. |
| `.uk-active ` | Add this class to a list item to apply an active state.                                                             |
| `.uk-disabled`   | Add this class to a list item to apply a disabled state and use a `<span>` instead of an `<a>` element.                        |

## Markup

```html
<ul class="uk-subnav">
    <li class="uk-active"><a href=""></a></li>
    <li><a href=""></a></li>
    <li class="uk-disable"><span></span></li>
</ul>
```

## See also

[flex](flex.md) · [margin](margin.md) · [dropdown](dropdown.md)
