const FilterEmp = () => {
  return (
    <div className="flex justify-between py-2 px-6 bg-white border border-slate-300 shadow-xl rounded-3xl my-6 relative z-10">
      <button>Todos</button>
      <select>
        <option>Terreno</option>
        <option>Prédio</option>
      </select>
      <select>
        <option>Mirassol</option>
        <option>Rio Preto</option>
      </select>
      <button>Breve Lançamento</button>
      <button>Lançamento</button>
      <button>Em construção</button>
      <button>Entregue</button>
    </div>
  );
};

export default FilterEmp;
