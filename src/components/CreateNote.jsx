import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const CreateNote = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const { addNote } = useContext(GlobalContext);
    console.log(addNote)

    const onSubmit = e =>{
        e.preventDefault();

        const createNote ={
            key: Math.floor(Math.random() * 100000000),
            title,
            content
        }

        addNote(createNote)
    }

    return (
        <div>
            <form  onSubmit={onSubmit} className="create-note" >
                <input
                    name="title"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    value={content}
                    onChange={(e)=> setContent(e.target.value)}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button> + </button>
            </form>
        </div>
    )
}
