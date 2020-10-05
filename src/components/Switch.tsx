import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  display: flex;
  justify-content: space-around;
  background: #17141d;
  width: 46px;
  height: 24px;
  color: gold;
  border-radius: 50px;
  padding: 2px 5px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

const Ball = styled.div<{ isMoon: boolean }>`
  top: 1px;
  height: 22px;
  width: 22px;
  position: absolute;
  background-color: #fafafa;
  border-radius: 50%;
  transition: all 0.3s ease 0s;
  ${(props) => (props.isMoon ? 'left: 1px' : 'left: 23px')}
`;

const Switch = ({ onClick }) => {
  const [isMoon, setMoon] = useState(false);
  const onClickSwitch = () => {
    setMoon(!isMoon);
    onClick();
  };
  return (
    <Wrapper onClick={onClickSwitch}>
      <img src="/static/moon.svg" />
      <img src="/static/sun.svg" />
      <Ball isMoon={isMoon} />
    </Wrapper>
  );
};

export default Switch;
