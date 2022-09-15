import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>      
      <PostTitle><span className="text-almost-black">{title}</span></PostTitle>
      <div className="mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>     
    </>
  )
}

export default PostHeader
