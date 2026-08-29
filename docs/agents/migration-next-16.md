# Next migration plan: 12 → 16

This document replaces `migration-next-13.md`. **Target the latest Next 16.3.3** — do not stage through 13, 14, or 15.

## Picking up this work

If you're an agent reading this fresh, the relevant ancestors are:

- `docs/agents/typescript.md` — project TypeScript conventions: normalize at the read site, no `@ts-ignore`, the gray-matter `draft: boolean` pattern in `lib/api.ts`.
- `AGENTS.md` — validation rules: `yarn validate` (lint + typecheck) after any TS/JS change; do not silence type errors. Reference validation rules apply to migration work too.
- The audit summary in the conversation history that produced this doc — key perf baselines and the safe-now PR that deployed them. Pre-migration LCP on `/` was 50–250 ms (synthetic, localhost), and is now ~50–80 ms. The big remaining wins are the ones in the Goal section below.

## Where the project is now (as of 2026-08-29)

- **Versions**: Next 12.3.0, React 18.2.0, TypeScript 4.7.4, Tailwind 3.1.4. Node version unrestricted.
- **Code already merged** (the safe-now PR) and live on the production site:
  - `priority` on the first gallery cover image and on the post-page cover.
  - `prefetch={false}` on gallery post-preview Links (suppresses the `react-markdown` chunk on `/`).
  - Trimmed favicon links in `components/meta.tsx` (1 apple-touch-icon + 1 favicon.ico + manifest). Dropped the 404 `/favicon/feed.xml`.
  - `font-display: swap` on `@font-face` and a `<link rel="preload">` for the regular Basier woff2 from `pages/_document.tsx`.
  - `next-themes` `ThemeProvider` removed from `pages/_app.tsx`. Tailwind's default media-query dark mode still applies.
  - `next.config.js` created with `images.deviceSizes: [640, 750, 828, 1080, 1200, 1536, 1920, 2048]` (drops 3840w, adds 1536w for retina-2x on `max-w-3xl` containers).
  - Dead code purged: `components/alert.tsx`, `components/date-formatter.tsx`, `components/section-separator.tsx`, `interfaces/author.ts`, `lib/constants.ts:EXAMPLE_PATH`, `lib/constants.ts:CMS_NAME`.
  - `framer-motion` uninstalled (`yarn remove framer-motion`); tree-shaken-out previously but now gone from `package.json` + `yarn.lock`.
  - `pages/posts/[slug].tsx` no longer fetches the unused `author` field from frontmatter.
- **Scripts in `package.json`**:
  - `yarn dev` (next), `yarn build` (next build), `yarn start` (next start).
  - `yarn lint` (next lint), `yarn lint:fix`, **`yarn typecheck` (tsc --noEmit)**, **`yarn validate` (yarn lint && yarn typecheck)**.
- **Pages** (current): `pages/_app.tsx`, `pages/_document.tsx`, `pages/index.tsx`, `pages/posts/[slug].tsx`. 12 markdown posts in `_posts/`.
- **Components in active use**: `alert`, `container`, `cover-image`, `footer`, `header`, `intro`, `layout`, `markdown-styles.module.css`, `meta`, `post-body`, `post-footer`, `post-gallery`, `post-header`, `post-preview`, `post-title`. (`alert.tsx` was deleted in the safe-now PR; the name is listed here from history only — the file is gone.)
- **Tests / typecheck**: `yarn validate` passes; `tsc --noEmit` is clean; no test framework is installed.
- **Deployment**: Vercel (Next.js, not self-hosted). Vercel default Node is 22.x for current deploys. `Cache-Control: s-maxage=10, stale-while-revalidate` is set automatically by the ISR `revalidate: 10` config in `getStaticProps`.
- **Speed Insights**: not yet installed. The user is deferring until 16 lands; v2 of `@vercel/speed-insights` requires `next >= 13` and v1.x is the only option that works on Next 12.
- **Outstanding TODO** (this migration):

The remaining steps are target-version-specific and are in §Migration steps below.

## Goal

Move stuarttettdotcom from Next 12.3.0 (Pages Router) to Next 16.3.3 (App Router) with React Server Components, primarily to eliminate the `react-markdown` + `remark` + `rehype` + `micromark` chunk from any page that doesn't actually render a post body. Today that chunk is **335 KB raw / ~80 KB gzipped** and currently only enters the client's pipeline when a user clicks into `/posts/[slug]` — but the safe-now `prefetch={false}` only suppresses it on `/`; it still ships whenever any Link prefetches a post page. **Server-rendering the post body removes the prefetch entirely.**

Secondary wins:

- `next/font/local` for Basier with auto-generated metric-matched fallback — eliminates the residual CLS from `font-display: swap`.
- App Router with viewport-aware `next/link` prefetch — drops the manual `prefetch={false}` workaround in `components/post-preview.tsx`.
- TurboPack default in 16 — faster `yarn build` with no extra config (`next.config.js` has no `webpack:` function, so the default works).
- `images.minimumCacheTTL` jumps to **4 hours** by default in 16 (was 60 s). Passive real-user win on repeat visits.
- `next/legacy/image` is finally deprecated; move from `next/future/image` to plain `next/image` (which has had the same API since 13).

## Constraints (do not violate)

- The site continues to read posts from `_posts/*.md` via `gray-matter`. **Do not** move posts into MDX or a CMS during this migration.
- Twelve posts is the corpus; **no data migration**. `lib/api.ts` becomes a server-side function returning the parsed posts; everything else follows.
- Tailwind `darkMode` stays `media`-driven. **Do not** add `next-themes` back.
- **Do not** re-add `framer-motion` (uninstalled 2026-08-29 as part of the safe-now cleanup).
- **Do not** introduce App Router middleware. If proxy behavior is ever needed, use the renamed `proxy` API, not the old `middleware`.
- **Do not** opt out of TurboPack. If a build fails with TurboPack, fix the root cause — don't switch back to webpack with `--webpack`.
- **Do not** re-introduce `next lint`. The CLI is gone in 16; use `eslint .` directly.

## Stack deltas to expect

| Item | Today (12.3.0) | Target (16.3.3) | Action |
|---|---|---|---|
| Next.js | `^12.3.0` | `16.3.3` | Bump, audit peerDeps |
| React | `18.2.0` | `18.2.x` (or 19.0.x) | OK; 18.2 still satisfies 16's peer |
| TypeScript | `4.7.4` | `5.1+` | Bump |
| Node (CI/local) | varies | `≥ 20.9.0` | Document; Vercel default = 22 |
| ESLint runner | `next lint` | `eslint .` | Swap scripts (see step 4) |
| Image config | explicit `deviceSizes` | keep + add `formats: ['image/avif', 'image/webp']` | Build out next.config.js |
| `@vercel/speed-insights` | not installed | `^2.x` | Install + wire in `app/layout.tsx` |

## Migration steps (do these in order)

### 1. Toolchain baseline

- Verify Node 20.9+ locally: `node --version`. Pin via `.nvmrc` or `engines.node`.
- Update `package.json` `engines.node` to `">=20.9"`.
- Run `yarn install` against `next@16.3.3` (`yarn add next@16.3.3`); let yarn resolve the new peer tree.
- Bump `typescript` to `5.1+` (`yarn add -D typescript@^5`).
- Bump `@types/react`, `@types/react-dom`, `@types/node` to current.

### 2. Pre-flight audit of code that the codemod won't catch

Before any structural changes:

- **Run** `npx @next/codemod@canary next-async-request-api .` and read every diff. It targets sync `cookies()` / `headers()` / `draftMode()` / `params` / `searchParams`. The site doesn't currently use any of these, but the codemod also flags codepaths it can mechanically rewrite — confirm zero changes.
- **Search** for `middleware.ts` in the project (should be none).
- **Search** for `next lint` in scripts / docs. There's one in the safe-now `package.json` and one in `AGENTS.md`. Both get fixed in step 4 *before* the Next bump so we don't break `yarn validate` on the new version.
- **Search** for `next/legacy/image`. None today — confirm.
- **Confirm** `next.config.js` has no `webpack:` function, `experimental.turbopack*` config, or `images.domains` (deprecated 16). The site has only `images.deviceSizes`, which is still valid.

### 3. Replace the lint script (pre-empt 16's `next lint` removal)

This step runs *before* the Next bump to keep `yarn validate` working through the transition.

In `package.json`:

```diff
- "lint": "next lint",
- "lint:fix": "next lint --fix"
+ "lint": "eslint --ext .ts,.tsx .",
+ "lint:fix": "eslint --ext .ts,.tsx --fix ."
```

Then update or rename the safe-now `validate`/`typecheck` invocations in `AGENTS.md` and `docs/agents/typescript.md` to reflect the direct eslint call. The script chain itself (`yarn lint && yarn typecheck`) stays correct.

### 4. Bump Next, validate

`yarn add next@16.3.3`. Then:

- `yarn lint` — must pass (now calling `eslint .`).
- `yarn typecheck` — must pass.
- `yarn build` — must succeed *with TurboPack default*. If the project fails to build because of an explicit `webpack:` function in `next.config.js` (none here), or some legacy sass-loader syntax (none here), don't reach for `--webpack`; fix the underlying issue.

### 5. Move `pages/` to `app/` (App Router cutover)

Translation table for this site:

| File | New location |
|---|---|
| `pages/_app.tsx` | `app/layout.tsx` (root layout) |
| `pages/_document.tsx` | `app/layout.tsx` (root) — `<link rel="preload">` font handled by `next/font/local` |
| `pages/index.tsx` | `app/page.tsx` |
| `pages/posts/[slug].tsx` | `app/posts/[slug]/page.tsx` |

The root `app/layout.tsx` becomes:

- The `<html>`/`<body>` shell.
- The `<Meta />` content as a static `<head>` set (or, better, `generateMetadata` for OG/Twitter cards).
- The font registration from `next/font/local` (see step 7).

### 6. Server Components: kill the `react-markdown` client chunk

`PostBody` is the single biggest win. Make it a Server Component:

- Move `components/post-body.tsx`'s logic into `lib/remark/parsePost.ts` (a server-only helper) that returns JSON-structured nodes ready for server-side React rendering, OR keep `react-markdown` and render it in the App Router page.
- **Do not** add `"use client"` to `PostBody`. Its `components` prop is a pure render transform (the inline `p` rewrite that strips `<p>` wrappers around `<img>`); there's no event handler or hook in it. As a Server Component, `react-markdown` no longer participates in client hydration.
- Confirm with `yarn build`: the `chunks/858-*.js` (335 KB raw) chunk is no longer referenced in the build manifest of the index route.

If a hand-removal is needed (the inline `p` rewrite uses `node.children[0]` on a hast node — fine for Server Components): keep it.

### 7. `next/font/local` — drop the manual `@font-face` chain and the `_document` preload

Currently:

- `styles/index.css` declares `@font-face` twice with manual `font-display: swap`.
- `pages/_document.tsx` preloads the regular `.woff2`.
- `next.config.js` doesn't touch fonts.

Replace with:

```ts
// app/layout.tsx
import localFont from 'next/font/local';

const basier = localFont({
  src: [
    { path: '../public/fonts/basier-square/basiersquare-regular-webfont.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/basier-square/basiersquare-semibold-webfont.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-basier',
  display: 'swap',
  // `adjustFontFallback: 'Arial'` (or a measured approximate) is the thing
  // that closes the swap-CLS window. Validate with field CLS data.
});

// in <body>: <main className={basier.variable}>
```

Drop from `styles/index.css`:

- Both `@font-face` blocks.
- The `:root { font-family: 'Basier'; … }` rule (or replace with `:root { font-family: var(--font-basier), ui-sans-serif, system-ui, … }`).

Drop from `app/layout.tsx`:

- The manual `<link rel="preload">` for `basiersquare-regular-webfont.woff2`.

`next/font` hashes the URLs, self-preloads, and (with `adjustFontFallback`) sets `size-adjust` / `ascent-override` / `descent-override` / `line-gap-override` automatically. That closes the CLS gap.

### 8. `next/image` cleanup

- Replace every `import Image from 'next/future/image'` with `import Image from 'next/image'`. The Next 16 `next/image` has the same prop surface (and is what `next/future/image` became).
- Keep the `priority` / `sizes` work from the safe-now PR.

### 9. `next.config.js` for 16

```js
/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1536, 1920, 2048],
    formats: ['image/avif', 'image/webp'],
    // minimumCacheTTL defaults to 14400 (4h) in 16; only override if a
    // measurement shows the longer TTL is hurting freshness somewhere.
  },
  typedRoutes: true, // optional but recommended for App Router
};
```

Use `images.remotePatterns` (not the deprecated `images.domains`) if any post content ever pulls images from third-party CDN URLs.

### 10. `@vercel/speed-insights@^2`

`yarn add @vercel/speed-insights@^2`. In `app/layout.tsx`:

```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
// …
return (
  <html lang="en">
    <body className={basier.variable}>
      {children}
      <SpeedInsights />
    </body>
  </html>
);
```

The 75p real-user LCP/CLS/INP numbers from Vercel become the source of truth. Lighthouse is for catching regressions, not for measuring success.

### 11. Verify

- `yarn lint && yarn typecheck && yarn build` — must be clean.
- `yarn start`, hit `/` and a `/posts/<slug>` in a real Chrome at 1280 × 800 desktop and 375 × 812 mobile.
- Hit `/` and a post with **DevTools throttling** set to "Fast 3G" + 4× CPU to estimate a realistic RTT.
- Confirm in DevTools Network:
  - `/` does **not** load the post-page JS chunk.
  - First-load JS for `/` is ≤ 15 KB.
  - First-load JS for `/posts/[slug]` is ≤ 20 KB.
  - Fonts ship hashed URLs from `next/font`.
  - The LCP image on `/` (Tusk Legacy cover) is requested at the smallest device size the viewport needs (`?w=828` for a 1200-wide desktop, `?w=640` for a phone).
- Run Vercel's `@vercel/speed-insights` integration locally via its CLI if you want lab data before deploying; the field data is the real verification.

## What NOT to do

- Don't reproduce the safe-now `prefetch={false}` workaround in `components/post-preview.tsx`. `next/link` in App Router uses viewport-aware prefetch by default — the hack is no longer needed and adds dead complexity. Drop it on the way through.
- Don't reintroduce `next-themes`, `framer-motion`, `react-markdown` as a client component, the manual `@font-face` block, or the `next/legacy/image` alias.
- Don't migrate posts to MDX in the same PR — it conflates scope and makes the regression diff unreadable.
- Don't opt out of TurboPack with `--webpack`. Defaults are defaults for a reason; if a build fails, fix it.
- Don't disable the `next/image` quality default `[75]`. It's already what the safe-now config uses.
- Don't enable the **React Compiler** in this PR. Tune for render-measured rewrites later, not speculatively.
- **Don't** migrate Vercel-deploy class infra (RSC streaming UX, partial prerendering, etc.) — out of scope for a portfolio site.

## Verification targets (post-migration field-data)

- `/` first-load JS ≤ **15 KB** (today: ~84 KB).
- `/posts/[slug]` first-load JS ≤ **20 KB** (today: ~177 KB).
- LCP element on `/` paint-time = `?w=828` or smaller on a 1280 × 800 desktop display.
- Lighthouse Best Practices ≥ 95 (the bigger wins are visible in field data, not Lighthouse).
- Recheck real-user CWV in the Vercel dashboard once `@vercel/speed-insights@^2` is in production. Watch for any 75p regression on LCP, and any CLS regression once `next/font/local` is in (the CLS should *drop*, not rise, with the metric-matched fallback).
- After a week of field data, eliminate the `prefetch={false}` from `<Link>` calls if you do mechanical port of pre-existing logic — but verify removal *did not* introduce post-page JS prefetch back into the home page.

## Effort estimate

Two half-days given the codebase is small (12 posts, ~12 components, no API surfaces):

- ~3 h on dependency bumps, codemods, config and lint script swap.
- ~3 h on the App Router cutover (file moves, layouts, layout-level metadata).
- ~2 h on `PostBody` Server Component migration + the `next/font/local` switch.
- ~1 h on `yarn build` and the post-migration verification (Network tab, throttled profiles, speed-insights sample).

If you hit React 19 RC-related surprises, add 2 h. Total — comfortably a one-day focused migration.
