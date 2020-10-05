import styled from 'styled-components';

import ParticlesBg from '@components/Particles';
import Social from '@components/Socials';

const Wrapper = styled.div`
  position: relative,
  width: 100%,
  height: 100vh,
`;

const AboutMeWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  h1 {
    color: ${({ theme }) => theme.text.primary};
  }
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
