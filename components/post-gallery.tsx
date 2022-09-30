import type Post from '../interfaces/post';
import PostPreview from './post-preview';

type Props = {
  posts: Post[]
}

function PostGallery({ posts }: Props) {
  return (
    <section>
      <ol className="grid grid-cols-auto-fit gap-[4vw] mb-32">
        {posts.map((post) => (
          <PostPreview
            author={post.author}
            coverImage={post.coverImage}
            date={post.date}
            excerpt={post.excerpt}
            key={post.slug}
            slug={post.slug}
            title={post.title}
          />
        ))}
      </ol>
    </section>
  );
}

export default PostGallery;
