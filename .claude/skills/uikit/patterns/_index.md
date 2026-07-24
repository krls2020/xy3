# UIkit composition patterns

Recipes that combine multiple components into complete, copy-pasteable page
sections — the "how to put it together" layer that sits on top of the
per-component cheat-sheets in `../references/components/`.

Distilled from UIkit's own documentation examples and component test pages.

| Pattern | Covers | File |
|---|---|---|
| Navigation | Responsive navbar, mobile off-canvas menu, sticky/transparent navbar, sidebar nav | `navigation.md` |
| Hero sections | Cover image/video heros, overlays, split hero, color hero | `hero-sections.md` |
| Cards & grids | Responsive card grids, matched heights, card variants, masonry, sidebar+main | `cards-and-grids.md` |
| Forms | Stacked / horizontal / grid forms, validation states, input icons, search | `forms.md` |
| Full-page scaffolds | Landing page, dashboard shell, article/docs layout | `page-scaffolds.md` |

## How to use these

1. Pick the scaffold or section that matches the goal.
2. Copy the markup, then swap in real content.
3. Adjust widths/breakpoints (`@s @m @l`) and section styles to taste.
4. For any single component's full option list, open its cheat-sheet in
   `../references/components/<name>.md`.

Every class and attribute in these patterns is taken from the official UIkit
source — they're safe to use verbatim.
