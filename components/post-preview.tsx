import DateFormatter from './date-formatter'
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

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="group aspect-square">
      <Link href={`/posts/${slug}`}>
        <a aria-label={title}>
        <CoverImage title={title} src={coverImage} sizes="(max-width: 768px) 100vw, 50vw" />
        <PostTitle>{title}</PostTitle>
        </a>
      </Link>
    </div>
  )
}

export default PostPreview
