import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './TodoItem';
import {toggleTodo, deleteTodo, filterTodos, fetchTodos} from '../actions';

class TodoList extends React.Component{
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <ul className="Todo-List">
        {this.props.todos.map(todo => (<TodoItem
          key={todo.id}
          {...todo}
          handleToggle={() => this.props.toggleTodo(todo)}
          handleDelete={() => this.props.deleteTodo(todo.id)}
          />)
          )
        }
      </ul>
    )
  }
}

export default connect((state) => ({todos: filterTodos(state.todos, state.filter)}), {toggleTodo, deleteTodo, fetchTodos})(TodoList);
