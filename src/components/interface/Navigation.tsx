import Link from 'next/link';
import React from 'react';

interface Props {
  path: string;
  label: string;
}

const NavigationApp = () => {
  const NavLink = ({ path, label }: Props) => {
    return (
      <Link
        href={path}
        className="text-white xl:text-blue xl:px-4 py-2 text-xl xl:text-base font-bold"
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="flex flex-col xl:flex-row items-center justify-between h-full py-4 xl:py-0">
      <NavLink path="/a-unicos" label="A Unicos" />
      <NavLink path="/empreendimentos" label="Empreendimentos" />
      <NavLink path="/duvidas-frequentes" label="Dúvidas frequentes" />
      <NavLink path="/Fale conosco" label="Fale conosco" />
      <a
        href="#portal-do-cliente"
        className="bg-transparent xl:bg-bgBlue text-white font-bold px-6 py-3 xl:py-1 mt-8 xl:mt-0 rounded-[30px] inline-block text-xl xl:text-base"
      >
        Portal do cliente
      </a>
    </nav>
  );
};

export default NavigationApp;
