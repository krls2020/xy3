# Archetype: Pricing page

Focused band + 3 tier cards + comparison table. Distilled from a real UIkit-3
pricing page (structure only).

## Principles at work

- Whole band in **`uk-container-small`** (focus, §4).
- 3 tiers: `uk-child-width-1-3@m uk-grid-match` so heights match; each is a
  `uk-card uk-card-hover uk-flex uk-flex-column` with the body `uk-flex-1` so the
  **footer button pins to the bottom** (§6).
- CTA is a **full-width** `uk-button-primary uk-width-1-1`.
- Emphasize the featured tier by scale/position or `uk-card-primary` (not just color).
- Comparison table below highlights a column with `uk-background-muted`.

## Skeleton

```html
<section class="uk-section uk-section-muted">
  <div class="uk-container uk-container-small">

    <div class="uk-text-center uk-margin-large-bottom">
      <h1 class="uk-heading-small">Pricing</h1>
      <p class="uk-text-lead uk-text-muted uk-width-3-5 uk-margin-auto">Subtitle.</p>
    </div>

    <div class="uk-child-width-1-3@m uk-grid-match uk-grid-small" uk-grid
         uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 100">

      <div>
        <div class="uk-card uk-card-default uk-card-hover uk-flex uk-flex-column">
          <div class="uk-card-header uk-text-center">
            <h3 class="uk-card-title">Starter</h3>
            <div class="uk-text-large">$9<span class="uk-text-meta">/mo</span></div>
          </div>
          <div class="uk-card-body uk-flex-1">
            <ul class="uk-list uk-list-divider"><li>Feature</li><li>Feature</li></ul>
          </div>
          <div class="uk-card-footer">
            <a href="#" class="uk-button uk-button-primary uk-width-1-1">Choose</a>
          </div>
        </div>
      </div>

      <!-- Featured tier: emphasize with uk-card-primary -->
      <div>
        <div class="uk-card uk-card-primary uk-card-hover uk-flex uk-flex-column">
          <div class="uk-card-header uk-text-center">
            <h3 class="uk-card-title">Pro</h3>
            <div class="uk-text-large">$29<span class="uk-text-meta">/mo</span></div>
          </div>
          <div class="uk-card-body uk-flex-1">
            <ul class="uk-list uk-list-divider"><li>Everything in Starter</li><li>Feature</li></ul>
          </div>
          <div class="uk-card-footer">
            <a href="#" class="uk-button uk-button-primary uk-width-1-1">Choose</a>
          </div>
        </div>
      </div>

      <div>
        <div class="uk-card uk-card-default uk-card-hover uk-flex uk-flex-column">
          <div class="uk-card-header uk-text-center">
            <h3 class="uk-card-title">Team</h3>
            <div class="uk-text-large">$99<span class="uk-text-meta">/mo</span></div>
          </div>
          <div class="uk-card-body uk-flex-1">
            <ul class="uk-list uk-list-divider"><li>Everything in Pro</li><li>Feature</li></ul>
          </div>
          <div class="uk-card-footer">
            <a href="#" class="uk-button uk-button-primary uk-width-1-1">Contact</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Comparison table: highlight one column with uk-background-muted -->
<section class="uk-section uk-section-default">
  <div class="uk-container uk-container-small">
    <table class="uk-table uk-table-divider">
      <thead><tr><th class="uk-width-2-5"></th><th class="uk-width-1-5">Starter</th>
        <th class="uk-width-1-5 uk-background-muted">Pro</th><th class="uk-width-1-5">Team</th></tr></thead>
      <tbody>
        <tr><td>Feature</td><td><span uk-icon="check"></span></td>
          <td class="uk-background-muted"><span uk-icon="check"></span></td><td><span uk-icon="check"></span></td></tr>
      </tbody>
    </table>
  </div>
</section>
```
