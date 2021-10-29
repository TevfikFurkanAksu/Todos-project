import React from "react";
import Navbar from "./components/Navbar";
import ToDoList from "./components/ToDoList";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";
import ToDoListContextProvider from "./context/ToDoListContext";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <ThemeContextProvider>
          <AuthContextProvider>
            <ToDoListContextProvider>
              <Navbar />
              <ToDoList />
            </ToDoListContextProvider>
          </AuthContextProvider>
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
