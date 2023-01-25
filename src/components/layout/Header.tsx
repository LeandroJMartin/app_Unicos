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
    // colocar style: bg-blue h-[calc(93vh)]
    <header className="xl:container px-4 xl:px-0 py-6 flex flex-col justify-between">
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
      <NavigationApp />
      <SocialIcons SocialLinks={SocialLinks.apiData.linksSocialPage} />
    </header>
  );
};

export default HeaderApp;
