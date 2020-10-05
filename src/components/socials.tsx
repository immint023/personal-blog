import React from 'react';
import styled from 'styled-components';

const WrapperSocial = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Social = () => {
  return (
    <WrapperSocial>
      <a href="https://www.linkedin.com/in/ngo-minh-372a26162/" target="_blank">
        LinkedIn
      </a>
      <a href="https://www.github.com/immint023" target="_blank">
        Github
      </a>
      <a href="https://www.facebook.com/iamminhhh/" target="_blank">
        Facebook
      </a>
    </WrapperSocial>
  );
};

export default Social;
