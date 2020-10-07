import { FC } from 'react';
import styled from 'styled-components';

import PostListItem from './PostListItem';
import { IProps as PostProps } from './PostListItem';

const Wrapper = styled.div`
  width: 65%;
  margin: auto;
`;

interface IProps {
  posts: PostProps[];
}

const PostList: FC<IProps> = ({ posts }) => {
  posts.length = 7;
  posts.fill({
    heading: 'Thời tiết này là yêu được rồi đấy. Bắt đầu đi',
    preHeading:
      "I have never met anyone so passionate and dedicated to a belief as you. It's so intense that sometimes it's blinding.",
    thumbnailUrl:
      'https://images.unsplash.com/photo-1601809493602-e1b0c09c2599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  });

  return (
    <>
      {posts.map((item) => (
        <PostListItem {...item} />
      ))}
    </>
  );
};

export default PostList;
