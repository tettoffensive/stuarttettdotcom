import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import PostBody from '../../components/post-body';
import PostFooter from '../../components/post-footer';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import type PostType from '../../interfaces/post';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import { NAME } from '../../lib/constants';

type Props = {
  post: PostType
  morePosts: PostType[]
}

export default function Post({ post, morePosts }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-8">
              <Head>
                <title>
                {`${post.title} | ${NAME}`}
                </title>
                <meta content={post.ogImage.url} property="og:image" />
              </Head>
              <PostHeader
                coverImage={post.coverImage}
                excerpt={post.excerpt}
                title={post.title}
              />
              <PostBody content={post.content} imagesOnly={post.imagesOnly} />
            </article>
            <footer className="mb-8">
            { morePosts ? <PostFooter currentPost={post} morePosts={morePosts} /> : null }
            </footer>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'imagesOnly',
  ]);
  // const content = await markdownToHtml(post.content || '')

  const morePosts = getAllPosts([
    'title',  
    'slug']);

  return {
    props: {
      post: {
        ...post,
        content: post.content,
      },
      morePosts,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
