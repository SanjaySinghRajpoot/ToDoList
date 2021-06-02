import React from "react";

export const Todoitem = ({ todo, onDelete }) => {
  return (
    <div>
      <br></br>
      <h4 className="">{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
