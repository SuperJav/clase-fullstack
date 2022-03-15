import React,{useState,useEffect} from "react";
import noteService from "./services/notes"
//Componente App 
const App=()=>{
    //declaracion de los estados 
    const[notes,setNotes]= useState([])
    const[newNote,setNewNote]=useState("")
    const[showAll,setShowAll]=useState(true)

    useEffect(()=>{
        noteService
            .getAll()
            .then(initialNotes=>{
                setNotes(initialNotes)
            })
    },[])
    
    //Metodo que recibe los evento del envio del formulario
    const addNote =(event)=>{
        //Desativa el recargar la pagina
        event.preventDefault()
        //declaracion de constante que devuelve un objecto y recibe la entrada del input
        const noteObject={
            content:newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
        }
            //declaracion del metodo axios para conetar y obtener informacion del formato json
            noteService
                .create(noteObject)
                .then(returnedNote=>{
                    setNotes(notes.concat(returnedNote))
                    setNewNote("")
                })
    }
    //Metodo que recibe el evento del input
    const handleNoteChange =(event)=>{
        //Estado que recibe el evento del input 
        setNewNote(event.target.value);
    }
    //Variable que devuelve la interfas condicionado que si presiona el boton de filtrar las nota inportante 
    const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)
    //Metodo para cambiar la importancia de una nota
    const toggleImportanceOf=(id)=>{
        //Constante que almacena las nota que coincida con el id que queremos cambiar 
        const note=notes.find(nota=>nota.id === id)
        //Constante que todavia no entiendo debo repasar java script
        const changedNote ={...note,important: !note.important}
        //Peticion al backend json
        noteService
            .update(id,changedNote)
            .then(returnedNote=>{
                setNotes(notes.map(note=>note.id !==id ? note:returnedNote))
            })
            .catch(error=>{
                alert(`la nota ${note.content} ya fue eliminado del servidor`)
                setNotes(notes.filter(n => n.id !== id))
            })
    }
    //Componente que devuleve cada nota con botones
    const Note=({note,toggleImportance})=>{
        const label =note.important?"marcado como no importante":"marcado como importante"
        return(
            <li>
                {note.content}
                <button onClick={toggleImportance}>{label}</button>
            </li>
        )
    }
    return(
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={()=> setShowAll(!showAll)}>
                show {showAll?"important":"all"}
                </button>
            </div>
            <ul>
               {
                notesToShow.map((note,index) =>(
                    <Note 
                        key={note.id} 
                        note={note}
                        toggleImportance={()=>toggleImportanceOf(note.id)}
                    />
                ))
               }
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default App