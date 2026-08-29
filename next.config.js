/** @type {import('next').NextConfig} */
module.exports = {
  // Generate type-safe `<Link href>` props from App Router routes; surfaces
  // route typos at build time. The Pages Router has been removed, so only
  // App Router routes are union-narrowed.
  typedRoutes: true,
  images: {
    // Drop the unused 3840w (no real device exceeds ~5K), add 1536w so the
    // retina-2x sweet spot for our max-w-3xl (768px CSS) layouts is served
    // exactly instead of over-fetching to 1920w.
    deviceSizes: [640, 750, 828, 1080, 1200, 1536, 1920, 2048],
    formats: ['image/avif', 'image/webp'],
    // Local image sources include query strings (?w=...&h=...&span=...) in
    // post frontmatter. Next 16 requires opt-in via `localPatterns`; without
    // this, build-time static prerender fails on every post page.
    localPatterns: [
      { pathname: '/assets/**' },
    ],
  },
};
