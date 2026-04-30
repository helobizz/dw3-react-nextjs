import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";
// Importando o AXIOS
import axios from "axios"; // Biblioteca que permite consumir a API
// Importando os hooks useState e useEffect (hook - serve p ser usado dentro de componentes)
// useEffect - efeito colateral do componente (função)(é o que eu chamo primeiro após o componente ser renderizado(toda vez que tem uma mudança de estado))
import { useState, useEffect } from "react";

const HomeContent = () => {
  // Criando um estado para a lista de jogos
  const [games, setGames] = useState([]); // Estado inicial = Array vazio (ficará assim até eu ir na api)
  const [loading, setLoading] = useState(true);
  // hook useEffect -> efeito colateral do componente
  useEffect(() => {
    // Aqui vai a lógica do useEffect
    // Função para buscar os jogos na API
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:4000/games")
        // console.log(response)
        // Passando a lista de jogos para o estado
        setGames(response.data.games) // guardei no estado somente a lista de jogos
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => setLoading(false), 3000);
      }
    }
    // invocando a função dentro do useEffect
    fetchGames();
  }, []) // dependencia do useEffect
  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          {/* TITLE */}
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
      </div>

      {/* se o estado for verdadeiro: */}
          {loading ? (<Loading loading={loading}/> 
          // se o estado for falso:
          ) : (

          <div className={styles.games} id={styles.games}>
            {/* Lista de jogos irá aqui */}
            {/* Percorrendo a lista de jogos */}
            {games.map((game) => (
              <ul className={styles.listGames} key={game._id}>
                <div className={styles.gameImg}>
                  <img src="images/game_cd_cover.png" alt="Jogo em estoque" />
                </div>
                {/* Informações do jogo */}
                <div className={styles.gameInfo}>
                  <h3>{game.title}</h3>
                  <li>Plataforma: {game.descriptions.platform}</li>
                  <li>Gênero: {game.descriptions.genre}</li>
                  <li>Classificação: {game.descriptions.rating}</li>
                  <li>Ano: {game.year}</li>
                  <li>Preço: {game.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}</li>
                </div>
              </ul>
            ))}
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeContent;
