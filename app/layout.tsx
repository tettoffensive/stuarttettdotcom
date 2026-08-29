import { ReactNode } from 'react';
import Footer from '../components/footer';
import { HOME_OG_IMAGE_URL, NAME } from '../lib/constants';
import '../styles/index.css';

type Props = {
  children: ReactNode
}

export const metadata = {
  // The description / og:image / RSS alternates below replace what used to
  // live in `components/meta.tsx`, which is deleted as part of this commit.
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
    <html lang="en">
      <head>
        {/* Font preload carried over from `pages/_document.tsx`. The next
            commit swaps this for `next/font/local` (which self-preloads and
            adds a metric-matched fallback that closes the swap-CLS gap). */}
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/basier-square/basiersquare-regular-webfont.woff2"
          rel="preload"
          type="font/woff2"
        />
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
