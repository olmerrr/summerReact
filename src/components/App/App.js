import React, {Component} from 'react';
import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import "./App.css";

export default class App extends Component {
    state = {
        todoData: [
            {id: 0, label: 'Drink coffee'},
            {id: 1, label: 'Make awesome App'},
            {id: 2, label: 'Drink tea'}

        ]
    };
    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex( (el) => el.id === id );
            const newArray = [... todoData.slice(0, idx), ... todoData.slice(idx + 1)];
            return {
                todoData: newArray
            }
        });
    };


    render() {
        return (
            <div className="app-wrap">
                <AppHeader/>
                <div className="inner-wrap">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
            </div>
        )
    }
}
