import React, { ReactNode } from "react";
import FooterApp from "./Footer";
import HeadApp from "./Head";
import HeaderApp from "./Header";

interface Props {
  children: ReactNode;
}

const LayoutApp = ({children}: Props) => {
  return (
    <>
      <HeadApp />
      <HeaderApp />

      <main>{children}</main>

      <FooterApp />
    </>
  );
}

export default LayoutApp;
