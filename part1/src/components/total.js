import React from "react";

const Total=(props)=>{
    const {courses}=props

    let total=0

    courses.parts.forEach(element => {
        total+=element.exercises; 
    });
    
    return (
        <h4>Total of {total} exercises</h4>
    )
}
export default Total;