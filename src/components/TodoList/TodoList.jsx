import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({todos}) =>{
    const elements  = todos.map( (item)=>{
        return (
            <li>
                <TodoListItem
                    // label = {item.label}
                    // important = {item.important}
                    { ... item }
                    />
            </li>
        )
    })
    return (
        <ul>
            {elements}
         </ul>
        );
};
export default TodoList;