import Link from "next/link";
import React from "react";

const NavigationApp = () => {
  return(
    <nav className="block">
      <Link href="/a-unicos">
        A Unicos
      </Link>
      <Link href="/empreendimentos">
        Empreendimentos
      </Link>
      <Link href="/duvidas-frequentes">
        Dúvidas frequentes
      </Link>
      <Link href="/fale-conosco">
        Fale conosco
      </Link>
      <a href="#portal-do-cliente">
        Portal do cliente
      </a>
    </nav>
  );
}

export default NavigationApp;
