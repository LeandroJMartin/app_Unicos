import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { EmpSlugs, Empreendimento } from '../../lib/querys';

interface Props {
  apiData: any;
}

interface Icolors {
  [index: string]: string;
}

interface DiferenciaisProps {}

const EmpreendimentoApp = ({ apiData }: Props) => {
  console.log(apiData);
  const TextColor: Icolors = {
    c: 'text-blue2',
    b: 'text-orange-500',
    a: 'text-red-900',
    d: 'text-green-700',
  };

  return (
    <>
      <section className="container">
        <div className="rounded-3xl relative h-[280px] sm:h-[400px] 2xl:h-[600px]">
          <Image
            src={apiData.empImagemDaCapa.sourceUrl}
            alt="Imagem capa empreendimento"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="hidden relative z-10 md:-translate-y-5 md:flex justify-center">
          <div className="drop-shadow-xl border border-slate-300 rounded-2xl py-2 px-4 inline-block bg-white">
            <button className="w-[150px] text-blue">Projeto</button>
            <button className="w-[150px]">Diferenciais</button>
            <button className="w-[150px]">Plantas</button>
            <button className="w-[150px]">Galeria</button>
            <button className="w-[150px]">Localização</button>
          </div>
        </div>
      </section>
      <section className="container my-6">
        <div className="my-6 grid gap-6 grid-cols-1 sm:grid-cols-2">
          <div className="rounded-3xl relative min-h-[470px] h-full">
            <Image
              src={apiData.empImagemPrincipal.sourceUrl}
              alt="Imagem capa empreendimento"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
          <div>
            <div className="max-w-[300px]">
              <img
                src={apiData.empLogotipoDoEmpreendimento.sourceUrl}
                alt="Logotipo do empreendimento"
              />
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: apiData.empDescricao }}
              className="text-xs"
            ></p>
            <div className=" mt-6 mb-2 pr-6">
              {apiData.empEstagioDaObra && (
                <div className="bg-slate-200 h-[10px] rounded-xl">
                  <span
                    className="bg-bgBlue block rounded-xl h-full"
                    style={{
                      width: apiData.empEstagioDaObra
                        ? apiData.empEstagioDaObra + '%'
                        : '0%',
                    }}
                  ></span>
                </div>
              )}
              <div className="flex justify-between items-center mt-1">
                <p>
                  Estágio da obra:
                  <span className={`ml-2 ${TextColor[apiData.empEstagio[0]]}`}>
                    {apiData.empEstagio[1]}
                  </span>
                </p>
                <p>
                  {apiData.empEstagioDaObra
                    ? apiData.empEstagioDaObra + '%'
                    : ''}
                </p>
              </div>
            </div>
            <div
              className="text-blue2"
              dangerouslySetInnerHTML={{ __html: apiData.empCaracteristicas }}
            />
            <button className="btn-on mt-6 w-full sm:w-auto py-4 sm:py-2">
              Quero morar aqui
            </button>
          </div>
        </div>
      </section>
      <section className="container my-6">
        <h1 className="title">Diferenciais</h1>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 my-6">
          {apiData.empDiferencial?.map((item: any, index: number) => {
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
      <section className="container my-6">
        <h1 className="title">Plantas disponíveis</h1>
        {/* empImagensDasPlantas: Array(1) [
      {
        texto: 'Planta Tipo Meio - 49m2',
        imagem: {
          sourceUrl: 'http://localhost:8888/Unicos/Painel/wp-content/uploads/2023/01/planta.jpg',
          __typename: 'MediaItem'
        },
        __typename: 'Empreendimento_Empreendimento_empImagensDasPlantas'
      }
    ],
    empFotos: Array(1) [
      {
        sourceUrl: 'http://localhost:8888/Unicos/Painel/wp-content/uploads/2023/01/gallery.jpeg',
        __typename: 'MediaItem'
      }
    ],
    empImagemDaImplantacao: {
      sourceUrl: 'http://localhost:8888/Unicos/Painel/wp-content/uploads/2023/01/implantacao.jpeg',
      __typename: 'MediaItem'
    },
    empLocalizacao: 'Rua São Benedito, n° 210<br />\r\nBairro Gonzaga de Campos - São José do Rio Preto',
    empEstandeDeVendas: 'Avenida Anísio Haddad, 8001<br />\r\n' +
      'Georgina Business Park - Torre Madri Norte - Sala 413<br />\r\n' +
      'São José do Rio Preto - SP',
    __typename: 'Empreendimento_Empreendimento'
  } */}
        {apiData.empImagensDasPlantas?.map((item: any, index: number) => {
          return (
            <div key={index} className="text-center py-4">
              <p className="font-bold py-3">{item.texto}</p>
              <Image src={item.imagem.sourceUrl} alt={`Planta ${item.texto}`} />
            </div>
          );
        })}
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
    const response = await (
      await Empreendimento.queryExecute(params.slug as string)
    ).emp;

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
