import { useState, useEffect } from "react";
import styles from "@/components/EditContent/EditContent.module.css";
import axios from "axios";

const EditContent = ({ game }) => {
// Criando estados para armazenar os dados do formulário
    const [id, setId] = useState("")
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  // Efeito colateral -> Será executado assim que o componente é carregado
  useEffect(() => {
    // Existe um jogo selecionado?
    if(game) {
        setId(game._id)
        setTitle(game.title)
        setPlatform(game.platform)
        setGenre(game.descriptions.genre)
        setRating(game.descriptions.rating)
        setYear(game.year)
        setPrice(game.price)
    }
  }, [game]); // Dependência do useEffect. É o que faz o useEffect ser executado novamente, quando aquela informação (o jogo) for alterado

    return (
        <>
            {/* CARD EDIÇÃO */}
            <div className={styles.editModal} id={styles.editModal}>
                <div className={styles.editContent}>
                    <span className={styles.modalClose}>
                        &times;
                    </span>
                    {/* TITLE */}
                    <div className="title">
                        <h2>Editar jogo</h2>
                    </div>
                    <form id="editForm">
                        <input 
                        type="hidden" 
                        name="id" />
                        <input
                            type="text"
                            name="title"
                            placeholder="Insira o novo título"
                            className="inputPrimary"
                            required
                            
                        />
                        <input
                            type="text"
                            name="platform"
                            placeholder="Insira a nova plataforma do jogo"
                            className="inputPrimary"
                            required
                            
                            
                        />
                        <input
                            type="text"
                            name="genre"
                            placeholder="Insira o gênero do jogo"
                            className="inputPrimary"
                            required
                            
                            
                        />
                        <input
                            type="text"
                            name="rating"
                            placeholder="Insira a classificação do jogo"
                            className="inputPrimary"
                            required
                            
                        />
                        <input
                            type="number"
                            name="year"
                            placeholder="Insira o novo ano"
                            className="inputPrimary"
                            required
                            
                        />
                        <input
                            type="text"
                            name="price"
                            placeholder="Insira o novo preço"
                            className="inputPrimary"
                            required
                            
                        />
                        <input type="submit" value="Alterar" className="btnPrimary" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditContent;
