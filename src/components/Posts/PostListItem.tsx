import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg.secondary};
  cursor: pointer;
  margin: 18px 0;
  transition: all 0.3s ease;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
`;

const Thumbnail = styled.div<{ imageUrl?: string }>`
  width: 220px;
  height: 160px;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-position: center;
  background-size: cover;
`;

const WrapperIntro = styled.div`
  margin: 0;
  padding-right: 8px;
  flex: 1;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.text.primary};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.body};
  margin: 0;
`;

export interface IProps {
  path: string;
  slug?: string;
  title: string;
  description?: string;
  thumbnailUrl?: string;
}

const PostListItem: FC<IProps> = ({
  path,
  title,
  description,
  thumbnailUrl,
}) => {
  return (
    <Link href={path}>
      <Wrapper>
        <WrapperIntro>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </WrapperIntro>
        <Thumbnail imageUrl={thumbnailUrl} />
      </Wrapper>
    </Link>
  );
};

export default PostListItem;
