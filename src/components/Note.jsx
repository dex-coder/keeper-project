import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Note = ({note}) => {
    const {deleteNote} = useContext(GlobalContext)   
    return (
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={()=> deleteNote(note.key)}>Delete</button>
        </div>
    )
}
