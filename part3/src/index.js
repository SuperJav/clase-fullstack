import React from "react";
import ReactDom from "react-dom";
//import axios from "axios";
//import BaseDatos from "./db.json"
import App from "./App"
    
///////////////////////////////////////////////////////////
//const promise2 =axios.get('http://localhost:3001/foobar')
//console.log(promise2)
///////////////////////////////////////////////////////////
// axios
// .get("http://localhost:3001/notes")
// .then(response =>{
//     const notes=response.data
//     ReactDom.render(<App notes={notes}/>,document.getElementById('root'))
//     console.log(notes)
// })
//////////////////////////////////////////////////
//let notes=BaseDatos.notes
/////////////////////////////////////////

ReactDom.render(<App/>, document.getElementById("root"))


