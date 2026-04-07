import { useState } from "react";

const Form = () => {
    // Criando os estados
    // Capturar valores através do formulário
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("")

    // Criando a função que irá lidar com a submissão do formulário
    const hadleSubmit = (event) => {

        event.preventDefault() // evitar o comportamento padrão (que é recarregar a página),

        // Aqui os dados serão enviados
        console.log(nome);
        console.log(sobrenome);
        console.log(email);
        // Aqui seria enviado uma requisição POST para a API com as informações a serem cadastradas
    }

    return (
        <>
        <br />
        <h1>Formulário de cadastro:</h1>
        <br />
        <form onSubmit={hadleSubmit}> {/* executa algo quando o formulário for submetido */}
            <input 
            type="text" 
            placeholder="Insira seu nome" 
            value={nome}
            // "Quando o valor da input mudar, pegue o novo valor (e.target.value) e atualize o estado com esse valor."
            onChange={(e) => setNome(e.target.value)}/> {/* gatilho = mudança no nome */}
            {/* target.value => pega o valor digitado em value e atualiza */}

            <input 
            type="text" 
            placeholder="Insira seu sobrenome" 
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}/>

            <input 
            type="text" 
            placeholder="Insira seu e-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <button type="submit">Enviar</button>
        </form>
        <br />
        {nome} <br />
        {sobrenome} <br />
        {email} <br />
        </>
    )
}
export default Form;