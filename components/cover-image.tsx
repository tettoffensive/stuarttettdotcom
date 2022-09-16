import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/future/image'

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

type Props = {
  title: string
  src: string
  slug?: string
}

const css = { width: '100%', height: 'auto' }
const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
    width="300"
    height="300"
    placeholder="blur"
    blurDataURL={rgbDataURL(235, 235, 228)}
    style={css}
      src={src}
      alt={`Cover Image for ${title}`}
      className="transition-transform group-hover:scale-95 duration-300 ease-out"
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
