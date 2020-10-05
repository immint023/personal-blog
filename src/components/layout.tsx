import { deepEqual } from 'assert';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import NavBar from './nav';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme.dark}>
      <NavBar />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
