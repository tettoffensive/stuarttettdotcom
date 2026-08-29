import localFont from 'next/font/local';
import { ReactNode } from 'react';
import Footer from '../components/footer';
import { HOME_OG_IMAGE_URL, NAME } from '../lib/constants';
import '../styles/index.css';

type Props = {
  children: ReactNode
}

// next/font/local self-hashes the URLs (cache-friendly long-lived URLs),
// self-preloads the regular weight (closes the FOIT/LCP window), and with
// adjustFontFallback emits metric-matched ascent/descent/size-adjust
// overrides that close the swap-CLS gap. Replaces the manual @font-face
// blocks in styles/index.css and the <link rel="preload"> in the
// previous app/layout.tsx.
const basier = localFont({
  src: [
    {
      path: '../public/fonts/basier-square/basiersquare-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/basier-square/basiersquare-semibold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-basier',
  display: 'swap',
  // 'Arial' is the closest open-source fallback; for an exact metric match
  // pass a real measured value here. Field CLS data should confirm the
  // metric-matched fallback closes the swap-CLS window.
  adjustFontFallback: 'Arial',
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
    <html lang="en" className={basier.variable}>
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
      </body>
    </html>
  );
}
