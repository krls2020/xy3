# Research: how to give an agent reliable UIkit ability

Phase 1 (evidence gathering) artifacts. Not the final deliverable.

- `tools/` — ground-truth extractors. Every `uk-*` name is derived from the UIkit
  source, never from memory: `dist/css/uikit.css` (literal selectors + `[class*=]`
  families), the LESS component manifests (`// Component/Sub-objects/Modifiers/States`
  headers), the JS bundle (runtime component registry incl. props/args), and
  `src/images/icons/*.svg`.
- `eval/` — measurement instrument: 15 common tasks + 12 long-tail/advanced tasks,
  a deterministic scorer (`score.mjs`) and a runner. `calib.mjs` scores the 481
  official docs examples to keep the scorer's false-positive rate honest.

Sources are cloned, not vendored:
  git clone --depth 1 https://github.com/uikit/uikit
  git clone --depth 1 https://github.com/uikit/uikit-site
