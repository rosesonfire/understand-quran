import React, { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '@styles/global.scss';
import { siteDescription, siteTitle } from '@copies/global';

// eslint-disable-next-line react/prop-types
const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Home</title>
      <link href="/favicon.ico" rel="icon" />
      <meta
        content={siteDescription}
        name="description"
      />
      <meta
        content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        property="og:image"
      />
      <meta content={siteTitle} name="og:title" />
      <meta content="summary_large_image" name="twitter:card" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
    </Head>

    <div className="container">
      <main>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </main>
    </div>

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        Powered by
        {' '}
        <img alt="Vercel Logo" className="logo" src="/vercel.svg" />
      </a>
    </footer>
  </>
);

export default App;
