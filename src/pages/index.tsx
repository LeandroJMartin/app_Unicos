import type { GetStaticProps, NextPage } from 'next';
import EmpeedimentosHome from '../components/interface/Empreendimentos';
import FinanciamentoHome from '../components/interface/financiamento';
import HeroApp from '../components/interface/Hero';
import { ExecuteAllQuerys } from '../lib/querys';

const HomeApp: NextPage = ({ apiData }: any) => {
  return (
    <>
      <HeroApp Banners={apiData.banners} />
      <EmpeedimentosHome />
      <FinanciamentoHome />
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
