import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import Filter from './Filter';

class TodosContainer extends React.Component {
    render () {
        return (
            <div className="Todo-Main">
                <TodoInput />
                <TodoList />
                <Filter />
            </div>
        )
    }
}

export default TodosContainer