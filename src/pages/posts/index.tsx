import Layout from '@components/Layout';
import PostListItem from '@components/posts/PostListItem';

const Posts = () => {
  const arr = [1, 2, 3];
  return (
    <Layout>
      {arr.map(() => (
        <PostListItem />
      ))}
    </Layout>
  );
};

export default Posts;
