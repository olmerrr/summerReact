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
    return <h1>
        Todo - list
    </h1>

}
const SearchPanel = () =>{
    return <input placeholder ='search'/>
}
const el = (
  <div>
      <AppHeader/>
      <TodoList/>
      <SearchPanel/>
  </div>
);
ReactDOM.render(el,
    document.getElementById('root'));
