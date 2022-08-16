import React, { useState } from "react";
import { Tarea } from "./Tarea";

export const List = () => {
    const [tareas, setTareas] = useState([])
    const [inputValue, setInputValue] = useState("")

    const ingresarTarea = (e) => {
        setInputValue(e.target.value)
    }
    
    const agregarTareas = (e) => {
        e.preventDefault()
        const nuevaTarea = {
            id : +new Date(),
            name : inputValue
        }
        if (inputValue !== "") {
            setTareas([...tareas ,nuevaTarea]) 
            setInputValue("")
        }
        console.log(tareas)
    }


    const removerTarea = (id) => {
        const nuevasTareas = tareas.filter((tarea) => tarea.id !== id)
        setTareas(nuevasTareas)
    }

    const removerTareas = () => {
        setTareas([])
    }

    const mostrarTareas = tareas.map((tarea) => {
        return <Tarea remover={() =>removerTarea(tarea.id)} name={tarea.name} id={tarea.id}></Tarea>
    })
  return (
    <>
      <section className="container">
            <form className="agregarTareas">
                <input autoFocus value={inputValue} onChange={ingresarTarea} className="inputTareas" placeholder="Tarea a realizar"></input>
                <button className="botonAgregar" onClick={agregarTareas}>Agregar</button>
            </form>
            <div className="containerTareas">
                <div className="containerTituloTareas">
                <h3>Tareas</h3>
                <span onClick={removerTareas} className="botonVaciar">Vaciar🗑️</span>
                </div>
                <div className="tareasList">
                {mostrarTareas}
                </div>
            </div>
      </section>
    </>
  );
};
