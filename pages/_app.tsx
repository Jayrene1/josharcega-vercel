import { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import 'styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://use.fontawesome.com/releases/v5.15.1/css/svg-with-js.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="og:title" content="12Stone - Dashboard" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/twelve-stone-church/image/upload/w_480,f_auto,q_auto/NewLogo-White_t8aiuf.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="Connect at 12Stone Church - Register for events, sign up for groups, grow in your faith."
        />

        <link
          rel="stylesheet preload"
          as="style"
          href="https://use.typekit.net/aba0rym.css"
        />
        <title>12Stone - Dashboard</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
