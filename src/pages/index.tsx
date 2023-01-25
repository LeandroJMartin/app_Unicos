import type { GetStaticProps, NextPage } from 'next';
import HeroApp from '../components/interface/hero';
import { ExecuteAllQuerys } from '../lib/querys';

const HomeApp: NextPage = ({ apiData }: any) => {
  return (
    <>
      <HeroApp Banners={apiData.banners} />
      <section>
        <h1>Home</h1>
      </section>
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
