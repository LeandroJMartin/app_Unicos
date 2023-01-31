interface Props {
  value: string;
}

const InfoPrice = ({ value }: Props) => {
  return (
    <div className="py-4 px-3 bg-bgBlue">
      <p className="text-white flex items-center justify-center">
        Parcelas a partir de
        <span className="text-2xl ml-2 font-bold text-yellow-400">
          R$ {value}
        </span>
      </p>
    </div>
  );
};

export default InfoPrice;
