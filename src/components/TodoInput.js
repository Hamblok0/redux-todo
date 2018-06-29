import React from 'react';
import {connect} from 'react-redux';
import {updateCurrent, createTodo} from '../actions';


class TodoInput extends React.Component {
  render() {
    const handleUpdate = (event) => {
      const val = event.target.value
      this.props.updateCurrent(val)
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      let todo = {
        text: this.props.current,
        completed: false
      }
      this.props.updateCurrent("")
      this.props.createTodo(todo)
    }
    return (
      <form onSubmit={handleSubmit}>
        <input className="Todo-Input"
          type="text"
          onChange={handleUpdate}
          value={this.props.current}
          placeholder="Todo..."
          />
      </form>
    )
  }
}

export default connect((state) => ({current: state.current}), {updateCurrent, createTodo})(TodoInput);
