import React, { useContext } from 'react';
import { Note } from './Note';
import { GlobalContext } from '../context/GlobalState'

function NotesList() {
  const { notes } = useContext(GlobalContext);
  return (
    <>
    {notes.map((note,index) => (<Note  key={index} id={index} note={note} />))}
    </>
    )
}

export default NotesList;