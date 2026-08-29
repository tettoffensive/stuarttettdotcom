import Image from 'next/future/image';
import placeholderBlur from '../utils/placeholder-blur';

type Props = {
  title: string
  src: string
  slug?: string
  sizes?: string
  priority?: boolean
}

function CoverImage({
  title, src, slug, sizes = '100vw', priority = false,
}: Props) {
  return (
    <div id={slug}>
      <Image
        priority={priority}
        alt={`Cover Image for ${title}`}
        blurDataURL={placeholderBlur(140, 138, 120)}
        className="aspect-4/3 transition-transform group-hover:scale-95 duration-300 ease-out mx-auto"
        height="900"
        placeholder="blur"
        sizes={sizes}
        src={src}
        width="1200"
      />
    </div>
  );
}

export default CoverImage;
