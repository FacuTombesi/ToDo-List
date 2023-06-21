import { useState } from "react";
import { ToDoList } from "./components/ToDoList";
import { ToDoForm } from "./components/ToDoForm";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]); // Y creo un estado para la lista de items

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    });
  };

  // Funcion que permite marcar en el checkbox los items que ya fueron realizados
  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  };

  // Funcion que borra los items de la lista
  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    })
  };


  return (
    <>
      <ToDoForm addTodo={addTodo} />
      <h1 className="header">ToDo List</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
};