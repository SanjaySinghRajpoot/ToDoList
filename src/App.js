import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Todoitem } from './components/Todoitem';
import {Todo} from "./components/Todo";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the place ",
      desc: "Make it to the market",
    },
    {
      sno: 2,
      title: "Go to the place ",
      desc: "Make it to the market",
    }, 
    {
      sno: 3,
      title: "Go to the place ",
      desc: "Make it to the market",
    }
  ]
  return (
    <>
      <Header title="todolist"/>
      <Todo todos = {todos}  />
    </>
  );
}

export default App;
