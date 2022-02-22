import React,{useState,useEffect} from "react";
import axios from "axios"
//import ReactDom from "react-dom"

// axios
// .get("http://localhost:3001/notes")
// .then(response =>{
//     const notes=response.data
//     ReactDom.render(<App notes={notes}/>,document.getElementById('root'))
//     console.log(notes)
// })

const App=()=>{

    const[notes,setNotes]= useState([])
    const[newNote,setNewNote]=useState("")
    const[showAll,setShowAll]=useState(true)

    useEffect(()=>{
        console.log("effect")
        axios.get("http://localhost:3001/notes")
        .then(response =>{
            console.log("promise fulfilled")
            setNotes(response.data)
            
        })
    }, [])
    console.log("render",notes.length,"notes")
    
    const addNote =(event)=>{
        event.preventDefault()
        const noteObject={
            content:newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id:notes.length+1,
        }
       setNotes(notes.concat(noteObject))
       setNewNote("")
    }
    const handleNoteChange =(event)=>{
        console.log(event.target.value);
        setNewNote(event.target.value);
    }
    const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)
    return(
        
        <div>
            
            <h1>Notes</h1>
            <div>
                <button onClick={()=> setShowAll(!showAll)}>
                show {showAll?"important":"all"}
                </button>
                
            </div>

            <ul>
               {notesToShow.map(note =>(
               <li key={note.id}>{note.content}</li>))}
            </ul>

            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default App