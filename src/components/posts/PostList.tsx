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
  return (
    <>
      {posts.map((item, index) => (
        <PostListItem key={index} {...item} />
      ))}
    </>
  );
};

export default PostList;
