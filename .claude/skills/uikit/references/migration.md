# Migration & version notes

This skill targets **UIkit 3.x** (built against 3.25). UIkit 3 is stable and
mature — markup rarely breaks between minor releases. This file lists the changes
most likely to make an agent emit *stale* markup. For the full history see
getuikit.com/docs/migration.

## Check the version first

Behavior and available classes depend on the loaded UIkit version. If something
in a cheat-sheet doesn't work, confirm which version is on the page
(`UIkit.version` in the console, or the CDN URL). Pin a version in production
rather than `@3`.

## Notable recent changes (newest first)

| Since | Change to remember |
|---|---|
| **3.25** | **Accordion** style moved to a modifier. A styled accordion now needs `.uk-accordion-default` on the list; without it the accordion is unstyled. Less vars/hooks renamed `@accordion-*` → `@accordion-default-*`. |
| **3.15** | **Drop / Dropdown / Navbar dropdown** reworked (positioning via `pos`, new animation options). Prefer the current markup in `components/dropdown.md` / `components/drop.md` / `components/navbar.md`. |
| **3.15** | **Navbar Dropbar** behavior changed — see `components/dropbar.md`. |
| various | Assorted Less/SCSS **variable renames**. If you maintain a custom theme, diff your `@*`/`$*` overrides against the current source after upgrading. |

If you're generating **new** markup, just follow the current cheat-sheets — they
reflect the latest source, so you won't hit these.

## Coming from UIkit 2

UIkit 3 is a full rewrite; v2 markup is **not** compatible. Key shifts:

- Interactive components moved from data-attributes/JS init to the unified
  **`uk-*` attribute** system (`javascript.md`).
- Grid/layout reworked around the `uk-grid` attribute + Width/child-width classes
  (`layout-system.md`).
- The icon **font** was replaced by the SVG icon library (`icons.md`).

Treat any v2 example you find online as outdated — rebuild from the v3
cheat-sheets in `components/`.
