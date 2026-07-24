# JavaScript & the `uk-*` attribute system

UIkit's interactive components are driven by HTML attributes and
auto-initialized. **Prefer attributes; drop to the JS API only for dynamic
cases.** This is the single most important behavioral principle in UIkit.

## Attribute usage (the default, always try this first)

Add a `uk-*` (or `data-uk-*`) attribute to an element — no JavaScript required:

```html
<div uk-sticky="offset: 50"></div>
<button uk-toggle="target: #panel" type="button">Toggle</button>
<span uk-icon="icon: heart"></span>
```

UIkit initializes on load and **watches the DOM** — components mounted later by a
framework or by hand are picked up automatically. That's why it drops into
Vue/React/htmx/Alpine without glue code.

> **React:** use the `data-uk-*` form (`data-uk-sticky`), not bare `uk-*`.

## The four option formats (all equivalent)

```html
<!-- 1. key: value; pairs (most common) -->
<div uk-sticky="start: 100; offset: 50;"></div>

<!-- 2. valid JSON -->
<div uk-sticky='{"start": 100, "offset": 50}'></div>

<!-- 3. single attributes -->
<div uk-sticky start="100" offset="50"></div>

<!-- 4. single attributes, data- prefixed -->
<div uk-sticky data-start="100" data-offset="50"></div>
```

### Primary option shorthand

Many components have one **primary** option whose key may be omitted when it's
the only value. Each component's cheat-sheet notes its primary option.

```html
<span uk-icon="home"></span>          <!-- = uk-icon="icon: home" -->
<div uk-drop="top-left"></div>         <!-- = uk-drop="pos: top-left" -->
```

### Precedence

Component-attribute options > single attributes > options passed in JS.

```html
<div uk-sticky="offset: 50;" offset="100"></div> <!-- offset is 50 -->
```

## Programmatic API (only when you truly need it)

Initialize / configure in JS with the `(element, options)` signature. `element`
may be a `Node`, a selector string, or a jQuery object.

```js
// Initialize with options
const sticky = UIkit.sticky('.sticky', { offset: 50, top: 100 });

// Primary option can be passed as a string
UIkit.drop('#drop', 'top-left');

// Functional components omit the element (e.g. Notification)
UIkit.notification('Saved!', { status: 'success' });
```

**Option names are camelCased in JS**: the attribute `show-on-up` becomes
`showOnUp`.

### Getter — retrieve an existing instance

Call the same function **without** the options arg. It returns the instance
(does not re-init). With a CSS selector it returns only the **first** match — for
all instances, query the elements yourself and pass each element.

```js
const sticky = UIkit.sticky('.sticky');    // getter
UIkit.offcanvas('#offcanvas').toggle();     // call a method
```

## Events

Components emit DOM events (listed on each component's page — e.g. Modal fires
`show`, `hidden`; Scrollspy fires `inview`). Listen with `UIkit.util.on` or plain
`addEventListener`:

```js
UIkit.util.on('#offcanvas', 'show', () => { /* … */ });
```

Events usually **bubble**, and different components emit same-named events (many
fire `show`). Check `event.target` to be sure it's the component you mean.

## Updating & destroying

```js
// Re-measure components (needed when a hidden Grid/Tab becomes visible)
UIkit.update(element, 'update');

// Tear down (e.g. before removing from the DOM)
component.$destroy();       // unbind listeners
component.$destroy(true);   // also remove the element
```

## Init hook — register custom components/mixins

```js
document.addEventListener('uikit:init', () => {
    // runs after UIkit loads, before it initializes components
});
```

## Global configuration via mixin

Change a component's defaults for all future instances:

```js
UIkit.mixin({ data: { offset: 50, top: 100 } }, 'sticky');
```

## Utility helpers

`UIkit.util` exposes DOM/event helpers used internally and handy in app code:
`on`, `$` / `$$` (query one / all), `addClass`, `toggleClass`, `attr`,
`ready`, `trigger`, and more. Reach for them when you need a light DOM helper and
UIkit is already loaded.

## Rule of thumb

If a task can be expressed as "toggle / show / stick / slide / reveal this", it's
an **attribute** (`uk-toggle`, `uk-modal`, `uk-switcher`, `uk-sticky`,
`uk-scrollspy`, `uk-slideshow`). Only truly dynamic behavior — creating
components from data, reacting to events, imperatively opening/closing — needs the
JS API above.
