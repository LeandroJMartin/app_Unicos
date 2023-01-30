import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { SocialLinks, PgAbout } from '../lib/querys';

const SobreUnicos = ({ apiData }: { apiData: any }) => {
  console.log(apiData.contentAbout.page.paginaSobre);

  return (
    <section>
      <div className="container">
        <div className="py-4">
          <div className="block w-full h-[320px] lg:h-[500px] relative">
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

      <div className="flex items-center h-[400px] bg-whiteBoard">
        <div className="container">
          <div className="grid grid-cols-3">
            <div className="block mx-auto">
              <div className="block w-[140px]">
                <img src="/sobre/Vector-missao.svg" alt="imagem vector" />
              </div>

              <h3 className="py-2 text-center">
                {apiData.contentAbout.page.paginaSobre.sTituloMissao}
              </h3>
            </div>

            <div className="block mx-auto">
              <div className="block w-[110px]">
                <img src="/sobre/Vector-visao.svg" alt="imagem vector" />
              </div>

              <h3 className="py-2 text-center">
                {apiData.contentAbout.page.paginaSobre.sTituloVisao}
              </h3>
            </div>

            <div className="block mx-auto">
              <div className="block w-[120px]">
                <img src="/sobre/Vector-valores.svg" alt="imagem vector" />
              </div>

              <h3 className="py-2 text-center">
                {apiData.contentAbout.page.paginaSobre.sTituloVisao}
              </h3>
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
