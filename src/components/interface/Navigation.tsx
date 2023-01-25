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
        className="text-white xl:text-blue py-2 block text-3xl xl:text-base font-bold"
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="flex flex-col items-center justify-between h-full py-10">
      <NavLink path="/a-unicos" label="A Unicos" />
      <NavLink path="/empreendimentos" label="Empreendimentos" />
      <NavLink path="/duvidas-frequentes" label="Dúvidas frequentes" />
      <NavLink path="/Fale conosco" label="Fale conosco" />
      <a
        href="#portal-do-cliente"
        className="bg-white text-blue font-bold px-4 py-3 rounded-2xl inline-block text-2xl"
      >
        Portal do cliente
      </a>
    </nav>
  );
};

export default NavigationApp;
