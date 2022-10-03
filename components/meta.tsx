import Head from 'next/head';
import { NAME, HOME_OG_IMAGE_URL } from '../lib/constants';

function Meta() {
  return (
    <Head>
      <link href="/favicon/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
      <link href="/favicon/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
      <link href="/favicon/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
      <link href="/favicon/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
      <link href="/favicon/apple-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
      <link href="/favicon/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
      <link href="/favicon/apple-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
      <link href="/favicon/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
      <link href="/favicon/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
      <link href="/favicon/android-icon-192x192.png" rel="icon" sizes="192x192" type="image/png" />
      <link href="/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
      <link href="/favicon/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png" />
      <link href="/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
      <link href="/favicon/manifest.json" rel="manifest" />
      <meta content="#475E32" name="msapplication-TileColor" />
      <meta content="#475E32" name="theme-color" />
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
