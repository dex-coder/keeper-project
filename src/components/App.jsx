import React from 'react';
//import Footer from './Footer';
import Header from './Header';
import NotesList from './NotesList';
import { CreateNote } from "../components/CreateNote";
import { GlobalProvider }  from "../context/GlobalState"





function App(){
    return (
        <GlobalProvider>
            <Header />
            <CreateNote />
            <NotesList />
           
        </GlobalProvider>
    )
}

export default App;



