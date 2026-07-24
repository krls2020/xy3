# Full-page layout principles

How professionals compose **whole pages** with UIkit — the cross-section
"grammar" that the component docs don't teach. Distilled by skeletonizing real
UIkit-3 commercial/template pages (structure only; no design or content copied).
Pair with the archetype skeletons in this folder.

## 1. A page is a vertical stack of `uk-section` bands

Each band = `<section class="uk-section uk-section-*"><div class="uk-container">…`.
Everything lives inside a container; the section owns the background + vertical
padding.

## 2. Alternate section styles for rhythm

Observed cadence on real landing pages:
`default → default → secondary(dark) → cover(dark) → default → muted → secondary(dark footer)`.
Rules of thumb:
- `-default` and `-muted` alternate for normal content bands (muted = subtle grey).
- `-secondary` / `-primary` (dark) or a `uk-cover-container` band breaks the page
  up — always add `.uk-light` on dark bands.
- Never place two identical-style bands back to back; alternate.

## 3. Section size is the vertical-rhythm dial

`.uk-section-{xsmall|small|(default)|large|xlarge}` sets band height. Big moments
(hero, testimonials) → `-large`/`-xlarge`; utility bands (logo cloud, sub-CTA) →
`-small`/`-xsmall`. Fuse two bands into one visual block with
`.uk-padding-remove-top` / `-bottom` on the adjacent one.

## 4. Container width = emphasis

- Full `.uk-container` — wide feature/card grids.
- `.uk-container-small` / `.uk-container-xsmall` — **focus** a band: pricing,
  centered intros, logo clouds, hero copy, article body. Narrower = more focused.
- `.uk-container-expand` — app/dashboard chrome that should span the viewport.
- Center a lone text block inside a wide container with `.uk-margin-auto` on a
  `.uk-width-3-5`/`-4-5@m` element.

## 5. Column cadence down the page

Column counts *decrease in cell size / increase in count* as you scroll:
`hero 1-col → benefit rows 1-2@l → feature/stat grids 1-3@m → logo cloud 1-4→expand@m → footer 1-2@m + 1-6@m`.
A predictable rhythm, not random. Dashboards go denser: stat row
`1-2 · 1-4@l · 1-5@xl`.

## 6. Cards vs plain vs media — pick by content type

- **`uk-card`** — discrete boxed items: pricing tiers, blog/news cards, dashboard
  widgets, feature tiles. Common combo: `uk-card-default uk-card-hover`, and for
  equal heights put the grid on `.uk-grid-match`.
- **Plain `<div>` columns (no card)** — alternating **media + text benefit rows**;
  `uk-grid` + `uk-child-width-1-2@l` + `.uk-flex-middle`, flip image order per row
  with `.uk-flex-first@l` / order utilities.
- **`uk-card` as flex-column** — when a card needs a footer pinned to the bottom
  (pricing): `uk-card uk-flex uk-flex-column`, body `.uk-flex-1`, footer holds a
  full-width `.uk-button-primary.uk-width-1-1`.

## 7. Dark bands use inverse, never hand-recolored text

Dark = `uk-section-secondary`/`-primary` or a `uk-cover-container` with an
overlay, **always** with `.uk-light`. Footers are typically the darkest band
(`uk-section-secondary`).

## 8. Hero anatomy

```
uk-cover-container (uk-light, give it a height or uk-height-viewport)
├─ media: <img/video uk-cover>   (+ uk-overlay-primary uk-position-cover for contrast)
├─ transparent navbar overlaid   (uk-navbar-transparent, inside the same band)
└─ uk-container(-small) centered copy (uk-flex uk-flex-middle / uk-position-center)
   ├─ uk-heading-* + uk-text-lead
   └─ button pair: uk-button-default (ghost) + uk-button-primary
```
Add motion: `uk-parallax` on the media, `uk-scrollspy` on the copy.

## 9. Section-header convention

Before a grid, a centered intro band:
`uk-container-xsmall uk-text-center` → `uk-heading-*` + `uk-text-muted` lead
(often `uk-margin-auto` on a `uk-width-3-5`), then the grid with
`uk-margin-large-top`.

## 10. Scroll choreography

Grids animate their cells in on scroll:
`uk-grid` + `uk-scrollspy="target: > *; cls: uk-animation-slide-bottom-small; delay: 100"`,
or per-child `uk-scrollspy-class="uk-animation-slide-left-small"` for staggered
left/right reveals. Keep animations `-small` and subtle.

## 11. Social-proof kit

Three recurring bands: (a) **testimonials** — a `uk-slider`/`uk-slideshow` over a
dark `uk-cover-container` (`uk-section-xlarge uk-light`); (b) **logo cloud** —
`uk-section-small uk-section-muted` + `uk-container-small` +
`uk-child-width-1-4 uk-child-width-expand@m`; (c) **stats** — `uk-child-width-1-3@m`
+ `uk-grid-large`, big numbers with `uk-text-muted` labels.

## 12. Spacing discipline

Inter-section spacing comes from `uk-section-*` size + `uk-margin-large`/`-medium`
only. No inline styles, ever.

---

**How to build a full page:** choose the archetype (marketing-landing, pricing,
feature-showcase, social-proof, content-index, dashboard) → open its skeleton in
this folder → assemble bands using the rhythm above → fill in real content. For a
single section's exact markup, use `../patterns/` and `../references/`.

*Generalized structural conventions observed across UIkit-3 template/commercial
pages (MIT-licensed sources); no proprietary design, image, or copy is reproduced.*
