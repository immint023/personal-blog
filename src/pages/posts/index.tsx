import Layout from '@components/Layout';
import PostList from '@components/Posts/PostList';
import { IProps as IPostListItem } from '@components/Posts/PostListItem';
import { getAllPosts } from '@lib/api';
import { NextPage } from 'next';

interface IProps {
  posts: IPostListItem[];
}

const Posts: NextPage<IProps> = ({ posts }) => {
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
};

Posts.getInitialProps = async (): Promise<IProps> => {
  const posts = await getAllPosts();
  return {
    posts,
  };
};

export default Posts;
