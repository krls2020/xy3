# Pattern: Forms

Form layouts and input styling. See `components/form.md`, `components/search.md`,
`components/grid.md`.

## Key principle

Every control needs its **own UIkit class** — `.uk-input`, `.uk-select`,
`.uk-textarea`, `.uk-checkbox`, `.uk-radio`, `.uk-range`. Layout comes from a
form modifier (`.uk-form-stacked` / `.uk-form-horizontal`) or the grid. Wrap each
row's label + control in `.uk-form-label` + `.uk-form-controls`, and space rows
with `.uk-margin`.

## Stacked form (labels above inputs — the common default)

```html
<form class="uk-form-stacked">

    <div class="uk-margin">
        <label class="uk-form-label" for="name">Name</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="name" type="text" placeholder="Jane Doe">
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="plan">Plan</label>
        <div class="uk-form-controls">
            <select class="uk-select" id="plan">
                <option>Free</option>
                <option>Pro</option>
            </select>
        </div>
    </div>

    <div class="uk-margin">
        <div class="uk-form-label">Notifications</div>
        <div class="uk-form-controls">
            <label><input class="uk-checkbox" type="checkbox"> Email me updates</label>
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="msg">Message</label>
        <div class="uk-form-controls">
            <textarea class="uk-textarea" id="msg" rows="4"></textarea>
        </div>
    </div>

    <button class="uk-button uk-button-primary" type="submit">Submit</button>
</form>
```

## Horizontal form (labels beside inputs)

Same row structure, just swap the modifier class. Use
`.uk-form-controls-text` for plain-text (non-input) rows so they align.

```html
<form class="uk-form-horizontal">
    <div class="uk-margin">
        <label class="uk-form-label" for="email">Email</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="email" type="email">
        </div>
    </div>
</form>
```

## Grid-based form (multi-column rows)

For side-by-side fields, drop the form modifier and use the grid.

```html
<form>
    <div class="uk-grid-small" uk-grid>
        <div class="uk-width-1-2@s">
            <label class="uk-form-label" for="first">First name</label>
            <input class="uk-input" id="first" type="text">
        </div>
        <div class="uk-width-1-2@s">
            <label class="uk-form-label" for="last">Last name</label>
            <input class="uk-input" id="last" type="text">
        </div>
        <div class="uk-width-1-1">
            <label class="uk-form-label" for="addr">Address</label>
            <input class="uk-input" id="addr" type="text">
        </div>
    </div>
</form>
```

## Validation states & sizes

- State: `.uk-form-danger` / `.uk-form-success` on the control.
- Size: `.uk-form-small` / `.uk-form-large`.
- Fixed width: `.uk-form-width-small` / `-medium` / `-large` / `-xsmall`.
- Blank/disabled: `.uk-form-blank`, the native `disabled` attribute.

```html
<input class="uk-input uk-form-danger" type="text" value="Invalid">
<input class="uk-input uk-form-success uk-form-width-medium" type="text" value="OK">
```

## Input with an icon

```html
<div class="uk-inline">
    <span class="uk-form-icon" uk-icon="icon: user"></span>
    <input class="uk-input" type="text">
</div>
```

Add `uk-form-icon-flip` to put the icon on the right.

## Search form

```html
<form class="uk-search uk-search-default">
    <span uk-search-icon></span>
    <input class="uk-search-input" type="search" placeholder="Search...">
</form>
```

Variants: `.uk-search-default`, `.uk-search-large`, `.uk-search-navbar` (inside a
navbar). See `components/search.md`.

## Gotchas

- Plain `<input>` without `.uk-input` stays unstyled — every control needs its
  class.
- `.uk-form-stacked` / `.uk-form-horizontal` go on the `<form>`, not the rows.
- Keep the `.uk-form-label` + `.uk-form-controls` wrapper structure so
  stacked/horizontal layouts align.
