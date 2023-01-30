interface Props {
  tag: string[];
}

interface Icolor {
  [index: string]: string;
}

const TagApp = ({ tag }: Props) => {
  const colorsTags: Icolor = {
    breve_lancamento: 'bg-blue2',
    lancamento: 'bg-orange-500',
    em_construcao: 'bg-red-900',
    entregue: 'bg-green-700',
  };
  return (
    <span
      className={`absolute top-3 left-0 z-10 text-white py-1 px-2 rounded-r-lg ${
        colorsTags[tag[0]]
      }`}
    >
      {tag[1]}
    </span>
  );
};

export default TagApp;
