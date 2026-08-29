import Link from 'next/link';
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
        <p className="text-lg leading-snug tracking-wider text-gray-400 dark:text-white dark:opacity-60 mb-4">{excerpt}</p>
      </Link>
    </li>
  );
}

export default PostPreview;
