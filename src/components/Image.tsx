import React, { FC } from 'react';

interface IProps {
  src: string;
}

const Image: FC<IProps> = ({ src }) => {
  return <img src={src} style={{ maxWidth: '100%' }} />;
};

export default Image;
