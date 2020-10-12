import React from 'react';
import styled from 'styled-components';

// import Social from './Socials';

const AboutMeWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  h1 {
    color: ${({ theme }) => theme.text.primary};
  }
`;

const Landing = () => {
  return (
    <AboutMeWrapper>
      <h1>Hi There, I'm Minh 👨‍💻</h1>
      {/* <Social /> */}
    </AboutMeWrapper>
  );
};

export default Landing;
