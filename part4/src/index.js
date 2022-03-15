import { useEffect, useState } from "react"
import reactDom from "react-dom"
import Buscador from "./Components/Buscador"
import Form from "./Components/Form"
import services from "./services/telefonos"

//Componente App
const App=()=>{
    //Declaracion de estados 
    const [ persons,setPersons ]=useState([])
    const [ newName,setNewName ] =useState([])
    const [ newTelefono,setNewTelefono] =useState([])

        //devuleve el arhivo json del servidor local
        useEffect(()=>{
            services
            .getAll()
            .then(respuesta=>{
                setPersons(respuesta)
            })
        },[])

    //funcion flecha que atrapa los evento del formulario padre fom
    const addForm=(event)=>{
        //desativa la regarga de la pagina 
        event.preventDefault()
        let nombreObject ={
            name:newName,
            number:newTelefono,
            
        }
        //Condicional que busca un nombre en comun
        if(persons.find(item => item.name === nombreObject.name)){
            //Variable que contiene el id que contiene el nombre igual
            let usuario=persons.find(item => item.name === nombreObject.name).id
            //Envia un mensaje ante de hacer el cambio de numero
            window.confirm(`${newName} Existe, se remplazara el numero si aceptas`)?
            //peticion al servidor del archivo json para cambiar el numero de telefono
            services.update(usuario,nombreObject).then(retornarContatos=>{
                //Nose debo estudiar java script puro
                setPersons(persons.map(persona=>persona.id !== usuario?persona:retornarContatos))
            })
            //se envia este mensaje cuando se cancela la confirmacion
            :alert("contacto destacado")
           
        }else{
            //Almacena nuevo conctato en el archivo json del servidor
            services.create(nombreObject)
                .then(retornarPersonas=>{
                   //Se almacena el nuevo contacto en el estado de personas
                    setPersons(persons.concat(retornarPersonas))
                    //Limpia las dos entrada cuando se envie el formulario
                    setNewName("")
                    setNewTelefono("")
                })
        }          
    }
    //Metodo que atrapa los evento de la entrada
    const handleNoteChange = (event) => {
        //Condicional para almacenar los valores
        event.target.type ==="text"?
         setNewName(event.target.value):
         setNewTelefono(event.target.value) 
      }
    //Metodo para borrar contacto
    const borrar=(id,name)=>{
            
            window.confirm(`Seguro que quiere eliminar ${name}`)?
            services.borrar(id).catch(error=>{
                alert("Ya este contacto a sido borrado")
            }):
            alert("Contacto no eliminado")
         
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
                    <ul>
                        {persons.map(usuario=>
                        <li key={usuario.id}>
                            {`${usuario.name} Tel: ${usuario.number}`}
                            <button key={usuario.id} onClick={()=>borrar(usuario.id,usuario.name)}>Borrar</button>
                        </li>)}
                    </ul>
            </div>
        </div>
    )
}
reactDom.render(<App/>,document.getElementById("root"));