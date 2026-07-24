# Breadcrumb
> Create breadcrumbs to show users their location within a website.  ·  Category: **Navigation**

<sub>Source: [getuikit.com/docs/breadcrumb](https://getuikit.com/docs/breadcrumb) · demo: `tests/breadcrumb.html`</sub>

## Usage

The Breadcrumb component consists of links, which are aligned side by side and separated by a divider. Add the `.uk-breadcrumb` class to a `` element to define the component. Use `` elements as breadcrumb items within the list. An active state is automatically applied to the last `` element.

To add list items without a link, use a `` element instead of an ``. Alternatively, disable an `` element by adding the `.uk-disabled` class to the `` element and remove the `href` attribute from the anchor to make it inaccessible through keyboard navigation.

## Markup

```html
<ul class="uk-breadcrumb">
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><span></span></li>
</ul>
```

