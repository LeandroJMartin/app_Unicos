import { GetStaticProps, NextPage } from 'next';
import { useState, useEffect } from 'react';
import FilterEmp from '../components/interface/FilterEmp';
import FinanciamentoHome from '../components/interface/Financiamento';
import HeroApp from '../components/interface/Hero';
import ItemListEmpreendimentos from '../components/interface/ItemlistEmpreendimentos';
import { ExecuteAllQuerys } from '../lib/querys';

interface Props {
  apiData: any;
}

const EmpreendimentosApp = ({ apiData }: Props) => {
  const [filterSelected, setFilterSelected] = useState('todos');

  const ItemsFilter = apiData.AllEmp?.map((item: any) => {
    return {
      cidades: item.empreendimento.empCidade,
      tipos: item.empreendimento.empTipoDoEmpreendimento,
    };
  });

  useEffect(() => {
    if (filterSelected) {
      console.log(filterSelected);
    }
  }, [filterSelected]);

  // console.log(apiData.AllEmp[0].empreendimento);

  return (
    <>
      <HeroApp Banners={apiData.banners} />
      <h1 className="title mt-8">Encontre a opção ideal para você</h1>
      <section className="container mb-4">
        <FilterEmp
          SubItems={ItemsFilter}
          filterSelected={filterSelected}
          setFilter={(selected: string) => setFilterSelected(selected)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-12 mb-8">
          {apiData.AllEmp?.map((item: any, index: number) => {
            return <ItemListEmpreendimentos key={index} Item={item} />;
          })}
        </div>
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
