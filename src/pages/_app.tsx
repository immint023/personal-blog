import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@components/layout';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Mint Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/static/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
