import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import type Author from '../interfaces/author'
import PostType from '../interfaces/post'
import coverImage from './cover-image'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  currentPost: PostType
  morePosts: PostType[]
}

const NavItem = ({ children }: { children?: ReactNode}) => (<p className="text-xl tracking-wider text-gray-400 leading-none mb-4">{children}</p>)

const PostFooter = ({ currentPost: { slug: currentSlug }, morePosts }: Props) => {
  return (
    <nav className="place-content-center mx-auto flex flex-col md:flex-row md:space-x-8 md:flex-wrap">
      <span className="bg-army-green-light relative h-[2px] w-[40px] block my-4 md:invisible"></span>
    <Link href="/">
      <a>
        <NavItem>All work</NavItem>
      </a>
    </Link>
    {morePosts.map(({title, slug }) => (
      slug === currentSlug ? <NavItem key={slug}><span className="text-almost-black dark:text-white cursor-not-allowed opacity-20 select-none">{title}</span></NavItem> :
      <Link key={slug} href={`/posts/${slug}`}>
        <a aria-label={title}>
          <NavItem>{title}</NavItem>
        </a>
      </Link>
    ))}
    </nav>
  )
}

export default PostFooter
