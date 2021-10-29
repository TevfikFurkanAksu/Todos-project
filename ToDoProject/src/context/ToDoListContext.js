import React, { createContext, useState } from "react";

export const ToDoListContext = createContext();

const ToDoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { text: "Plan family trip", id: 1 },
    { text: "Go to School", id: 2 },
    { text: "Feed Dog", id: 3 },
  ]);

  const addTodo = (todo) =>{
      setTodos([
          ...todos,
          {text: todo, id: Math.random()}
      ])
  }

  const removeToDo = (id) =>{
      setTodos(todos.filter(todo =>{
          return todo.id !== Number(id);
      }))
  }

  return (
    <ToDoListContext.Provider value={{ todos, addTodo, removeToDo }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export default ToDoListContextProvider;