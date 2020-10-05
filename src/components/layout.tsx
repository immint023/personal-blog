import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@styles/theme';
import NavBar from './NavBar';
import Switch from './Switch';

const Layout = ({ children }) => {
  const [isDark, setDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
      <NavBar />
      <Switch onClick={() => setDark(!isDark)} />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
