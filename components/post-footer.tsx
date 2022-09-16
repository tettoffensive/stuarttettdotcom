import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'
import PostType from '../interfaces/post'
import coverImage from './cover-image'
import Link from 'next/link'

type Props = {
  currentPost: PostType
  morePosts: PostType[]
}

const PostFooter = ({ currentPost: { slug: currentSlug }, morePosts }: Props) => {
  return (
    <nav className="justify-center mx-auto flex flex-row space-x-8">  
    <Link href="/">
      <a>
        <PostTitle>All</PostTitle>
      </a>
    </Link>
    {morePosts.map(({title, slug }) => (
      slug === currentSlug ? <PostTitle><span className="text-almost-black dark:text-white cursor-not-allowed opacity-20 select-none">{title}</span></PostTitle> :
      <Link href={`/posts/${slug}`}>
        <a aria-label={title}>
          <PostTitle>{title}</PostTitle>
        </a>
      </Link>
    ))}
    </nav>
  )
}

export default PostFooter
