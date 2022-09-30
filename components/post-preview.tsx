import Link from 'next/link';
import type Author from '../interfaces/author';
import CoverImage from './cover-image';
import PostTitle from './post-title';

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
}: Props) {
  return (
    <li className="group flex flex-col">
      <Link href={`/posts/${slug}`}>
        <a aria-label={title}>
        <CoverImage sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={coverImage} title={title} />
        <PostTitle>{title}</PostTitle>
        <p className="text-lg leading-snug tracking-wider text-gray-400 dark:text-white dark:opacity-60 mb-4">{excerpt}</p>
        </a>
      </Link>
    </li>
  );
}

export default PostPreview;
