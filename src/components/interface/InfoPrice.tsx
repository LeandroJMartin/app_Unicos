interface Props {
  value: string;
}

const InfoPrice = ({ value }: Props) => {
  return (
    <div className="py-4 px-3 bg-bgBlue">
      <p className="text-white text-center">{value}</p>
    </div>
  );
};

export default InfoPrice;
