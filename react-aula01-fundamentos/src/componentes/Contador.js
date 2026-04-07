// Importando o hook useState (estados)
import { useState } from "react";

const Contador = () => {
    // Estados:
    // count: idnetificador do estado
    // setCount: função que altera o estado
    // useState(0): valor inicial do estado
    const [count, setCount] = useState(0);

    // Variáveis não re-renderizam o componente (o componenete não se recarrega, por isso não atualiza)
    let numero = 0;
    console.log(numero)

    return (
        <>
        <div>
            <br />
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Aumentar</button>
        </div>
        </>
    )
}
export default Contador;