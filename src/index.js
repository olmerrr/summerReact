import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./components/TodoList/TodoList";
import AppHeader from "./components/AppHeader/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";


const App = () =>{
    const date = <span>{(new Date()).toLocaleDateString()}</span> //this is React element
    const todoData = [
        {label: 'Drink coffee',important: false},
        {label: 'Make awesome App',important: true},
        {label: 'Drink tea',important: false }

    ]
    return(
        <div>
            {date}
            <AppHeader/>
            <TodoList todos={todoData}/>
            <SearchPanel/>
        </div>
    )
}
ReactDOM.render(<App/>,
    document.getElementById('root'));
