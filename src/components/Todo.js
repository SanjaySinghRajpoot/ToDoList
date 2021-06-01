import React from "react";
import { Todoitem } from "./Todoitem";

export const Todo = (props) => {
  return (
    <div className="container">
      <h3 className="text-center">Todo's List</h3>
      {props.todo.length === 0
        ? "its done for today"
        : props.todo.map((todo) => {
            return (
              <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
