import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submitTodo = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      alert("Title or Desc cannot be blank");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h3>Add To do's</h3>
      <form onSubmit={submitTodo}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Try to give it a proper heading
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Content
          </label>
          <input
            type="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)} // to change the state and the value of desc/title
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
