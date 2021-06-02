import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Todoitem } from "./components/Todoitem";
import { AddTodo } from "./components/AddTodo";
import { Todo } from "./components/Todo";
import React, { useState } from "react";

function App() {
  let initTodo;

  if (localStorage.getItem("todos")) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    let sno;

    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodo([...todos, myTodo]); //copy the whole array and add mytodo at last

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodo] = useState([initTodo]);

  return (
    <>
      <Header title="todolist" />
      <AddTodo addTodo={addTodo} />
      <Todo todo={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
