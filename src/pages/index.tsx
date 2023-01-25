import type { GetStaticProps, NextPage } from 'next'
import { ExecuteAllQuerys } from '../lib/querys'

const HomeApp: NextPage = () => {
  return (
    <section>
      <h1>Home</h1>
    </section>
  )
}

export default HomeApp;

export const getStaticProps: GetStaticProps = async () => {
  const result = await ExecuteAllQuerys();

  return {
    props: {
      apiData: result
    },
    revalidate: 30
  };
};
