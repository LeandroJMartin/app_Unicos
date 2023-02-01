import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { SocialLinks, PgAbout } from '../lib/querys';

const SobreUnicos = ({ apiData }: { apiData: any }) => {
  return (
    <section>
      <div className="container">
        <div className="py-4">
          <div className="block w-full h-[220px] lg:h-[500px] relative">
            <Image
              src={apiData.contentAbout.page.featuredImage.node.sourceUrl}
              fill
              className="rounded-xl object-cover object-center"
              alt="imagem capa pagina"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:py-12 gap-2 lg:gap-10">
          <div className="block w-full lg:w-4/12 lg:pr-8 lg:pb-10">
            <img
              src="/sobre/Vector-1.svg"
              className="block mx-auto w-[120px] lg:w-auto aspect-square lg:aspect-auto"
              alt="imagem gráfico"
            />
          </div>

          <div
            className="block w-full lg:w-8/12 text-base"
            dangerouslySetInnerHTML={{
              __html: apiData.contentAbout.page.content,
            }}
          />
        </div>
      </div>

      <div className="flex items-center h-auto my-4 lg:my-0 py-12 bg-whiteBoard">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="block mx-auto mb-12 lg:mb-0">
              <div className="block mx-auto w-[140px]">
                <img src="/sobre/Vector-missao.svg" alt="imagem vector" />
              </div>

              <h3 className="py-2 text-center">
                {apiData.contentAbout.page.paginaSobre.sTituloMissao}
              </h3>

              <p
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html:
                    apiData.contentAbout.page.paginaSobre.sMissaoDescricao,
                }}
              />
            </div>

            <div className="block mx-auto mb-12 lg:mb-0">
              <div className="block mx-auto w-[110px]">
                <img src="/sobre/Vector-visao.svg" alt="imagem vector" />
              </div>

              <h3 className="py-2 text-center">
                {apiData.contentAbout.page.paginaSobre.sTituloVisao}
              </h3>

              <div className="block mx-auto lg:max-w-[50%]">
                <p
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html:
                      apiData.contentAbout.page.paginaSobre.sVisaoDescricao,
                  }}
                />
              </div>
            </div>

            <div className="block mx-auto">
              <div className="block w-[120px]">
                <img src="/sobre/Vector-valores.svg" alt="imagem vector" />
              </div>

              <h3 className="py-2 text-center">
                {apiData.contentAbout.page.paginaSobre.sTituloValores}
              </h3>

              <p
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html:
                    apiData.contentAbout.page.paginaSobre.sValoresDescricao,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center py-4 lg:py-12">
        <div className="container">
          <div className="flex flex-col w-full p-6 lg:p-12 justify-center space-y-4 rounded-xl bg-bgBlue">
            <h2 className="text-3xl text-white text-center font-bold">
              {apiData.contentAbout.page.paginaSobre.sDiretoriaTitulo}
            </h2>

            <p
              className="text-sm lg:text-base text-white"
              dangerouslySetInnerHTML={{
                __html:
                  apiData.contentAbout.page.paginaSobre.sDiretoriaDescricao,
              }}
            />
          </div>
        </div>
      </div>

      <div className="py-4 lg:py-12">
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row gap-4">
            <div className="block w-full lg:w-4/12 lg:p-14">
              <img
                src="/sobre/vector-2.svg"
                className="block mx-auto w-[130px] lg:w-auto aspect-square lg:aspect-auto"
                alt="imagem vetor"
              />
            </div>

            <div className="block w-full lg:w-8/12">
              <div className="space-y-4">
                <h2 className="text-lg lg:text-3xl font-bold">
                  {apiData.contentAbout.page.paginaSobre.sPoliticaTitulo}
                </h2>

                <p
                  className="text-sm lg:text-lg"
                  dangerouslySetInnerHTML={{
                    __html:
                      apiData.contentAbout.page.paginaSobre.sPoliticaDescricao,
                  }}
                />
              </div>

              <div className="flex justify-between lg:justify-start lg:gap-12">
                <img
                  src="/sobre/certificado-1.png"
                  className="block w-[120px] md:w-[180px] lg:w-auto object-contain"
                  alt="imagem certificado"
                />
                <img
                  src="/sobre/certificado-2.png"
                  className="block w-[70px] md:w-[90px] lg:w-auto object-contain"
                  alt="imagem certificado"
                />
                <img
                  src="/sobre/certificado-3.png"
                  className="block w-[60px] md:w-[100px] lg:w-auto object-contain"
                  alt="imagem certificado"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreUnicos;

export const getStaticProps: GetStaticProps = async () => {
  const [{ linksSocialPage }, { contentAbout }] = await Promise.all([
    await SocialLinks.queryExecute(),
    await PgAbout.queryExecute(),
  ]);

  const response = {
    linksSocialPage,
    contentAbout,
  };

  return {
    props: {
      apiData: response,
    },
    revalidate: 30,
  };
};
