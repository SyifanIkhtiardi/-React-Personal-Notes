import React from "react";
import NoteItemContent from "./NoteItemContent";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchivedButton";

function NoteItem ({title, createdAt, body, id, onDelete, onArchive, isArchived}) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} date={createdAt} body={body} />
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchivedButton id={id} onArchive={onArchive} isArchived={isArchived} />
            </div>
        </div>
    );
}

export default NoteItem;