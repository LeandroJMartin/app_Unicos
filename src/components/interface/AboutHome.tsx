import Image from 'next/image';
import Link from 'next/link';

interface Props {
  ContentAbout: {
    blockTituloSobre: string;
    blockDescricaoSobre: string;
  };
  Thumbnail: string;
}

const AboutHome = ({ ContentAbout, Thumbnail }: Props) => {
  return (
    <section className="container py-8 px-4 2xl:px-0">
      <div className="rounded-xl md:rounded-3xl flex flex-col md:flex-row items-center bg-blue">
        <div className="w-full md:w-1/2 px-6 xl:px-12 py-6 text-white">
          <h1 className="text-2xl md:text-4xl text-yellow-300 font-bold">
            {ContentAbout.blockTituloSobre}
          </h1>
          <p className="my-6">{ContentAbout.blockDescricaoSobre}</p>
          <Link href="/a-unicos" className="btn-white text-sm">
            Saiba mais
          </Link>
        </div>
        <div className="w-full md:w-1/2 min-h-[360px] relative">
          <Image
            src={Thumbnail}
            fill
            className="object-cover rounded-br-xl md:rounded-br-3xl rounded-bl-xl md:rounded-bl-none md:rounded-r-3xl"
            alt="Imagem Sobre a Unicos"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
