import styles from "@/components/Semaforo/Semaforo.module.css"
import {useState} from "react"

const Tom = () => {
    const[ton, setTon] = useState("cinza")

    return(
        <>
            <div
            style={
            {
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#342121ff"
            }
        }>
                <h3>Claro e Escuro</h3>

                <br />
                <div className={`${styles.ton} ${ton === "vermelha" ? styles.vermelha : styles.cinza}`}>

                </div>
                <br />
                <div>
                    <button className="button" onClick={() => setTon("vermelha")}>Branco</button>
                    <button className="button" onClick={() => setTon("vermelha")}>Escuro</button>
                </div>
            </div>
        </>
    )
}

export default Tom;
