import Link from 'next/link';
import SlideApp from './Slide';

interface Props {
  AllEmp: {};
}

const EmpeedimentosHome = ({ AllEmp }: Props) => {
  return (
    <section className="container">
      <h1 className="title">Encontre a opção ideal para você</h1>
      <SlideApp items={AllEmp} />
      <div className="my-4 text-center">
        <Link href="/empreendimentos" className="btn-off">
          Veja mais
        </Link>
      </div>
    </section>
  );
};

export default EmpeedimentosHome;
