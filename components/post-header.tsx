import CoverImage from './cover-image';

type Props = {
  title: string
  coverImage: string
  excerpt: string
}

function PostHeader({ title, coverImage, excerpt }: Props) {
  return (
    <section className="mx-auto max-w-3xl">
      <div className="mb-8 sm:mx-0">
        <CoverImage src={coverImage} title={title} />
      </div>
      <h1
        className="text-h3 font-sans tracking-wider my-2 pb-4 leading-tight
      text-almost-black dark:text-white mx-auto"
      >
        {title}
        <span className="bg-army-green-light relative h-[2px] w-[40px] block mt-4" />
      </h1>
      <h2 className="text-lg tracking-wider text-gray-400 dark:text-white dark:opacity-60 leading-none mb-4">{excerpt}</h2>
    </section>
  );
}

export default PostHeader;
