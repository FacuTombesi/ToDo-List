import { useEffect, useState } from "react";
import { ToDoList } from "./components/ToDoList";
import { ToDoForm } from "./components/ToDoForm";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS"); // Tomo los valores de localStorage y los guardo en una variable
    if (localValue == null) return []; // Si esa variable esta vacia, seteo el useState inicial en un arrayt vacio
    return JSON.parse(localValue); // De lo contrario, devuelvo lo que tenia en localStorage
  }); // Creo un estado para la lista de items

  // useEffect se encarga del localStorage para evitar que se pierdan datos cada vez que se recarga la pagina
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos)) // Cada vez que se ejecuta useEffect guardo los items nuevos en el localStorage
  }, [todos] /* Cada vez que todos cambia se ejecuta useEffect */);

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