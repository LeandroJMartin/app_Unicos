import Image from 'next/image';
import ImgFinanceHome from '../../../public/sobrehome.svg';

interface Props {
  Simulator: {
    simuladorTitulo: string;
    simuladorDescricao: string;
  };
}

const FinanciamentoHome = ({ Simulator }: Props) => {
  return (
    <section className="py-8 bg-whiteBoard">
      <div className="container flex flex-col md:flex-row items-center text-center">
        <div className="w-full md:w-1/3">
          <Image
            src={ImgFinanceHome}
            alt="Image"
            className="mx-auto block w-[40%] xl:w-[90%]"
          ></Image>
        </div>
        <div className="w-full md:w-2/3 ">
          <h1 className="title">{Simulator.simuladorTitulo}</h1>
          <p>{Simulator.simuladorDescricao}</p>
          <form action="" className="mt-6">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full md:w-[calc(50%-16px)] my-2 md:mx-2"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full md:w-[calc(50%-16px)] my-2 md:mx-2"
            />
            <input
              type="tel"
              placeholder="Seu whatsapp"
              className="w-full md:w-[calc(50%-16px)] my-2 md:mx-2"
            />
            <input
              type="text"
              placeholder="Renda familiar"
              className="w-full md:w-[calc(25%-16px)] my-2 md:mx-2"
            />
            <input
              type="text"
              placeholder="Valor para entrada"
              className="w-full md:w-[calc(25%-16px)] my-2 md:mx-2"
            />
            <p className="mt-4 mb-2">
              Trabalhou por mais de 3 anos sob o regime de FGTS?
            </p>
            <div className="flex justify-center items-center">
              <label htmlFor="sim">
                <input type="radio" name="fgts" id="sim" value="sim" />
                <span className="ml-1">Sim</span>
              </label>
              <label htmlFor="nao" className="ml-3 sm:ml-8">
                <input type="radio" name="fgts" id="nao" value="nao" />
                <span className="ml-1">Não</span>
              </label>
              <label htmlFor="nao" className="ml-3 sm:ml-8">
                <input type="text" name="valorfgts" className="w-[80px] py-1" />
                <span className="ml-1">informe o valor</span>
              </label>
            </div>
            <input
              type="submit"
              value="Descubra agora"
              className="btn-on mt-6"
            />
          </form>
          <p className="text-[10px] py-2">Texto LGPD</p>
        </div>
      </div>
    </section>
  );
};

export default FinanciamentoHome;
