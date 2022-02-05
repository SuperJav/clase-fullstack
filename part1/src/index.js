import React from "react";
import reactDom from "react-dom";
import Content from "./components/content";
import Courses from "./components/courses";
// import Header from "./components/header";
// import Content from "./components/content";
// import Part from "./components/part";
// import Total from "./components/total";
//import Courses from "./components/courses";
import Total from "./components/total";

//Declaracion de funcion flecha
const App=()=>{
    //Declaracion de constante
    // const courses={
    //     id:1,
    //     name:"Half stack aplication development",
    //     parts:[
    //     { 
    //         name:"Fundamentals of React",
    //         exercises: 10
    //     },
    //     {
    //         name: "Using props to pass data",
    //         exercises: 7
    //     },
    //     { 
    //         name:"State of a component",
    //         exercises: 14
    //     },
    //     {
    //         name: 'Redux',
    //         exercises: 11,
    //         id: 4,
    //       },
    //     ],}
    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1,
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2,
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3,
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4,
            },
          ],
        },
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1,
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2,
            },
          ],
        },
      ]
       
    return(
        <div>
          <h1>Web development curriculum</h1>
            <Courses courses={courses[0]}/>
            <Courses courses={courses[1]}/>
        </div>
    )
}
reactDom.render(<App/>,document.getElementById('root'))