import React from "react";
import NoteItemList from "./NoteItemList";
import { getInitialData } from '../utils/index';
import NoteInput from "./NoteInput";
import NoteHeader from "./NoteHeader";

class NoteApp extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            notes : getInitialData(),
            search: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearch = this.onSearch.bind(this);
        
    }
    
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map(note => note.id === id ? {...note, archived: !note.archived}: note);
        this.setState({notes});
    }

    onSearch(event) {
        this.setState(() => {
            return {
                search: event.target.value,
            }
        })
    }

    onAddNoteHandler({title,createdAt, body}) {
        this.setState((prevState) => {
            return {
                notes:[
                    ...prevState.notes,
                    {
                        id: new Date().toISOString(),
                        title,
                        createdAt,
                        body,
                        archived:false,
                    }
                ]
            }
        })
    }
    
    render () {
        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
        const NoteList = notes.filter((note) => {
            return note.archived === false;
        });
        const archivedNotes = notes.filter((note) => {
            return note.archived === true;
        })
    return (
        <>
        <NoteHeader search={this.state.search} onSearch={this.onSearch} />
        <div className="note-app__body">
            <NoteInput addNote={this.onAddNoteHandler} />
            <h2>Catatan Aktif</h2>
            <NoteItemList notes={NoteList}  onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
            <h2>Arsip</h2>
            <NoteItemList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        </div>
    </>    
    );
    }
}

export default NoteApp;