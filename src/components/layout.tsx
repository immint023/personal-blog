import React, { FC, useEffect, useState } from 'react';
import styled, {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from 'styled-components';
import Head from 'next/head';

import theme from '@styles/theme';
import NavBar from './NavBar';
import Switch from './Switch';

interface IProps {
  title?: string;
  children: JSX.Element[] | JSX.Element;
}

const WrapperLayout = styled.div`
  width: 60vw;
  margin: auto;
`;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
  }

  * {
    box-sizing: border-box;
    transition: background-color, color 0.1s linear;
  }
`;

enum ThemeMode {
  DARK,
  LIGHT,
}

const Layout: FC<IProps> = ({ children, title = 'Mint Blog' }) => {
  const [mode, setMode] = useState(ThemeMode.LIGHT);
  let themeMode = mode === ThemeMode.DARK ? theme.dark : theme.light;

  const switchMode = () => {
    switch (mode) {
      case ThemeMode.DARK:
        setMode(ThemeMode.LIGHT);
        break;
      case ThemeMode.LIGHT:
        setMode(ThemeMode.DARK);
        break;
    }
  };

  useEffect(() => {
    themeMode = mode === ThemeMode.DARK ? theme.dark : theme.light;
  }, [mode]);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <WrapperLayout>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" href="/static/favicon.svg" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <NavBar />
        <Switch onClick={switchMode} />
        {children}
      </WrapperLayout>
    </ThemeProvider>
  );
};

export default Layout;
