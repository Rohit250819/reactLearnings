import React, { useState } from "react";

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) =>{
        e.preventDefault();//prevent from loading page
        if(!title || !desc)
            alert("Title or Description cannot be blank");
        else{
            props.addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
       
    }
  return (
    <div className="container my-3">
    <h4>
        Add a Todo
    </h4>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">Todo title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            aria-describedby="emailHelp"
            placeholder="Enter title of Todo"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Todo Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange ={(e)=>{setDesc(e.target.value)}}
            placeholder="Enter what r u planning"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
};
