import React, { ReactNode } from 'react';
import WhatsApp from '../interface/Whatsapp';
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

      <WhatsApp />
      <FooterApp />
    </>
  );
};

export default LayoutApp;
