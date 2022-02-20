import React from "react";

const Usuarios=(props)=>{
    const {persons}=props

    return(
        <div>
            <ul>
                {persons.map(usuario=>
                 <li key={usuario.id}>
                {`${usuario.content}
                 Tel: ${usuario.tel}`}
                 </li>)}
            </ul>
        </div>
    )



}

export default Usuarios