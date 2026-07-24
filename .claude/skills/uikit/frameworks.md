# UIkit inside Vue, React, Svelte, htmx

Every statement here was checked against `src/js/api/boot.js` and
`src/js/api/instance.js` in the UIkit source, not recalled.

## You almost never need to initialise anything

After boot, UIkit installs one observer:

```js
new MutationObserver(handleMutation).observe(document, {
    subtree: true, childList: true, attributes: true,
});
```

Three consequences, and they cover most framework integration questions:

- **Added nodes connect themselves.** Markup a component renders after mount gets its
  UIkit behaviour with no `useEffect`, no `mounted()`, no `UIkit.update()`.
- **Removed nodes disconnect themselves.** You do not need cleanup code on unmount to
  avoid leaking a component. (If you created one imperatively and hold the instance,
  `instance.$destroy()` is there — but for markup-driven components it is redundant.)
- **Attributes are watched too.** Toggling `uk-sticky` on and off from reactive state
  creates and destroys the component. Changing an option string re-reads it. So bind
  the attribute and let UIkit react: `:uk-tooltip="'title: ' + label"` in Vue,
  `uk-tooltip={`title: ${label}`}` in JSX.

There is no `uk-cloak` in UIkit 3 — if you have seen it, it is from UIkit 2 or from
another framework. To avoid a flash before styles apply, load the CSS in `<head>` as
normal.

## Writing the attributes

**React** passes through any attribute containing a hyphen verbatim, so `uk-modal`,
`uk-grid` and `uk-toggle="target: #x"` work as written. Use `className` for classes.
A valueless attribute needs an explicit empty string: `<div uk-grid="">`, because
`<div uk-grid>` in JSX means `uk-grid={true}` and React renders `uk-grid="true"` —
which UIkit still accepts, but the empty string is what you mean.

**Vue** and **Svelte** pass both classes and hyphenated attributes through unchanged;
`<div uk-grid>` is fine as written.

## When you do want the JavaScript API

```js
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);                    // otherwise every icon renders empty

UIkit.modal('#dialog').show();       // drive an existing element
UIkit.notification({ message: 'Saved', status: 'success' });
const sticky = UIkit.getComponent(el, 'sticky');   // reach an instance
sticky?.$destroy();
```

`uikit show <component>` prints the exact option names for the second argument;
`UIkit.util` carries the DOM helpers UIkit itself uses.

## Class-name collisions

If UIkit has to coexist with another CSS framework, build a scoped stylesheet rather
than fighting specificity: `node build/scope.js -s my-scope` in the UIkit checkout
rewrites `dist/**/*.css` so every rule sits under `.my-scope`. Wrap your UIkit subtree
in that class. Without an argument the scope is `uk-scope`.

## Server-side rendering

The components are markup-only until the observer sees them, so SSR output is the same
HTML you wrote; behaviour attaches on hydration. Nothing UIkit does depends on being
present during the server render.
