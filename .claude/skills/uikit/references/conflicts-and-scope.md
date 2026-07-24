# Avoiding conflicts: custom prefix & scope mode

By default every UIkit class/attribute starts with `uk-`, which already avoids
most collisions. For harder cases — embedding UIkit in an existing site, a CMS
plugin, or a page that may load another UIkit version — use one of these.
Both require the GitHub-source build (see `setup.md`).

## Custom prefix

Rebuild UIkit so classes/attributes use your own prefix (e.g. `xyz-grid` instead
of `uk-grid`). Lets multiple UIkit versions coexist on one page. The global JS
object is renamed too (`xyzUIkit`).

```sh
pnpm prefix -- -p xyz   # prompts for the prefix; rewrites files in /dist
```

Note: the Base component still styles some bare HTML elements. To avoid that,
either build without Base, or use scope mode below.

## Scope mode

Limit UIkit's styles to one part of the page — useful inside admin backends
(WordPress/Joomla) where UIkit shouldn't touch the surrounding chrome.

```sh
pnpm scope        # add -- -h for options
```

Wrap your UIkit markup in `.uk-scope`:

```html
<body>
    <!-- non-UIkit markup, untouched -->
    <div class="uk-scope">
        <!-- your UIkit markup -->
    </div>
</body>
```

### Tell floating components where to render

Modal, Tooltip and Lightbox append themselves to a container (default `<body>`).
In scoped mode, point them back inside the scope so they inherit the scoped
styles:

```js
UIkit.container = '.uk-scope';
// or a specific element:
UIkit.container = document.getElementById('id-of-scope-element');
```

## When to reach for these

- **Custom prefix** → another framework/older UIkit already uses `uk-`, or you're
  shipping a reusable plugin.
- **Scope mode** → UIkit must style only a region and leave the rest of the page
  (and its base HTML elements) alone.

For a standalone page you fully control, you need neither — the default `uk-`
build is fine.
