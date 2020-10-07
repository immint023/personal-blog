import React, { FC, useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
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
    padding: 0;
    margin: 0;
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
  }

  * {
    box-sizing: border-box;
    transition: background-color, color 0.3s linear;
  }
`;

const Layout: FC<IProps> = ({ children, title = 'Mint Blog' }) => {
  const [isDark, setDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
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
        <Switch onClick={() => setDark(!isDark)} />
        {children}
      </WrapperLayout>
    </ThemeProvider>
  );
};

export default Layout;
