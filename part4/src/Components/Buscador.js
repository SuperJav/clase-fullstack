import React,{ useState,useEffect} from "react";
import reactDom from "react-dom"

//Componente Buscador
const Buscador=(props)=>{
    //Recibe como propieda el estado que almacena toda la informacion
    const {estado}=props
    
    //Declaracion de variable y estados
    const [ busqueda,setBusqueda]=useState("")
    let filtre=[]
    let resultado

    //Metodo para ingresar los evento de la entrada
    const buscador=(event)=>{

            setBusqueda(event.target.value)
    }
    //Metodo que filtra la busqueda
    const respuesta=()=>{
        // filtra el arrys de estados para buscar un nombre 
        // y a la ves contiene un metodo que no distigue entre minusca y mayuscula
        filtre= estado.filter(index=> index.name.localeCompare(busqueda, undefined, { sensitivity: 'base' }) ===0)

        // Metodo que retorna una lista de los nombre encontrado
         resultado=()=>{return filtre.map(index=><h4 key={index.id}>{`${index.name} tel: ${index.number}`}</h4>)}
        return resultado()
    }
    useEffect(()=>
            reactDom.render(respuesta(),document.getElementById("resultado")))

        return(
            <>
                <input 
                    type="text"
                    value={busqueda}
                    onChange={buscador}
                    placeholder="Buscador de Contacto"/>
            </>
)}
export default Buscador