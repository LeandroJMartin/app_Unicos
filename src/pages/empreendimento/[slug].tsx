import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import MapApp from '../../components/interface/Map';
import SlideApp from '../../components/interface/Slide';
import { SocialLinks, Empreendimento, EmpSlugs } from '../../lib/querys';

interface Props {
  apiData: any;
}

interface Icolors {
  [index: string]: string;
}

interface DiferenciaisProps {}

const EmpreendimentoApp = ({ apiData }: Props) => {
  const TextColor: Icolors = {
    c: 'text-blue2',
    b: 'text-orange-500',
    a: 'text-red-900',
    d: 'text-green-700',
  };

  const Plantas = apiData.emp.empImagensDasPlantas?.map(
    (item: any, index: number) => {
      return (
        <div key={index} className="item text-center py-4">
          <p className="font-bold py-3">{item.texto}</p>
          <div className="relative h-[300px] sm:h-[450px]">
            <Image
              src={item.imagem.sourceUrl}
              alt={`Planta ${item.texto}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      );
    }
  );

  const Gallery = apiData.emp.empFotos?.map((item: any, index: number) => {
    return (
      <div className="sm:px-8">
        <div
          key={index}
          className="item relative h-[200px] sm:h-[450px] xl:sm:h-[550px] rounded-3xl"
        >
          <Image
            src={item.sourceUrl}
            alt="Foto do empreendimento"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <section className="container">
        <div className="rounded-3xl relative h-[280px] sm:h-[400px] 2xl:h-[600px]">
          <Image
            src={apiData.emp.empImagemDaCapa.sourceUrl}
            alt="Imagem capa empreendimento"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="hidden relative z-10 md:-translate-y-5 md:flex justify-center">
          <div className="drop-shadow-xl border border-slate-300 rounded-2xl py-2 px-4 inline-block bg-white">
            <a href="#projeto" className="w-[150px] inline-block text-blue">
              Projeto
            </a>
            <a href="#diferenciais" className="w-[150px] inline-block">
              Diferenciais
            </a>
            <a href="#plantas" className="w-[150px] inline-block">
              Plantas
            </a>
            <a href="#galeria" className="w-[150px] inline-block">
              Galeria
            </a>
            <a href="#localizacao" className="w-[150px] inline-block">
              Localização
            </a>
          </div>
        </div>
      </section>

      <section id="projeto" className="container my-6">
        <div className="my-6 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 rounded-3xl relative min-h-[470px] h-full order-2 lg:order-1">
            <Image
              src={apiData.emp.empImagemPrincipal.sourceUrl}
              alt="Imagem capa empreendimento"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="max-w-[300px]">
              <img
                src={apiData.emp.empLogotipoDoEmpreendimento.sourceUrl}
                alt="Logotipo do empreendimento"
              />
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: apiData.emp.empDescricao }}
              className="text-xs"
            ></p>
            <div className=" mt-6 mb-2 pr-6">
              {apiData.emp.empEstagioDaObra && (
                <div className="bg-slate-200 h-[10px] rounded-xl">
                  <span
                    className="bg-bgBlue block rounded-xl h-full"
                    style={{
                      width: apiData.emp.empEstagioDaObra
                        ? apiData.emp.empEstagioDaObra + '%'
                        : '0%',
                    }}
                  ></span>
                </div>
              )}
              <div className="flex justify-between items-center mt-1">
                <p>
                  Estágio da obra:
                  <span
                    className={`ml-2 ${TextColor[apiData.emp.empEstagio[0]]}`}
                  >
                    {apiData.emp.empEstagio[1]}
                  </span>
                </p>
                <p>
                  {apiData.emp.empEstagioDaObra
                    ? apiData.emp.empEstagioDaObra + '%'
                    : ''}
                </p>
              </div>
            </div>
            <div
              className="text-blue2"
              dangerouslySetInnerHTML={{
                __html: apiData.emp.empCaracteristicas,
              }}
            />
            <button className="btn-on mt-6 w-full sm:w-auto py-4 sm:py-2">
              Quero morar aqui
            </button>
          </div>
        </div>
      </section>

      <section id="diferenciais" className="container my-6">
        <h1 className="title">Diferenciais</h1>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 my-6">
          {apiData.emp.empDiferencial?.map((item: any, index: number) => {
            return (
              <div key={index} className="text-center py-4">
                <img
                  className="mx-auto max-w-[100px] block"
                  src={item.icone.sourceUrl}
                  alt={`icone ${item.nome}`}
                />
                <p className="font-bold py-3">{item.nome}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="platas" className="container my-6">
        <h1 className="title">Plantas disponíveis</h1>
        <SlideApp items={Plantas} />
      </section>

      <section id="galeria" className="bg-blue py-8">
        <div className="container">
          <h1 className="title text-white mb-6">Galeria de fotos</h1>
          <SlideApp items={Gallery} />
        </div>
      </section>

      <section id="implantacao" className="container py-8">
        <h1 className="title">Implantação</h1>
        <div className="max-h-[650px] flex">
          <img
            src={apiData.emp.empImagemDaImplantacao.sourceUrl}
            alt="Foto da Implantação"
            className="mx-auto object-contain"
          />
        </div>
      </section>

      <section className="container py-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-[75%] md:pr-6">
            <MapApp />
          </div>
          <div className="w-full md:w-[25%] mt-6 md:mt-0">
            <h2 className="text-blue2 text-xl font-bold">Localização</h2>
            <p
              dangerouslySetInnerHTML={{ __html: apiData.emp.empLocalizacao }}
            />
            <h2 className="text-blue2 text-xl font-bold mt-6">
              Estande de Venda
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: apiData.emp.empEstandeDeVendas,
              }}
            />
          </div>
        </div>
      </section>

      <section id="localizacao" className="container text-center">
        <h1 className="title">Gostaria de conhecer mais?</h1>
        <p>Tire suas dúvidas com um consultor</p>
        <form
          action="https://novo.mayacomunicacao.com.br/homologacao/teste/index.php"
          method="post"
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-8 justify-center"
        >
          <input type="text" name="name" placeholder="Seu nome" />
          <input type="email" name="email" placeholder="Seu e-mail" />
          <input type="tel" name="tel" placeholder="Telefone" />
          <div className="col-span-1 sm:col-span-3">
            <input type="submit" value="Tenho interesse" className="btn-on" />
          </div>
        </form>
      </section>
    </>
  );
};

export default EmpreendimentoApp;

export const getStaticPaths: GetStaticPaths = async () => {
  const SlugsEmps = await (await EmpSlugs.queryExecute()).slugs;

  const paths = SlugsEmps?.map((emp: { slug: string }) => {
    return {
      params: {
        slug: emp.slug,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && params.slug) {
    const [{ linksSocialPage }, { emp }] = await Promise.all([
      await SocialLinks.queryExecute(),
      await Empreendimento.queryExecute(params.slug as string),
    ]);

    const response = {
      linksSocialPage,
      emp,
    };

    return {
      props: {
        apiData: response,
      },
      revalidate: 30,
    };
  }

  return {
    notFound: true,
  };
};
