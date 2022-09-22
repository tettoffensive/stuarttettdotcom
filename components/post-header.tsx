import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  excerpt: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, excerpt, date, author }: Props) => {
  return (
    <section className='mx-auto max-w-3xl'>      
      <div className="mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>     
      <h1
     className="text-h3 font-sans tracking-wider my-2 pb-4 leading-tight
      text-almost-black dark:text-white mx-auto">
      {title}
      <span className="bg-army-green-light relative h-[2px] w-[40px] block mt-4"></span>
    </h1>
    <h2 className="text-lg tracking-wider text-gray-400 dark:text-white dark:opacity-60 leading-none mb-4">{excerpt}</h2>      
    </section>
  )
}

export default PostHeader
