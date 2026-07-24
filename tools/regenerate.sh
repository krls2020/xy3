#!/usr/bin/env bash
# Rebuild everything the skill knows from a fresh checkout of UIkit.
# Run this when UIkit releases — nothing in the skill is hand-maintained.
#
#   tools/regenerate.sh [workdir]
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORK="${1:-${TMPDIR:-/tmp}/uikit-sources}"
SKILL="$ROOT/.claude/skills/uikit"

mkdir -p "$WORK"
for repo in uikit uikit-site; do
  if [ -d "$WORK/$repo/.git" ]; then
    echo "updating $repo"
    git -C "$WORK/$repo" fetch --depth 1 origin HEAD -q && git -C "$WORK/$repo" reset --hard FETCH_HEAD -q
  else
    echo "cloning $repo"
    git clone --depth 1 -q "https://github.com/uikit/$repo.git" "$WORK/$repo"
  fi
done

# build-index evaluates UIkit's bundle to read the real component registry, which
# needs a DOM. This is the only build-time dependency; nothing the skill ships needs it.
if [ ! -d "$ROOT/tools/node_modules/jsdom" ]; then
  echo "installing jsdom (build-time only)"
  (cd "$ROOT/tools" && npm install --silent --no-save jsdom)
fi

echo
node "$ROOT/tools/build-index.mjs"           "$WORK/uikit"      "$SKILL/index.json"
node "$ROOT/tools/build-examples.mjs"        "$WORK/uikit-site" "$SKILL/examples.json"
node "$ROOT/tools/build-theme.mjs"           "$WORK/uikit"      "$SKILL/theme.json"
node "$ROOT/tools/build-capability-map.mjs"  "$SKILL/index.json" "$WORK/uikit-site" "$SKILL/SKILL.md"

echo
echo "checking the result against the official examples — anything here is a"
echo "false positive to fix or a genuine bug in the docs:"
node "$ROOT/eval/calibrate.mjs" "$WORK/uikit-site"

if compgen -G "$ROOT/demos/*.html" > /dev/null; then
  echo
  echo "mining layout idioms from demos/"
  node "$ROOT/tools/mine-layouts.mjs" "$ROOT/demos"
fi
