import React from 'react';
import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import "./App.css";

    const App = () =>{
    const todoData = [
        {id:0, label: 'Drink coffee',important: false},
        {id:1, label: 'Make awesome App',important: true},
        {id:2, label: 'Drink tea',important: false }

    ]
    return(
        <div className="app-wrap">
            <AppHeader/>
            <div className="inner-wrap">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos = {todoData}/>
        </div>
    )
}
export default  App;