export const FormDuvidas = () => {
  return (
    <form
      action=""
      method="post"
      className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5"
    >
      <input type="text" name="nome" placeholder="Seu nome" />
      <input type="email" name="email" placeholder="Seu e-mail" />
      <input type="tel" name="tel" placeholder="Telefone" />
      <textarea
        name="msg"
        placeholder="Mensagem"
        className="col-span-1 md:col-span-3"
      ></textarea>
      <div className="col-span-1 md:col-span-3 justify-items-center grid">
        <input type="submit" value="Enviar" className="btn-on" />
      </div>
    </form>
  );
};

export const FormSuaArea = () => {
  return (
    <form
      action=""
      method="post"
      className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5"
    >
      <input type="text" name="nome" placeholder="Seu nome" />
      <input type="email" name="email" placeholder="Seu e-mail" />
      <input type="tel" name="tel" placeholder="Telefone" />
      <input type="text" name="matricula" placeholder="Matrícula do imóvel" />
      <input type="text" name="endarea" placeholder="Endereço da área" />
      <input type="text" name="total" placeholder="Total em m²" />
      <textarea
        name="msg"
        placeholder="Mensagem"
        className="col-span-1 md:col-span-3"
      ></textarea>
      <div className="col-span-1 md:col-span-3 justify-items-center ">
        <div className="flex justify-center items-center">
          <input type="file" name="file" />
          <input type="submit" value="Enviar" className="btn-on ml-4" />
        </div>
      </div>
    </form>
  );
};

export const FormContato = () => {
  return (
    <form
      action=""
      method="post"
      className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5"
    >
      <input type="text" name="nome" placeholder="Seu nome" />
      <input type="email" name="email" placeholder="Seu e-mail" />
      <input type="tel" name="tel" placeholder="Telefone" />
      <textarea
        name="msg"
        placeholder="Mensagem"
        className="col-span-1 md:col-span-3"
      ></textarea>
      <div className="col-span-1 md:col-span-3 justify-items-center ">
        <div className="flex justify-center items-center">
          <input type="file" name="file" />
          <input type="submit" value="Enviar" className="btn-on ml-4" />
        </div>
      </div>
    </form>
  );
};
