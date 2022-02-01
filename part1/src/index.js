import React from "react";
import reactDom from "react-dom";

//Declaracion de funcion flecha
const App=()=>{
    //Declaracion de constante
    const courses={
        name:"Half stack aplication development",
        parts:[
        { 
            name:"Fundamentals of React",
            exercises1: 10
        },
        {
            name: "Using props to pass data",
            exercises2: 7
        },
        { 
            name:"State of a component",
            exercises3: 14
        }]}

    return(
        
        <div>
            <Header course={courses.name}/>
            <Content parte={courses.parts[0].name} exercises={courses.parts[0].exercises1}/>
            <Content parte={courses.parts[1].name} exercises={courses.parts[1].exercises2}/>
            <Content parte={courses.parts[2].name} exercises={courses.parts[2].exercises3}/>
            <Total total={courses.parts[0].exercises1 + courses.parts[1].exercises2 + courses.parts[2].exercises3}/>
        </div>
    )
}

//Declaracion del componente Header
const Header=(props)=>{
    return(
        <h1>{props.course}</h1>
    )
}
//Declaracion del componente Content
const Content=(props)=>{
    return(
        <p>{props.parte} {props.exercises}</p>
    )
}
//Declaracion del componente Total
const Total=(props)=>{
    return(
        <p>Number of exercises {props.total}</p>
    )
}


reactDom.render(<App/>,document.getElementById('root'))