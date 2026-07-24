# Tab
> Create a tabbed navigation with different styles.  ·  Category: **Navigation**  ·  JS component

<sub>Source: [getuikit.com/docs/tab](https://getuikit.com/docs/tab) · demo: `tests/tab.html`</sub>

## Usage

The Tab component consists of clickable tabs, that are aligned side by side in a list. Its JavaScript functionality extends the [Switcher component](switcher.md) and is necessary to dynamically transition through different contents using the tabbed navigation.

## Classes & modifiers

| Class/Attribute | Description                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uk-tab`        | Add this attribute to a `<ul>` element to define the Tab component. Use `<a>` elements as tab items within the list.                                           |
| `.uk-active `   | Add this class to a list item to apply an active state.                                                                                                        |
| `.uk-disabled ` | Add this class to a list item to apply a disabled state. Also remove the `href` attribute from the anchor to make it inaccessible through keyboard navigation. |

## JavaScript

Activate with the `uk-tab` attribute (no JS needed). Programmatic: `UIkit.tab(element, options)`.

**Component options** (set in the attribute, e.g. `uk-tab="option: value"`):

| Option      | Value          | Default | Description                                                                                                                                                  |
|-------------|----------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `connect`   | CSS selector   | `false` | Related item's container. By default, this is the next element with the 'uk-switcher' class.                                                                 |
| `toggle `   | CSS selector   | `> *`   | The toggle selector, which triggers content switching on click.                                                                                              |
| `active `   | Number         | `0`     | Active index on init. Providing a negative number indicates a position starting from the end of the set.                                                     |
| `animation` | String         | `false` | Space-separated names of [animations](animation.md). Comma-separated for animation out.                                                                      |
| `duration`  | Number         | `200`   | The animation duration.                                                                                                                                      |
| `swiping`   | Boolean        | `true`  | Use swiping.                                                                                                                                                 |
| `media`     | Number, String | `960`   | Condition for the horizontal mode - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). |

## Markup

```html
<ul uk-tab>
    <li class="uk-active"><a href=""></a></li>
    <li><a href=""></a></li>
    <li class="uk-disabled"><a></a></li>
</ul>
```

## See also

[switcher](switcher.md) · [flex](flex.md) · [width](width.md) · [dropdown](dropdown.md) · [animation](animation.md) · [nav](nav.md)
