import Head from 'next/head';
import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import PostGallery from '../components/post-gallery';
import Post from '../interfaces/post';
import { getAllPosts } from '../lib/api';

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const posts = allPosts;
  return (
    <Layout>
        <Head>
        <title>〰️ Stuart Tett 〰️</title>
        <link href="/favicon.ico" rel="icon" />
        </Head>
        <Container>
          <Intro />          
          {posts.length > 0 && <PostGallery posts={posts} />}
        </Container>
      </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
    revalidate: 10,
  };
};
