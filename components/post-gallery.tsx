import type Post from '../interfaces/post';
import PostPreview from './post-preview';

type Props = {
  posts: Post[]
}

function PostGallery({ posts }: Props) {
  return (
    <section>
      <ol className="grid grid-cols-auto-fit gap-[4vw] mb-32">
        {/* First card is the LCP candidate on `/` — mark it `priority` so
            Next skips `loading="lazy"` and emits a `<link rel="preload">` in
            the head. The rest stay lazy. */}
        {posts.map((post, i) => (
          <PostPreview
            coverImage={post.coverImage}
            excerpt={post.excerpt}
            key={post.slug}
            priority={i === 0}
            slug={post.slug}
            title={post.title}
          />
        ))}
      </ol>
    </section>
  );
}

export default PostGallery;
