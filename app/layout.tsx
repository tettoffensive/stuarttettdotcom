import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ReactNode } from 'react';
import Footer from '../components/footer';
import { HOME_OG_IMAGE_URL, NAME } from '../lib/constants';
import '../styles/index.css';

type Props = {
  children: ReactNode
}

// Swap from Basier Square (local) to Inter (Google Fonts, served at build
// time and self-hosted by Next). Two reasons:
//   1. The project font dir has no Medium (500) weight; 700 semibold was
//      the next step above body 400, and it visually dominates h3 at
//      body-size. Inter ships 500 cleanly.
//   2. Drop the manual woff2 hosting (public/fonts/basier-square/) —
//      next/font/google downloads at build and serves from the same
//      self-hosted, long-cache-hashed pipeline we relied on before.
//
// Weights [400, 500] are the requested set: body 400 (default), heading
// 500 (medium). No 700 is loaded; any `font-semibold` class will fall back
// to the closest available load (500) — there is currently one consumer
// (markdown h3) which this commit also flips to `font-medium`.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
  // next/font/google emits a metric-matched adjustment automatically;
  // adjustFontFallback is only configurable with next/font/local.
});

export const metadata = {
  description: `A portfolio website for ${NAME}.`,
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon/apple-icon-180x180.png',
  },
  manifest: '/favicon/manifest.json',
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export const viewport = {
  themeColor: '#475E32',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Non-standard meta tags Next's metadata API doesn't cover. */}
        <meta content="nopin" name="pinterest" />
        <meta content="/ms-icon-144x144.png" name="msapplication-TileImage" />
        <link href="/favicon/feed.xml" rel="alternate" type="application/rss+xml" />
      </head>
      <body className="font-sans dark:bg-army-green-dark">
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
