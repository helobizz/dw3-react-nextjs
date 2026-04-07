// Expressões JavaScript
// Como exibir variáveis JS dentro do HTML
const User = () => {
    // devemos criar as variáveis dentro da função do componente
    const name = "Heloísa Vale"
    return(

        <>
            <div>Bem-vindo, {name}</div>
        </>
    )
}

export default User;