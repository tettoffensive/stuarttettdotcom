# AGENTS.md

A Next.js 16 + TypeScript personal site reading posts from `_posts/*.md` via gray-matter and styled with Tailwind.

## Validation

After any TypeScript or JavaScript change, run `yarn validate` (lint + typecheck) and fix every reported error before declaring complete. A passing `yarn lint` alone is not sufficient — eslint does not invoke the TypeScript compiler, and `next dev` only compiles routes that have been requested.

`yarn build` is not required for typical changes. Run it when the change touches build configuration, environment variables, static generation, or deployment behavior.

## Deeper reference

- TypeScript conventions, gray-matter boundary handling, and what not to silence — see [`docs/agents/typescript.md`](docs/agents/typescript.md).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
