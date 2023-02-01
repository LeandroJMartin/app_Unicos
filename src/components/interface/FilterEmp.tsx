import { useRef } from 'react';
import Modal from './FilterMenuDropItem';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';

interface Props {
  SubItems: [
    {
      cidades: string;
      tipos: string;
    }
  ];
}

type showMenuDropType = 'cities' | 'types';

const FilterEmp = ({ SubItems }: Props) => {
  const menuDropCitiesRef = useRef<HTMLDivElement>(null);
  const menuDropTypesRef = useRef<HTMLDivElement>(null);

  const cidades = SubItems.map((item) => item.cidades)
    .filter((item, index, original) => original.indexOf(item) === index)
    .filter(Boolean);

  const tipos = SubItems.map((item) => item.tipos)
    .filter((item, index, original) => original.indexOf(item) === index)
    .filter(Boolean);

  console.log(tipos);

  const toggleMenuDropVisibility = (typeRef: showMenuDropType) => {
    if (typeRef === 'cities') {
      if (!menuDropCitiesRef.current) return;

      menuDropCitiesRef.current.classList.toggle('hidden');
    }

    if (typeRef === 'types') {
      if (!menuDropTypesRef.current) return;

      menuDropTypesRef.current.classList.toggle('hidden');
    }
  };

  return (
    <>
      <div className="bg-white border border-slate-300 shadow-lg py-2 px-6 my-4 rounded-3xl flex md:hidden justify-between items-center">
        <p className="uppercase font-bold text-base">Filtrar</p>
        <TbAdjustmentsHorizontal size={22} />
      </div>

      <div className="hidden md:flex flex-col md:flex-row items-start md:justify-between text-lg md:text-base py-6 md:py-2 px-10 bg-white border border-slate-300 shadow-xl rounded-3xl my-6 relative z-10">
        <button>Todos</button>

        <button
          className="relative"
          onClick={() => toggleMenuDropVisibility('types')}
        >
          <span>Escolha o tipo</span>
          <Modal subitens={tipos} />
        </button>

        <button
          className="relative"
          onClick={() => toggleMenuDropVisibility('cities')}
        >
          <span>Cidade</span>
          {/* <Modal subitens={cidades} /> */}
        </button>

        <button>Breve Lançamento</button>

        <button>Lançamento</button>

        <button>Em construção</button>

        <button>Entregue</button>
      </div>
    </>
  );
};

export default FilterEmp;
