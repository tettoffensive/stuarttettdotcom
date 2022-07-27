import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import PostTitle from './post-title'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a aria-label={title}>
          <CoverImage title={title} src={coverImage} />
          <PostTitle>{title}</PostTitle>
        </a>
        </Link>
      </div>
    </section>
  )
}

export default HeroPost
