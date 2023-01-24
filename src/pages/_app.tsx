import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import LayoutApp from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <LayoutApp>
      <Component {...pageProps} />
    </LayoutApp>
  )

}

export default MyApp;
