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
    <Image
      width="1200"
      height="900"
      src={src}
      placeholder="blur"
      blurDataURL={placeholderBlur(140,138,120)}
      sizes={sizes}
      alt={`Cover Image for ${title}`}
      className="w-full h-full aspect-4/3 object-cover transition-transform group-hover:scale-95 duration-300 ease-out mx-auto max-h-[70vh]"
    />
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
