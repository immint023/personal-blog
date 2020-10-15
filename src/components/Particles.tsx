import React, { FC, memo } from 'react';
import Particles from 'react-particles-js';
import { useTheme } from 'styled-components';

const ParticlesBg: FC = () => {
  const { bg } = useTheme();
  return (
    <Particles
      height={'100vh'}
      style={{ background: bg.primary }}
      params={{
        fps_limit: 28,
        particles: {
          collisions: {
            enable: false,
          },
          number: {
            value: 80,
            density: {
              enable: true,
            },
          },
          color: {
            value: '#757575',
          },
          size: {
            value: 4,
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: '#ebebeb',
            opacity: 0.4,
          },
          move: {
            speed: 1,
          },
          opacity: {
            anim: {
              enable: true,
              opacity_min: 0.05,
              speed: 1,
              sync: false,
            },
            value: 0.4,
          },
        },
      }}
    />
  );
};

export default memo(ParticlesBg);
