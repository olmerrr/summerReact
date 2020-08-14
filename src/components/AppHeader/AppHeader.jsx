import React from "react";
import "./AppHeader.css";
const TodoList = (props) =>{
    return (
 <div className="app-header">
     <h1>Todo - list app </h1>
     <p>Осталось {props.toDoCount} дел, сделал {props.doneCount}</p>
 </div>

    );
};
export default TodoList;