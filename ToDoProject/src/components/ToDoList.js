import React, { Component,useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ToDoListContext } from "../context/ToDoListContext";

/*class ToDoList extends Component {

    static contextType = ThemeContext;
      
    render() {
        const {isDarkTheme, darkTheme, lightTheme, changeTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;

        return (
          <div style={{background: theme.background, color:theme.text, height:'140px', textAlign:'center'}}>
            <p className="item">Plan famil trip</p>
            <p className="item">Plan famil trip Plan famil trip</p>
            <p className="item">Plan famil trip Plan famil trip Plan famil trip</p>
            <button className="ui button primary" onClick={changeTheme}>Change The Theme</button>
          </div>
        );
      }
    } */ // contexttype ile context kullanımı

const ToDoList = () => {//usecontext ile context kullanımı

  const [todo, setTodo] = useState('')

  const {isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const {todos, addTodo, removeToDo} = useContext(ToDoListContext)

  const handleChange = e =>{
    setTodo(e.target.value)
  };

  const handleFormSubmit = e =>{
    e.preventDefault();
    addTodo(todo)
  };

  const handleRemoveTodo = e =>{
    const id = e.target.id;
    removeToDo(id)
  }

  return (
    <div style={{background: theme.background, color:theme.text,  textAlign:'center'}}>
      {
        todos.length ? (
          todos.map(todo => {
            return <p className="item" key={todo.id} id={todo.id}  > {todo.text} 
                  <button id={todo.id} onClick={handleRemoveTodo} className="ui red button"  style={{marginLeft:"1rem", marginTop:'0.5rem'}}>Delete</button> </p>
          })
        ) :(
          <div>
            You Have No Todos
          </div>
        )
      }
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='todo' > Add New ToDo:</label> 
        <div className="ui input focus" style={{marginLeft:"1rem"}}>
        <input type="text" id="todo" onChange={handleChange}/>
        </div>
        <input className="ui primary button" type="submit" value="Add New Todo" style={{marginLeft:"1rem"}}/>
        <button className="ui button primary" onClick={changeTheme} style={{marginTop:'1rem'}}>Change The Theme</button>
      </form>
    </div>
  );
}


export default ToDoList;
