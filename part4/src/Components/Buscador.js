import React,{ useState,useEffect} from "react";
import reactDom from "react-dom"

//Componente Buscador
const Buscador=(props)=>{

    const {estado}=props
    //Declaracion de variable y estados
    const [ busqueda,setBusqueda]=useState("")
    let casa=[]
    let resultado

    //Metodo para ingresar los evento de la entrada
    const buscador=(event)=>{
        
            setBusqueda(event.target.value)
            // let listbusqueda=[]
            // let mensaje="No encontrado"  
    }
    //Metodo que filtra la busqueda
    const respuesta=()=>{
        // filtra el arrys de estados para buscar un nombre 
        // y a la ves contiene un metodo que no distigue entre minusca y mayuscula
        casa= estado.filter(index=> index.content.localeCompare(busqueda, undefined, { sensitivity: 'base' }) ===0)
        // retorna una lista de los nombre encontrado
         resultado=()=>{return casa.map(index=><h4 key={index.id}>{`${index.content} tel: ${index.tel}`}</h4>)}

        return resultado()
    }

    useEffect(()=>reactDom.render(respuesta(),document.getElementById("resultado")))

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