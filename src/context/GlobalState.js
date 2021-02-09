import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'


//*Initial State
const initialState = {
    notes: [ ]
}

//*Create context
export const GlobalContext = createContext(initialState);


//*Provider component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //*Actions
    function addNote(note){
        dispatch({
            type: 'ADD_NOTE',
            payload: note
        });
    }

    function deleteNote(key){
        dispatch({
            type: 'DELETE_NOTE',
            payload: key
        });
    }


    return(<GlobalContext.Provider 
        value={{
            notes: state.notes,
            addNote,
            deleteNote
        }}>
        {children}
    </GlobalContext.Provider>);
}
