import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/Logo.svg';
import { RiMenu3Fill } from 'react-icons/ri';
import SocialIcons from '../interface/SocialIcons';
import NavigationApp from '../interface/Navigation';

interface props {
  SocialLinks: any;
}

const HeaderApp = ({ SocialLinks }: props) => {
  return (
    <header className="bg-blue xl:bg-white h-[93vh] xl:h-auto container py-4 xl:py-0 flex flex-col xl:flex-row justify-between">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logotipo Unicos Construtora"
            width={150}
            height={42}
          />
        </Link>
        <button className="block xl:hidden">
          <RiMenu3Fill size={30} className="text-white" />
        </button>
      </div>
      <div className="flex flex-col xl:flex-row h-full py-8">
        <NavigationApp />
        <SocialIcons SocialLinks={SocialLinks.apiData.linksSocialPage} />
      </div>
    </header>
  );
};

export default HeaderApp;
