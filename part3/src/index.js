import React,{ useState } from "react";
import ReactDom from "react-dom";


const notes=[
    {
        id:1,
        content:"Html is easy",
        date:"2019-05-30T17:30:31.098Z",
        important:true,
    },
    {
        id:2,
        content:"Browser can execute only JavaScript",
        date:"2019-05-30T18:39:34.091Z",
        important:false,
    },
    {
        id:3,
        content:"GET and POST are the most important methods of HTTP protocol",
        date:"2019-05-30T19:20:14.298Z",
        important:true,
    },
]
//let newNotes=[]
const App=(props)=>{

    const[notes,setNotes]= useState(props.notes)
    const[newNote,setNewNote]=useState("")
    const[showAll,setShowAll]=useState(true)

    
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
ReactDom.render(<App notes={notes}/>,document.getElementById('root'))
