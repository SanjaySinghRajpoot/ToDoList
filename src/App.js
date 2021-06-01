import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Todoitem } from "./components/Todoitem";
import {AddTodo} from "./components/AddTodo";
import { Todo } from "./components/Todo";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    setTodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodo] = useState([
    // to update the list

    {
      sno: 1,
      title: "Go to the place ",
      desc: "Make it to the market",
    },
    {
      sno: 2,
      title: "Go to the plac2 ",
      desc: "Make it to the market1",
    },
    {
      sno: 3,
      title: "Go to the place3 ",
      desc: "Make it to the market3",
    },
  ]);
  return (
    <>
      <Header title="todolist" />
      <AddTodo />
      <Todo todo={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
