# Countdown
> Create a simple countdown timer.  ·  Category: **Content**  ·  JS component

<sub>Source: [getuikit.com/docs/countdown](https://getuikit.com/docs/countdown) · demo: `tests/countdown.html`</sub>

## Usage

To apply this component, add the `uk-countdown` attribute to a container element and define a date when the countdown should expire. Just add `date: YYYY-MM-DDThh:mm:ssTZD` option to the attribute, using the [ISO 8601 format](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#ECMAScript_5_ISO-8601_format_support), e.g. `{%isodate%}` (UTC time).

## Classes & modifiers

| Class                   | Description                                                |
| ----------------------- | ---------------------------------------------------------- |
| `.uk-countdown-days`    | Add this class to indicate the days to be counted down.    |
| `.uk-countdown-hours`   | Add this class to indicate the hours to be counted down.   |
| `.uk-countdown-minutes` | Add this class to indicate the minutes to be counted down. |
| `.uk-countdown-seconds` | Add this class to indicate the seconds to be counted down. |
| `.uk-countdown-number`  | Add this class to use it as selector for custom CSS style. |

## JavaScript

Activate with the `uk-countdown` attribute (no JS needed). Programmatic: `UIkit.countdown(element, options)`.

**Component options** (set in the attribute, e.g. `uk-countdown="option: value"`):

| Option   | Value   | Default | Description                                                                                                                                         |
| -------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `date`   | String  | `false` | Any string parsable by `Date.parse`. See [Reference](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/parse). |
| `reload` | Boolean | `false` | Reload page after countdown expires. Initially expired countdowns won't reload the page.                                                            |

## Markup

```html
<div uk-countdown="date: {%isodate%}">
    <span class="uk-countdown-number uk-countdown-days"></span>
    <span class="uk-countdown-number uk-countdown-hours"></span>
    <span class="uk-countdown-number uk-countdown-minutes"></span>
    <span class="uk-countdown-number uk-countdown-seconds"></span>
</div>
```

## See also

[base](base.md) · [heading](heading.md) · [text](text.md)
