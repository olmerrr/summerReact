import React from 'react';
import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import "./App.css";

    const App = () =>{
    const todoData = [
        {id:0, label: 'Drink coffee'},
        {id:1, label: 'Make awesome App'},
        {id:2, label: 'Drink tea'}

    ]
    return(
        <div className="app-wrap">
            <AppHeader/>
            <div className="inner-wrap">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList
                todos = {todoData}
                onDeleted = { (id) => console.log('del', id) }
            />
        </div>
    )
}
export default  App;