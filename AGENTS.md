# AGENTS.md

A Next.js 12 + TypeScript personal site reading posts from `_posts/*.md` via gray-matter and styled with Tailwind.

## Validation

After any TypeScript or JavaScript change, run `yarn validate` (lint + typecheck) and fix every reported error before declaring complete. A passing `yarn lint` alone is not sufficient — eslint does not invoke the TypeScript compiler, and `next dev` only compiles routes that have been requested.

`yarn build` is not required for typical changes. Run it when the change touches build configuration, environment variables, static generation, or deployment behavior.

## Deeper reference

- TypeScript conventions, gray-matter boundary handling, and what not to silence — see [`docs/agents/typescript.md`](docs/agents/typescript.md).
