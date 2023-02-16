import type { GetStaticProps, NextPage } from 'next';
import AboutHome from '../components/interface/AboutHome';
import EmpeedimentosHome from '../components/interface/EmpreendimentosHome';
import FinanciamentoHome from '../components/interface/Financiamento';
import HeroApp from '../components/interface/Hero';
import { ExecuteAllQuerys } from '../lib/querys';

const HomeApp: NextPage = ({ apiData }: any) => {
  return (
    <>
      <HeroApp Banners={apiData.banners} />
      <EmpeedimentosHome AllEmp={apiData.AllEmp} />
      <FinanciamentoHome Simulator={apiData.ContentAboutHome} />
      <AboutHome
        ContentAbout={apiData.ContentAboutHome}
        Thumbnail={apiData.thumbnail}
      />
    </>
  );
};

export default HomeApp;

export const getStaticProps: GetStaticProps = async () => {
  const response = await ExecuteAllQuerys();

  return {
    props: {
      apiData: response,
    },
    revalidate: 30,
  };
};
