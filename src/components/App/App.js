import React, {Component} from 'react';
import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import "./App.css";
import ItemAddForm from "../ItemAddForm/ItemAddForm";

export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Drink cofee', false),
            this.createTodoItem('Lern JS', false),
            this.createTodoItem('Make awesome app on ReactJS', false)
        ],
        term: ''
    };

    createTodoItem(label) {
        return {
            id: this.maxId++,
            label,
            done: false
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            }
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            }
        })
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];

    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };
    search (items, term){
       if( term.length === 0){
           return items;
       }
        return  items.filter( (item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    }
    onSearchChange = (term) => {
        this.setState({
            term
        });
    }
    render() {
        const {todoData, term } = this.state;
        const visibleItems = this.search(todoData,term)
        const doneCount = todoData
            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="app-wrap">
                <AppHeader
                    todo={todoCount}
                    done={doneCount}
                />
                <div className="inner-wrap">
                    <SearchPanel
                    onSearchChange = {this.onSearchChange}
                    />
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm
                    onItemAdded={this.addItem}
                />
            </div>
        )
    }
}
