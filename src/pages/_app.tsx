import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import LayoutApp from '../components/layout/Layout';
import MenuContextProvider from '../context/menuMobileContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <LayoutApp ApiData={pageProps}>
        <Component {...pageProps} />
      </LayoutApp>
    </MenuContextProvider>
  );
}

export default MyApp;
