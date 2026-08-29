import { notFound } from 'next/navigation';
import Container from '../../../components/container';
import Header from '../../../components/header';
import PostBody from '../../../components/post-body';
import PostFooter from '../../../components/post-footer';
import PostHeader from '../../../components/post-header';
import { getAllPosts, getPostBySlug } from '../../../lib/api';
import { NAME } from '../../../lib/constants';
import type PostType from '../../../interfaces/post';

export const revalidate = 10;
export const dynamic = 'force-static';

type Params = { slug: string }
type PostPageProps = { params: Promise<Params> }

export function generateStaticParams(): { params: Params }[] {
  const posts = getAllPosts(['slug']) as { slug: string }[];
  return posts.map((post) => ({ params: { slug: post.slug } }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, ['title', 'slug', 'ogImage']) as
    { slug: string; title: string; ogImage?: { url: string } } | undefined;
  if (!post?.slug) return { title: NAME };
  return {
    title: `${post.title} | ${NAME}`,
    openGraph: post.ogImage ? { images: [{ url: post.ogImage.url }] } : undefined,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
    'imagesOnly',
  ]) as PostType;
  if (!post?.slug) {
    notFound();
  }

  const morePosts = getAllPosts(['title', 'slug']) as PostType[];

  return (
    <Container>
      <Header />
      <article className="mb-8">
        <PostHeader
          coverImage={post.coverImage}
          excerpt={post.excerpt}
          title={post.title}
        />
        <PostBody content={post.content} imagesOnly={post.imagesOnly} />
      </article>
      <footer className="mb-8">
        {morePosts ? <PostFooter currentPost={post} morePosts={morePosts} /> : null}
      </footer>
    </Container>
  );
}
