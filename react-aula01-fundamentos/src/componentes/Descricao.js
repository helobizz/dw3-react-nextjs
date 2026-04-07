// Props são as propriedades do componente, ele recebe propriedades 
const Descricao = (props) => {
    return (
        <>
            <div>
                <p>A cidade do usuário é: {props.cidade}</p>
                <p>A idade do usuário é: {props.idade}</p>
            </div>
        </>
    )
}

export default Descricao;