import { TbAdjustmentsHorizontal } from 'react-icons/tb';

interface Props {
  SubItems: [
    {
      cidades: string[];
      tipos: string[];
    }
  ];
}

const FilterEmp = ({ SubItems }: Props) => {
  const Modal = ({ subitens }: { subitens: string }) => {
    return (
      <div className="absolute py-4 px-4 bg-white">
        {SubItems.map((item, index) => {
          return (
            <button key={index} className="block">
              {item.cidades}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="bg-white border border-slate-300 shadow-lg py-2 px-6 my-4 rounded-3xl flex justify-between items-center">
        <p className="uppercase font-bold text-base">Filtrar</p>
        <TbAdjustmentsHorizontal size={22} />
      </div>
      <div className="flex flex-col md:flex-row items-start md:justify-between text-lg md:text-base py-6 md:py-2 px-10 bg-white border border-slate-300 shadow-xl rounded-3xl my-6 relative z-10">
        <button>Todos</button>
        <button>Escolha o tipo</button>
        <Modal subitens="tipos" />
        <button>Cidade</button>
        <Modal subitens="cidades" />
        <button>Breve Lançamento</button>
        <button>Lançamento</button>
        <button>Em construção</button>
        <button>Entregue</button>
      </div>
    </>
  );
};

export default FilterEmp;
