import Contador from "@/componentes/Contador";
import Descricao from "@/componentes/Descricao";
import Dog from "@/componentes/Dog";
import Form from "@/componentes/Form";
import MeuComponente from "@/componentes/meuComponente";
import User from "@/componentes/Users";

export default function Home() {
  return (
    <>
      <h1>Olá, mundo!</h1>
      <p>Bem-vindo ao meu primeiro site em React.</p>
      <MeuComponente/>
      <br/>
      <User/>
      <br />
      {/* Chamando os componentes Descricao e passando os dados externos para ele */}
      <Descricao cidade="Registro" idade={18}/>
      {/* Desestruturação da Props */}
      <Dog nome="Rex" raca="Pitbull" idade={4} />

      {/* Hook useState */}
      <Contador />

      {/* Formulário */}
      <Form></Form>
    </>
  );
}