import Link from 'next/link';
import Image from 'next/image';
import CoverImage from './cover-image';
import PostTitle from './post-title';

type Props = {
  title: string
  coverImage: string
  excerpt: string
  slug: string
  priority?: boolean
}

function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
  priority,
}: Props) {
  return (
    <li className="group flex flex-col">
      {/* App Router's next/link uses viewport-aware prefetch by default,
          which solves the chunk-prefetch problem the safe-now `prefetch={false}`
          workaround was hiding. Drop the override. */}
      <Link href={`/posts/${slug}`} aria-label={title}>
        <CoverImage priority={priority} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={coverImage} title={title} />
        <PostTitle>{title}</PostTitle>
        <p className="text-lg leading-snug tracking-wider text-gray-400 dark:text-white dark:opacity-60 mb-6">{excerpt}</p>
      </Link>
      {/* Pre-cache the post-page hero variant. The visible CoverImage above
          loads the gallery-card variant (sizes=33vw at >=1200px); the post
          page renders the same source with sizes="(max-width: 768px) 100vw,
          768px", which resolves to a different Next-optimised URL and misses
          the cache. Mirroring the post page's `sizes` here forces next/image
          (`priority`) to emit a `<link rel="preload" as="image"
          imagesrcset=...>` whose srcset matches the request the post page
          will make, so the browser has the bytes in cache before the click.
          Hidden from layout so the card grid stays intact; the preload fires
          regardless of visibility because Next emits the link via
          ReactDOM.preload / RSC `<head>` injection, not as a rendered `<img>`.
          When the future motion.dev transition lands, the underlying image
          is already decoded and the motion has somewhere to come from. */}
      <Image
        priority
        alt=""
        aria-hidden="true"
        height={900}
        sizes="(max-width: 768px) 100vw, 768px"
        src={coverImage}
        style={{ height: 1, opacity: 0, position: 'absolute', width: 1 }}
        width={1200}
      />
    </li>
  );
}

export default PostPreview;
