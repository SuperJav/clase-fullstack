import { useState } from "react"
import reactDom from "react-dom"
import Buscador from "./Components/Buscador"
import Form from "./Components/Form"
import Usuarios from "./Components/Usuarios"
import "./estilos.css"
//Componente App
const App=()=>{
    //Declaracion de estados 
    const [ persons,setPersons ]=useState([{
        content:"Super javi",
        tel:"823-344-4333",
        date:new Date().toISOString(),
        id:0
    }])
    
    const [ newName,setNewName ] =useState([])
    const [ newTelefono,setNewTelefono] =useState([])
    //funcion flecha que atra los evento del formulario padre fom
    const addForm=(event)=>{
        //desativa la regarga de la pagina 
        event.preventDefault()
        let nombreObject ={
            content:newName,
            tel:newTelefono,
            date: new Date().toISOString(),
            id: persons.length +1
        }
        //Condicional que busca un nombre en comun
        persons.find(item => item.content === nombreObject.content)?
            alert(`${newName} Existe en sus Contacto!!`):
            setPersons(persons.concat(nombreObject))
    }
    //Metodo que atrapa los evento de la entrada
    const handleNoteChange = (event) => {
        //Condicional para almacenar los valores
        event.target.type ==="text"?
         setNewName(event.target.value):
         setNewTelefono(event.target.value) 
      }
    return (
        <div className="contenedor">
            
            <div className="header">
                <h2>Phonebook</h2>
                <Buscador 
                    estado={persons}
                    className="entrada"/>
                    
                <div 
                    id="resultado">
                </div>
            </div>

            <h3>Agregar nuevo Contacto</h3>
            <Form 
                eventForm={addForm}
                valueName={newName}
                valueTelefono={newTelefono}
                eventEntrada={handleNoteChange}/>
            <div className="lista">
                <h3>Numbers</h3>
                <Usuarios persons={persons}/>
            </div>
        </div>
    )
}
reactDom.render(<App/>,document.getElementById("root"));