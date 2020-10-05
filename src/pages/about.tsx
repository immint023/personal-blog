import styled from 'styled-components';

import ParticlesBg from '@components/particles';
import Social from '@components/socials';
import NavBar from '@components/nav';

const Wrapper = styled.div`
  position: relative,
  width: 100%,
  height: 100vh,
  background: ${({ theme }) => theme.colors.background},
`;

const AboutMeWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`;

export default function About() {
  return (
    <Wrapper>
      <ParticlesBg />
      <AboutMeWrapper>
        <h1>Hi There, I'm Minh 👨‍💻</h1>
        <Social />
      </AboutMeWrapper>
    </Wrapper>
  );
}
