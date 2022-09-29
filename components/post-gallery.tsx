import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const PostGallery = ({ posts }: Props) => {
  return (
    <section>
      <ol role="list" className="grid grid-cols-auto-fit gap-[4vw] mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </ol>
    </section>
  )
}

export default PostGallery
