/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    // Drop the unused 3840w (no real device exceeds ~5K), add 1536w so the
    // retina-2x sweet spot for our max-w-3xl (768px CSS) layouts is served
    // exactly instead of over-fetching to 1920w.
    deviceSizes: [640, 750, 828, 1080, 1200, 1536, 1920, 2048],
  },
};
