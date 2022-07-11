import React, { useState } from "react";
import { useContext , useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

function Addnote(props) {

    const context = useContext(noteContext);
    const {addNote} = context

    const [note , setNote] = useState({title:"",description:"",tag:"" })

    const handleclick=(e)=>{
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({title:"",description:"",tag:"" })
        props.showAlert("Note is added Successfully","success")

    }
    const onchange = (e)=>{
        setNote({...note, [e.target.name] : e.target.value})
        console.log(note)
    }


  return (
    <div className="container my-3">
      <div className="container">
        <h1 className="text-center">Add a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              aria-describedby="emailHelp"
              value={note.title}
              onChange={onchange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onchange}
            />
          </div>
          
          <button type="submit" onClick={handleclick} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addnote;
