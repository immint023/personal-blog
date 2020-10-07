import Layout from '@components/Layout';
import PostList from '@components/posts/PostList';

const Posts = () => {
  return (
    <Layout>
      <PostList posts={[]} />
    </Layout>
  );
};

export default Posts;
