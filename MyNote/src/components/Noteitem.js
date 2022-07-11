import React from "react";
import { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
function Noteitem(props) {
  const { note , update } = props;
  const context = useContext(noteContext);
  const { deleteNote , editNote } = context;
  return (
    <tr>
      <td>{note.title}</td>
      <td>{note.description}</td>
      <td>{note.tag}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            deleteNote(note._id);
            props.showAlert("Deleted Successfully","success")
          }}
        >
          Delete
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            update(note)
          }}
        >
          EditNote
        </button>
      </td>
    </tr>
  );
}

export default Noteitem;
