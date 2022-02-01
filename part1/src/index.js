import React from "react";
import reactDom from "react-dom";

//Declaracion de funcion flecha
const App=()=>{
    //Declaracion de constante
    const course= "Half stack aplication development";
    const part1= "Fundamentals of React";
    const exercises1= 10;
    const part2= "Using props to pass data";
    const exercises2= 7;
    const part3= "State of a component";
    const exercises3= 14;
        <div>
            <h1>{course}</h1>
            <p>{part1} {exercises1}</p>
            <p>{part2} {exercises2}</p>
            <p>{part3} {exercises3}</p>
            <p>Number of exercises{exercises1 + exercises2 + exercises3}</p>
        </div>

    return(

        <div>
            <Header course={course}/>
            <Content parte={part1} exercises={exercises1}/>
            <Content parte={part2} exercises={exercises2}/>
            <Content parte={part3} exercises={exercises3}/>
            <Total total={exercises1 + exercises2 + exercises3}/>
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