import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { IPath } from '@interfaces/path';

const NavBarWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

const NavItem = styled.a<{ active: boolean }>`
  margin: 6px;
  font-size: ${({ theme }) => theme.fontSizes.heading};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  color: ${({ theme }) => theme.text.primary};
`;

const paths: IPath[] = [
  {
    name: 'Blogs',
    slug: '/blogs',
  },
  {
    name: 'About',
    slug: '/about',
  },
];

const NavBar = () => {
  const router = useRouter();
  return (
    <NavBarWrapper>
      {paths.map((path, index) => (
        <NavItem
          key={index}
          href={path.slug}
          active={router.asPath === path.slug}
        >
          {path.name}
        </NavItem>
      ))}
    </NavBarWrapper>
  );
};

export default NavBar;