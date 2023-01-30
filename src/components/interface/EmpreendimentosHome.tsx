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
    <section className="container">
      <h1 className="title">Encontre a opção ideal para você</h1>
      <div className="emp py-6">
        <SlideApp items={emps} responsive={responsive} gap={120} />
      </div>
      <div className="my-4 text-center">
        <Link href="/empreendimentos" className="btn-off">
          Veja mais
        </Link>
      </div>
    </section>
  );
};

export default EmpeedimentosHome;
