import Container from '../components/container';
import Intro from '../components/intro';
import PostGallery from '../components/post-gallery';
import { getAllPosts } from '../lib/api';
import type PostType from '../interfaces/post';

export const revalidate = 10;

export default function Index() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author', // legacy; 'author' field has been removed from interfaces/post
    'coverImage',
    'excerpt',
  ]) as PostType[];

  return (
    <Container>
      <Intro />
      {allPosts.length > 0 && <PostGallery posts={allPosts} />}
    </Container>
  );
}
