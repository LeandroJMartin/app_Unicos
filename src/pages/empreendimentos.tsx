import { GetStaticProps, NextPage } from 'next';
import FilterEmp from '../components/interface/FilterEmp';
import FinanciamentoHome from '../components/interface/Financiamento';
import HeroApp from '../components/interface/Hero';
import ItemListEmpreendimentos from '../components/interface/ItemlistEmpreendimentos';
import { ExecuteAllQuerys } from '../lib/querys';

interface Props {
  apiData: any;
}

const EmpreendimentosApp: NextPage = ({ apiData }: any) => {
  const emps = apiData.AllEmp?.map((item: any) => {
    return <ItemListEmpreendimentos Item={item} />;
  });
  return (
    <>
      <HeroApp Banners={apiData.banners} />
      <h1 className="title">Encontre a opção ideal para você</h1>
      <section className="container mb-4">
        <FilterEmp />
        <div className="grid grid-cols-3 gap-10">{emps}</div>
      </section>
      <FinanciamentoHome Simulator={apiData.ContentAboutHome} />
    </>
  );
};

export default EmpreendimentosApp;

export const getStaticProps: GetStaticProps = async () => {
  const response = await ExecuteAllQuerys();

  return {
    props: {
      apiData: response,
    },
    revalidate: 30,
  };
};
