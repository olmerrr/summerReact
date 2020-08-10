import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./components/TodoList/TodoList";
import AppHeader from "./components/AppHeader/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import ItemStatusFilter from "./components/ItemStatusFilter/ItemStatusFilter";
import "./index.css";

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
ReactDOM.render(<App/>,
    document.getElementById('root'));
