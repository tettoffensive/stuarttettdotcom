import Head from 'next/head';
import { NAME, HOME_OG_IMAGE_URL } from '../lib/constants';

function Meta() {
  return (
    <Head>
      {/* Single ico + single apple-touch-icon; the previous 9 Apple variants
          and 3 PNG favicons caused early DNS/preconnect amplification. */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/favicon/apple-icon-180x180.png" sizes="180x180" />
      <link rel="manifest" href="/favicon/manifest.json" />
      <meta content="#475E32" name="theme-color" />
      <meta content="nopin" name="pinterest" />
      <meta content="/ms-icon-144x144.png" name="msapplication-TileImage" />
      <link href="/favicon/feed.xml" rel="alternate" type="application/rss+xml" />
      <meta
        content={`A portfolio website for ${NAME}.`}
        name="description"
      />
      <meta content={HOME_OG_IMAGE_URL} property="og:image" />
    </Head>
  );
}

export default Meta;
