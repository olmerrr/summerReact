import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./components/TodoList/TodoList";
import AppHeader from "./components/AppHeader/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";


    const App = () =>{
    const date = <span>{(new Date()).toLocaleDateString()}</span> //this is React element
    const todoData = [
        {id:0, label: 'Drink coffee',important: false},
        {id:1, label: 'Make awesome App',important: true},
        {id:2, label: 'Drink tea',important: false }

    ]
    return(
        <div>
            {date}
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos = {todoData}/>
        </div>
    )
}
ReactDOM.render(<App/>,
    document.getElementById('root'));
