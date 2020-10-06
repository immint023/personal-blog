import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg.secondary};
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  cursor: pointer;
  margin: 18px 0;
  :hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  }
`;

const Thumbnail = styled.div<{ imageUrl: string }>`
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

const Heading = styled.h3`
  color: ${({ theme }) => theme.text.primary};
`;

const PreHeading = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.body};
  margin: 0;
`;

const PostListItem = () => {
  return (
    <Wrapper>
      <WrapperIntro>
        <Heading>
          Sifting Through the Remains of a Home Destroyed by Fire
        </Heading>
        <PreHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </PreHeading>
      </WrapperIntro>
      <Thumbnail imageUrl="https://images.pexels.com/photos/2917442/pexels-photo-2917442.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    </Wrapper>
  );
};

export default PostListItem;
