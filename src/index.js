import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () =>{
    return(
        <ul>
            <li>Lern ReactJS</li>
            <li>Build Awesome App</li>
        </ul>
    );
};
const AppHeader = () => {
    const headerStyle = {fontSize: '20px'}
    return <h1 style = {headerStyle}>
        Todo - list
    </h1>

}
const SearchPanel = () =>{
    return <input placeholder ='search'/>
}

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
