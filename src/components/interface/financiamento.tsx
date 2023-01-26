import Image from 'next/image';
import ImgFinanceHome from '../../../public/sobrehome.svg';

const FinanciamentoHome = () => {
  return (
    <section className="container px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3">
          <Image
            src={ImgFinanceHome}
            alt="Image"
            className="mx-auto block w-[40%] xl:w-full"
          ></Image>
        </div>
        <div className="w-full md:w-2/3 ">
          <h1 className="title">Descubra seu potencial de financiamento</h1>
          <p>
            Encontre uma opção que cabe no seu bolso. Preencha o formulário
            abaixo e descubra seu potencial de financiamento.
          </p>
          <form action="">
            <input type="text" placeholder="Seu nome" />
            <input type="email" placeholder="Seu e-mail" />
            <input type="tel" placeholder="Seu whatsapp" />
            <input type="text" placeholder="Renda familiar" />
            <input type="text" placeholder="Valor para entrada" />
            <p>Trabalhou por mais de 3 anos sob o regime de FGTS?</p>
            <div className="flex">
              <label htmlFor="sim">
                <input type="radio" name="fgts" id="sim" value="sim" />
                Sim
              </label>
              <label htmlFor="nao">
                <input type="radio" name="fgts" id="nao" value="nao" />
                Não
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinanciamentoHome;
