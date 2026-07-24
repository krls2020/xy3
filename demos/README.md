# Drop premium UIkit demo pages here

Save the pages as plain `.html` (browser "Save Page As" or view-source is enough —
only the markup is read) and run:

    node tools/mine-layouts.mjs demos

The miner reduces each page to `tag + uk-* classes + uk-* attributes` before it counts
anything. Text, images, colours, custom classes and stylesheets are discarded in the
first step, so what it reports is structure — which section modifiers alternate, which
class bundles recur, what nests inside what. No commercial copy or visual design is
read, stored or reproduced.

What comes out feeds the "Layout" section of `.claude/skills/uikit/SKILL.md`.

Until pages are here, that section is derived from the UIkit documentation site's own
source, which is a real UIkit build but only two pages — a thin corpus.
