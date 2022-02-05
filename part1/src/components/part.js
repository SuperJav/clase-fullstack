import React from "react";

const Part=(props)=>{

    const {courses}=props;

    
    return (
        courses.parts.map(
            (part,i)=>(<p key={i}>{part.name}  {part.exercises}</p>)
        )
    )
}

export default Part;