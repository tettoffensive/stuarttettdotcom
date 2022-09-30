import Image from 'next/future/image';
import Link from 'next/link';
import { placeholderBlur } from '../utils/placeholder-blur';

type Props = {
  title: string
  src: string
  slug?: string
  sizes?: string
}

function CoverImage({ title, src, slug, sizes = '100vw' }: Props) {
  const image = (
    <Image
      alt={`Cover Image for ${title}`}
      blurDataURL={placeholderBlur(140,138,120)}
      className="aspect-4/3 transition-transform group-hover:scale-95 duration-300 ease-out mx-auto"
      height="900"
      placeholder="blur"
      sizes={sizes}
      src={src}
      width="1200"
    />
  );
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
  );
}

export default CoverImage;
