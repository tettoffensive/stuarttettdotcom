import Link from 'next/link';
import CoverImage from './cover-image';
import PostTitle from './post-title';

type Props = {
  title: string
  coverImage: string
  slug: string
}

function HeroPost({
  title,
  coverImage,
  slug,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <Link href={`/posts/${slug}`}>
        <a aria-label={title}>
          <CoverImage src={coverImage} title={title} />
          <PostTitle>{title}</PostTitle>
        </a>
        </Link>
      </div>
    </section>
  );
}

export default HeroPost;
