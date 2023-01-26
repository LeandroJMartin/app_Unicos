import Link from 'next/link';

const EmpeedimentosHome = () => {
  return (
    <section className="container">
      <h1 className="title">Encontre a opção ideal para você</h1>
      <div className="h-[400px] bg-blue w-[33%]">Produto</div>
      <div className="my-4 text-center">
        <Link href="/empreendimentos" className="btn-off">
          Veja mais
        </Link>
      </div>
    </section>
  );
};

export default EmpeedimentosHome;
