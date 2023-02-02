import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo-white.svg';
import CoolText from '../interface/CoolText';

const FooterApp = () => {
  return (
    <footer className="bg-blue2 pt-12">
      <div className="container grid gap-5 grid-cols-2 md:grid-cols-6 text-white">
        <div>
          <Link className="block py-1" href="/contato#form_duvida">
            Fale conosco
          </Link>
          <Link className="block py-1" href="/contato#form_sua_area">
            Ofereça sua àrea
          </Link>
          <Link className="block py-1" href="/contato#form_duvida_anexo">
            Seja um parceiro
          </Link>
          <Link className="block py-1" href="/contato#form_contato">
            Trabalhe conosco
          </Link>
        </div>
        <div>
          <Link className="block py-1" href="/a-unicos">
            A Unicos
          </Link>
          <Link className="block py-1" href="/empreendimentos">
            Empreendimentos
          </Link>
          <Link className="block py-1" href="/blog">
            Tire suas dúvidas
          </Link>
          <a className="block py-1" href="/portal-do-cliente">
            Portal do cliente
          </a>
        </div>
        <div className="col-span-2">
          <p>
            0800 775 8282 | 17 99609-2042 renegocie@unicosconstrutora.com.br Av.
            Anísio Haddad, n° 8001, Torre Madrid Norte, Sala 413. Bairro Jardim
            Vivendas. São José do Rio Preto - SP
          </p>
        </div>
        <div>
          <a className="btn-white text-xs block" href="/assistencia-tecnica">
            Assistência Técnica
          </a>
          <a className="btn-white text-xs mt-4 block" href="/2-via-dos-boletos">
            2ª via de boleto
          </a>
        </div>
        <div>
          <Image src={Logo} alt="Logo Unicos" className="w-[80%]" />
        </div>
      </div>
      <CoolText />
    </footer>
  );
};

export default FooterApp;
