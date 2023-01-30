import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo-white.svg';

const FooterApp = () => {
  return (
    <footer className="bg-blue2 py-12 mt-4">
      <div className="container grid gap-4 grid-cols-2 md:grid-cols-4 text-white">
        <div>
          <Link href="/fale-conosco">Fale conosco</Link>
          <Link href="/ofereca-sua-area">Ofereça sua àrea</Link>
          <Link href="/seja-um-parceiro">Seja um parceiro</Link>
          <Link href="/trabalhe-conosco">Trabalhe conosco</Link>
        </div>
        <div>
          <Link href="/a-unicos">A Unicos</Link>
          <Link href="/empreendimento">Empreendimentos</Link>
          <Link href="/tire-suas-duvidas">Tire suas dúvidas</Link>
          <a href="/portal-do-cliente">Portal do cliente</a>
        </div>
        <div>
          <p>
            0800 775 8282 | 17 99609-2042 renegocie@unicosconstrutora.com.br Av.
            Anísio Haddad, n° 8001, Torre Madrid Norte, Sala 413. Bairro Jardim
            Vivendas. São José do Rio Preto - SP
          </p>
        </div>
        <div>
          <a className="btn-white" href="/assistencia-tecnica">
            Assistência Técnica
          </a>
          <a className="btn-white" href="/2-via-dos-boletos">
            2ª via de boleto
          </a>
        </div>
        <div>
          <Image src={Logo} alt="Logo Unicos" />
        </div>
      </div>
    </footer>
  );
};

export default FooterApp;
