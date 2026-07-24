# Utility classes (text, background, effects, inverse)

The non-layout utility layer. Compose these instead of writing CSS. (Spacing,
grid, flex, width live in `layout-system.md`.)

## Text — `components/text.md`

| Group | Classes |
|---|---|
| Size / role | `.uk-text-lead` `.uk-text-meta` `.uk-text-small` `.uk-text-large` `.uk-text-default` |
| Weight / style | `.uk-text-light` `.uk-text-normal` `.uk-text-bold` `.uk-text-lighter` `.uk-text-bolder` `.uk-text-italic` |
| Transform | `.uk-text-capitalize` `.uk-text-uppercase` `.uk-text-lowercase` |
| Color | `.uk-text-muted` `.uk-text-emphasis` `.uk-text-primary` `.uk-text-secondary` `.uk-text-success` `.uk-text-warning` `.uk-text-danger` |
| Background (gradient text) | `.uk-text-background` |
| Align (responsive) | `.uk-text-left` `.uk-text-right` `.uk-text-center` `.uk-text-justify` + `@s @m @l @xl` |
| Wrapping | `.uk-text-nowrap` `.uk-text-truncate` `.uk-text-break` |
| Vertical align | `.uk-text-top` `.uk-text-middle` `.uk-text-bottom` `.uk-text-baseline` |
| Decoration | `.uk-text-decoration-none` `.uk-text-stroke` |

## Background — `components/background.md`

- Color: `.uk-background-default` `-muted` `-primary` `-secondary` (the last two
  are dark → add `.uk-light`).
- Image sizing: `.uk-background-cover` `.uk-background-contain`
  `.uk-background-norepeat`.
- Position: `.uk-background-top-left` … `.uk-background-center-center` … (9-grid).
- Responsive image toggle: `.uk-background-image@m` (only load/show bg image from
  a breakpoint — good for perf on mobile).
- Fixed: `.uk-background-fixed` (parallax-like). Blend: `.uk-background-blend-*`
  (multiply, screen, overlay, …).

## Utility grab-bag — `components/utility.md`

| Group | Classes |
|---|---|
| Box shadow | `.uk-box-shadow-small` `-medium` `-large` `-xlarge`; `.uk-box-shadow-bottom`; hover: `.uk-box-shadow-hover-*` |
| Border radius | `.uk-border-rounded` `.uk-border-circle` `.uk-border-pill` |
| Object-fit (media) | `.uk-object-cover` `.uk-object-contain` `.uk-object-fill` `.uk-object-none` `.uk-object-scale-down` + position `.uk-object-*` |
| Display | `.uk-display-block` `.uk-display-inline` `.uk-display-inline-block` |
| Float + clear | `.uk-float-left` `.uk-float-right` `.uk-clearfix` |
| Overflow | `.uk-overflow-hidden` `.uk-overflow-auto` (scrollable panel) |
| Inline (overlay context) | `.uk-inline` `.uk-inline-clip` (wrap media so overlays/position anchor to it) |
| Blend modes | `.uk-blend-multiply` `-screen` `-overlay` … |
| Misc | `.uk-dropcap` `.uk-logo` `.uk-disabled` `.uk-drag` `.uk-preserve-width` `.uk-transform-origin-*` `.uk-resize` |

## Overlay — `components/overlay.md`

Overlay a panel on media. Wrap the image in `.uk-inline`, then position an
`.uk-overlay` element inside.

```html
<div class="uk-inline">
    <img src="image.jpg" alt="">
    <div class="uk-overlay uk-overlay-default uk-position-bottom">
        <p>Caption</p>
    </div>
</div>
```

`.uk-overlay-default` (light) / `.uk-overlay-primary` (dark, add `.uk-light`).

## Transition (hover) — `components/transition.md`

Transitions animate on hover of a **parent** carrying `.uk-transition-toggle`.

```html
<div class="uk-transition-toggle" tabindex="0">
    <img src="image.jpg" alt="">
    <div class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary"></div>
</div>
```

Effects: `.uk-transition-fade`; slides `.uk-transition-slide-{top,bottom,left,right}[-small|-medium]`;
`.uk-transition-scale-up` / `-scale-down`. Add `tabindex="0"` so it also triggers
on keyboard focus.

## Animation (on load / scroll) — `components/animation.md`

`.uk-animation-fade` `-scale-up` `-scale-down` `-shake` `-kenburns`;
slides `.uk-animation-slide-{top,bottom,left,right}[-small|-medium]`;
modifiers `.uk-animation-reverse` `.uk-animation-fast`. Combine with
`uk-scrollspy` to animate elements as they enter the viewport
(`components/scrollspy.md`).

## Inverse — dark/light sections — `components/inverse.md`

UIkit ships two style sets so components stay legible on any background:

- Put **`.uk-light`** on a container with a **dark** background → text/components
  render light.
- Put **`.uk-dark`** on a **light** container placed over e.g. a photo → renders
  dark.
- `.uk-preserve-color` on a child opts it out of inversion (e.g. keep a button's
  own colors).

```html
<div class="uk-section uk-section-secondary uk-light">
    <div class="uk-container"><h2>Readable on dark</h2></div>
</div>
```

Always use inverse instead of hand-recoloring text on dark backgrounds.

## Divider — `components/divider.md`

`<hr>` is styled by default. Modifiers: `.uk-divider-icon` (centered icon),
`.uk-divider-small`, `.uk-divider-vertical`.

## Quick reference — highest-frequency utilities

```
.uk-margin  .uk-margin-large-top  .uk-padding  .uk-padding-small
.uk-text-lead  .uk-text-center  .uk-text-muted  .uk-text-bold
.uk-background-muted  .uk-light
.uk-box-shadow-medium  .uk-border-rounded  .uk-border-circle
.uk-width-1-2@m  .uk-child-width-1-3@m  .uk-flex  .uk-flex-middle
.uk-visible@m  .uk-hidden@s
```
