import Link from 'next/link';
import { ReactNode } from 'react';
import PostType from '../interfaces/post';

type Props = {
  currentPost: PostType
  morePosts: PostType[]
}

function NavItem({ children }: { children?: ReactNode}) {
  return <div className="text-xl tracking-wider text-gray-400 dark:text-white dark:opacity-60 leading-none mb-4 hover:text-army-green-light
transition-colors duration-300">{children}</div>;
}

function PostFooter({ currentPost: { slug: currentSlug }, morePosts }: Props) {
  return (
    <nav className="place-content-center mx-auto flex flex-col md:flex-row md:space-x-8 md:flex-wrap">
      <span className="bg-army-green-light relative h-[2px] w-[40px] block my-4 md:invisible" />
    <Link href="/">
      <a>
        <NavItem>All work</NavItem>
      </a>
    </Link>
    {morePosts.map(({title, slug }) => (
      slug === currentSlug ? <NavItem key={slug}><span className="text-almost-black dark:text-white cursor-not-allowed opacity-20 select-none">{title}</span></NavItem> :
      <Link href={`/posts/${slug}`} key={slug}>
        <a aria-label={title}>
          <NavItem>{title}</NavItem>
        </a>
      </Link>
    ))}
    </nav>
  );
}

export default PostFooter;
