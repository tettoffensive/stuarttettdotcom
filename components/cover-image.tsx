import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/future/image'
import { placeholderBlur } from '../utils/placeholderBlur'

type Props = {
  title: string
  src: string
  slug?: string
  sizes?: string
}

const CoverImage = ({ title, src, slug, sizes = '100vw' }: Props) => {
  const image = (
    <div className='relative aspect-video'><Image
      fill
      sizes={sizes}
      placeholder="blur"
      blurDataURL={placeholderBlur(235, 235, 228)}
      src={src}
      alt={`Cover Image for ${title}`}
      className="w-full h-auto object-cover transition-transform group-hover:scale-95 duration-300 ease-out"
    /></div>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
