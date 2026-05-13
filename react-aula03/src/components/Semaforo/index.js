// Importando o CSS do componente
import styles from "@/components/Semaforo/Semaforo.module.css"
// Importando Hook para usar useState
import {useState} from "react"

const Semaforo = () => {
    // criando os estados para controlar as cores
    const [cor, setCor] = useState("cinza")
    return(
        <>
        <div
        // css inline
        style={
            {
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#000000"
            }
        }
        >
            <h3
            style={{marginTop: "30px"}}>
                Semáforo em React
            </h3>
            <br />
            <div className={`${styles.luz} ${cor === "vermelha" ? styles.vermelha : styles.cinza}`}></div>
            <div className={`${styles.luz} ${cor === "amarelo" ? styles.amarela : styles.cinza}`}></div>
            <div className={`${styles.luz} ${cor === "verde" ? styles.verde : styles.cinza}`}></div>
            <br />
            <div>
                <button className="button" 
                onClick={() => setCor("vermelha")}>
                    Pare
                </button>
                <button className="button"
                onClick={() => setCor("amarelo")}
                >
                    Atenção!
                </button>
                <button className="button"
                onClick={() => setCor("verde")}
                >
                    Prossiga
                </button>
            </div>
        </div>
        </>
    )
}

export default Semaforo;