# Tile
> Create layout boxes with different backgrounds that can be arranged seamlessly next to each other.  ·  Category: **Content**

<sub>Source: [getuikit.com/docs/tile](https://getuikit.com/docs/tile) · demo: `tests/tile.html`</sub>

## Usage

To apply this component, add the `.uk-tile` class to a `` element. By default, a tile is blank. That is why it is important to add one of the following modifier classes for styling.

The `.uk-tile-primary` and `.uk-tile-secondary` classes are extending the inverse style from the [Inverse component](inverse.md) automatically. If you want to prevent this behavior, for example because you are using [cards](card.md) in these sections, add the `.uk-preserve-color` class.

## Classes & modifiers

| Class                | Description                          |
|----------------------|--------------------------------------|
| `.uk-tile-default`   | Applies the default tile background. |
| `.uk-tile-muted`     | Applies a muted tile background.     |
| `.uk-tile-primary`   | Applies the primary tile background. |
| `.uk-tile-secondary` | Applies a secondary tile background. |

## Markup

```html
<div class="uk-tile uk-tile-default"></div>
```

## See also

[inverse](inverse.md) · [card](card.md) · [padding](padding.md)
