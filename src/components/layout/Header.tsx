import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/Logo.svg';
import { RiMenu3Fill } from 'react-icons/ri'
import SocialIcons from "../interface/SocialIcons";
import NavigationApp from "../interface/Navigation";

const HeaderApp = () => {
  return(
    <header className="px-4 py-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logotipo Unicos Construtora"
            width={150}
            height={42}
          />
        </Link>
        <button className="block ">
          <RiMenu3Fill size={30} className="text-blue" />
        </button>
      </div>
      <div className="block xl:flex items-center">
        <NavigationApp />
        <SocialIcons />
      </div>
    </header>
  );
}

export default HeaderApp;
