import Layout from '@components/Layout';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 46px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Image = styled.img`
  width: 40%;
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Balsamiq Sans', cursive;
  letter-spacing: 0.29em;
`;

const NotFound = () => {
  return (
    <Layout>
      <Wrapper>
        <Image src="/static/pixal.jpeg" />
        <TextWrapper>
          <Title>AWWW...DON’T CRY.</Title>
          <p>It's just a 404 Error! </p>
          <p>
            What you’re looking for may have been misplaced in Long Term Memory.
          </p>
        </TextWrapper>
      </Wrapper>
    </Layout>
  );
};

export default NotFound;
