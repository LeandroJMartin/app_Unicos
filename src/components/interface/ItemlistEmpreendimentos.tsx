import Image from 'next/image';
import Link from 'next/link';
import ButtonEmp from './ButtonEmp';
import InfoPrice from './InfoPrice';
import TagApp from './Tag';
import { CiLocationOn } from 'react-icons/ci';

interface Props {
  Item: {
    slug: string;
    empreendimento: {
      empEtapa: string[];
      empImagemPrincipal: {
        sourceUrl: string;
      };
      parcelasAPartirDe: string;
      empLogotipoDoEmpreendimento: {
        sourceUrl: string;
      };
      empCaracteristicas: string;
      empEstagioDaObra: number;
      empEstagio: string;
      empCidade: string;
    };
  };
}

interface Icolors {
  [index: string]: string;
}

const ItemListEmpreendimentos = ({ Item }: Props) => {
  console.log(Item);

  const TextColor: Icolors = {
    c: 'text-blue2',
    b: 'text-orange-500',
    a: 'text-red-900',
    d: 'text-green-700',
  };

  const { empreendimento: emp } = Item;

  return (
    <Link
      href={'/empreendimento/' + Item.slug}
      className="relative border border-slate-300 rounded-xl"
    >
      <TagApp tag={emp.empEtapa} />
      <div className="h-[320px] relative">
        <Image
          src={emp.empImagemPrincipal?.sourceUrl}
          alt={'Imagem ' + Item.slug}
          fill
          className="object-cover"
        />
      </div>
      <InfoPrice value={emp.parcelasAPartirDe} />
      <div className="flex items-center justify-between">
        <div className="w-[150px] h-[100px] relative">
          <Image
            src={emp.empLogotipoDoEmpreendimento?.sourceUrl}
            alt="Logo empreendimento"
            fill
            className="object-contain"
          />
        </div>
        <div
          className="text-blue2"
          dangerouslySetInnerHTML={{ __html: emp.empCaracteristicas }}
        />
      </div>
      {emp.empEstagioDaObra && (
        <div className="bg-slate-200 h-3 w-full rounded-xl">
          <span
            className="bg-bgBlue block rounded-xl h-full"
            style={{
              width: emp.empEstagioDaObra ? emp.empEstagioDaObra + '%' : '0%',
            }}
          ></span>
        </div>
      )}
      <div className="flex justify-between items-center">
        <p>
          Estágio da obra:{' '}
          <span className={TextColor[emp.empEstagio[0]]}>
            {emp.empEstagio[1]}
          </span>
        </p>
        <p>{emp.empEstagioDaObra ? emp.empEstagioDaObra + '%' : ''}</p>
      </div>
      <ButtonEmp />
      {emp.empCidade && (
        <p className="flex items-center justify-center">
          <CiLocationOn size={20} />
          <span className="ml-2">{emp.empCidade}</span>
        </p>
      )}
    </Link>
  );
};

export default ItemListEmpreendimentos;
