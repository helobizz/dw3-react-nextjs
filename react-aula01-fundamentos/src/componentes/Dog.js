const { NEXT_IS_PRERENDER_HEADER } = require("next/dist/client/components/app-router-headers")

const Dog = ({nome, raca, idade}) => {
    return (
        // Fragment
        <>
            <div>
                <br />
                <p>Nome do pet: {nome}</p>
                <p>Raça do pet: {raca}</p>
                <p>Idade do pet: {NEXT_IS_PRERENDER_HEADER}</p>
            </div>
        </>
    )
}

export default Dog;