import { useRef } from 'react';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import SubMenuButtonItem from './SubMenuButtonItem';

interface Props {
  SubItems: {
    cidades: string;
    tipos: string;
  }[];
  filterSelected: string;
  setFilter: (selected: string) => void;
}

type showMenuDropType = 'cities' | 'types';

const FilterEmp = ({ SubItems, setFilter, filterSelected }: Props) => {
  const menuDropCitiesRef = useRef<HTMLDivElement>(null);
  const menuDropTypesRef = useRef<HTMLDivElement>(null);

  const cidades = SubItems.map((item) => item.cidades)
    .filter((item, index, original) => original.indexOf(item) === index)
    .filter(Boolean);

  const tipos = SubItems.map((item) => item.tipos)
    .filter((item, index, original) => original.indexOf(item) === index)
    .filter(Boolean);

  const toggleMenuDropVisibility = (typeRef: showMenuDropType) => {
    if (typeRef === 'cities') {
      if (!menuDropCitiesRef.current) return;

      menuDropTypesRef?.current?.classList.add('hidden');
      menuDropCitiesRef.current.classList.toggle('hidden');
    }

    if (typeRef === 'types') {
      if (!menuDropTypesRef.current) return;

      menuDropCitiesRef?.current?.classList.add('hidden');
      menuDropTypesRef.current.classList.toggle('hidden');
    }
  };

  const closeMenuDrop = () => {
    menuDropCitiesRef?.current?.classList.add('hidden');
    menuDropTypesRef?.current?.classList.add('hidden');
  };

  const handleClickOnFilter = (value: string) => {
    closeMenuDrop();
    setFilter(value);
  };

  return (
    <>
      <div className="bg-white border border-slate-300 shadow-lg py-2 px-6 my-4 rounded-3xl flex md:hidden justify-between items-center">
        <p className="uppercase font-bold text-base">Filtrar</p>
        <TbAdjustmentsHorizontal size={22} />
      </div>

      <div className="hidden md:flex flex-col md:flex-row items-start md:justify-between text-lg md:text-base py-6 md:py-2 px-10 bg-white border border-slate-300 shadow-xl rounded-3xl my-6 relative z-10">
        <button
          className={`${
            filterSelected === 'todos' ? 'text-blue' : 'text-current'
          }`}
          onClick={() => handleClickOnFilter('todos')}
        >
          Todos
        </button>

        <div
          className="relative select-none cursor-pointer"
          onClick={() => toggleMenuDropVisibility('types')}
        >
          <span>Escolha o tipo</span>
          <SubMenuButtonItem
            items={tipos}
            ref={menuDropTypesRef}
            filterSelected={filterSelected}
            setFilter={(selected: string) => handleClickOnFilter(selected)}
          />
        </div>

        <div
          className="relative select-none cursor-pointer"
          onClick={() => toggleMenuDropVisibility('cities')}
        >
          <span>Cidade</span>
          <SubMenuButtonItem
            items={cidades}
            ref={menuDropCitiesRef}
            filterSelected={filterSelected}
            setFilter={(selected: string) => handleClickOnFilter(selected)}
          />
        </div>

        <button
          className={`${
            filterSelected === 'breve_lancamento' ? 'text-blue' : 'text-current'
          }`}
          onClick={() => handleClickOnFilter('breve_lancamento')}
        >
          Breve Lançamento
        </button>

        <button
          className={`${
            filterSelected === 'lancamento' ? 'text-blue' : 'text-current'
          }`}
          onClick={() => handleClickOnFilter('lancamento')}
        >
          Lançamento
        </button>

        <button
          className={`${
            filterSelected === 'em_construcao' ? 'text-blue' : 'text-current'
          }`}
          onClick={() => handleClickOnFilter('em_construcao')}
        >
          Em construção
        </button>

        <button
          className={`${
            filterSelected === 'entregue' ? 'text-blue' : 'text-current'
          }`}
          onClick={() => handleClickOnFilter('entregue')}
        >
          Entregue
        </button>
      </div>
    </>
  );
};

export default FilterEmp;
