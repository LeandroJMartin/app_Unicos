import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Capa from '../../public/contato.jpeg';
import { FormDuvidas } from '../components/interface/Forms';
import { SocialLinks } from '../lib/querys';

const ContactApp: NextPage = ({ apiData }: any) => {
  return (
    <>
      <section className="container">
        <div className="relative h-[140px] sm:h-[400px] rounded-3xl">
          <Image
            src={Capa}
            alt="Contato Unicos"
            fill
            className="object-cover object-center rounded-3xl"
          />
        </div>
        <div className="hidden relative z-10 md:-translate-y-5 md:flex justify-center">
          <div className="drop-shadow-xl border border-slate-300 rounded-2xl py-2 px-4 inline-block bg-white">
            <button className="w-[150px] inline-block text-blue">
              Tire suas dúvidas
            </button>
            <button className="w-[150px] inline-block">Ofereça sua área</button>
            <button className="w-[150px] inline-block">Seja um parceiro</button>
            <button className="w-[150px] inline-block">Trabalhe conosco</button>
          </div>
        </div>
      </section>

      <section className="container my-8">{<FormDuvidas />}</section>
    </>
  );
};

export default ContactApp;

export const getStaticProps: GetStaticProps = async () => {
  const linksSocialPage = await (
    await SocialLinks.queryExecute()
  ).linksSocialPage;

  return {
    props: {
      apiData: { linksSocialPage },
    },
    revalidate: 30,
  };
};
