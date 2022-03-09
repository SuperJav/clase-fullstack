import React from "react";
//Componente Formulario
const Form=(props)=>{

    const {eventForm,valueName,eventEntrada,valueTelefono}=props

    return (
        <form onSubmit={eventForm}>
           <div>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={valueName}
                    required
                    onChange={eventEntrada}/>
           </div>
           <div>
                <label htmlFor="telefono">Telefono:</label>
                <input 
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={valueTelefono}
                    required
                    onChange={eventEntrada}/>
           </div>

            <button type="submit">add</button>
        </form>
    )
}

export default Form