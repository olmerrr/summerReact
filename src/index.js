import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./components/TodoList/TodoList";
import AppHeader from "./components/AppHeader/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";


const App = () =>{
    const date = <span>{(new Date()).toLocaleDateString()}</span> //this is React element

    return(
        <div>
            {date}
            <AppHeader/>
            <TodoList/>
            <SearchPanel/>
        </div>
    )
}
ReactDOM.render(<App/>,
    document.getElementById('root'));
