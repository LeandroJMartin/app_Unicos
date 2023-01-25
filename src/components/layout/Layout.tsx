import React, { ReactNode } from 'react';
import FooterApp from './Footer';
import HeadApp from './Head';
import HeaderApp from './Header';

interface Props {
  children: ReactNode;
  ApiData: any;
}

const LayoutApp = ({ children, ApiData }: Props) => {
  return (
    <>
      <HeadApp />
      <HeaderApp SocialLinks={ApiData} />

      <main>{children}</main>

      <FooterApp />
    </>
  );
};

export default LayoutApp;
