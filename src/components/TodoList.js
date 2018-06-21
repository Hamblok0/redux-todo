import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './TodoItem';
import {toggleTodo, deleteTodo, filterTodos} from '../actions';

class TodoList extends React.Component{

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

export default connect((state, ownProps) => ({todos: filterTodos(state.todos, ownProps.filter)}), {toggleTodo, deleteTodo})(TodoList);
