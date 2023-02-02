import Link from 'next/link';
import ItemListEmpreendimentos from './ItemlistEmpreendimentos';
import SlideApp from './Slide';

interface Props {
  AllEmp: any;
}

const EmpeedimentosHome = ({ AllEmp }: Props) => {
  const emps = AllEmp?.map((item: any) => {
    return <ItemListEmpreendimentos Item={item} />;
  });

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <section className="container py-8">
      <h1 className="title">Encontre a opção ideal para você</h1>
      <div className="emp mt-8">
        <SlideApp items={emps} responsive={responsive} />
      </div>
      <div className="text-center mt-4">
        <Link href="/empreendimentos" className="btn-off">
          Veja mais
        </Link>
      </div>
    </section>
  );
};

export default EmpeedimentosHome;
