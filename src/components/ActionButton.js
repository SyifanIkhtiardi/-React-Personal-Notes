import React from "react";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchivedButton";

function ActionButton({id, onDelete, onArchive}) {
    <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchivedButton id={id} onArchive={onArchive} />
    </div>
}

export default ActionButton;