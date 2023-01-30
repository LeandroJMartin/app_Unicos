interface Props {
  value: string;
}

const InfoPrice = ({ value }: Props) => {
  return (
    <div>
      <p>Parcelas a partir de R$ {value}</p>
    </div>
  );
};

export default InfoPrice;
