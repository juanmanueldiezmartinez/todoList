import React, {useState} from "react";

export const Tarea = ({id, name, remover}) => {
    const [clase, setClase] = useState("")

    const tareaRealizada = () => {
        if (clase === "") {
            setClase("tachado")
        }else{
            setClase("")
        }
    }

    return(
        <div className="tareasContenedor">
            <div className="tarea">
                <p className={clase} key={id}>{name} </p>
            </div>
            <div className="botones">
                <span className="tick" onClick={tareaRealizada} >✔️</span>
                <span className="botonEliminar" onClick={() => remover(id)}>🗑️</span>
            </div>
        </div>

    )
}