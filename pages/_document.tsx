import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Preload the Basier regular weight so it lands before first paint,
            avoiding both FOIT (no `font-display: swap` until the font is
            fetched) and a late-swap CLS during the LCP window.
            The bold weight is used in a handful of titles only — preload
            omitted to keep this from competing with the LCP image fetch. */}
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/basier-square/basiersquare-regular-webfont.woff2"
          rel="preload"
          type="font/woff2"
        />
      </Head>
      <body className="font-sans dark:bg-army-green-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
