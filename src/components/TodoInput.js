import React from 'react';
import {connect} from 'react-redux';
import {updateCurrent, addTodo} from '../actions';


class TodoInput extends React.Component {
  render() {
    const handleUpdate = (event) => {
      const val = event.target.value
      this.props.updateCurrent(val)
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      this.props.addTodo(this.props.current)
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

export default connect((state) => ({current: state.current}), {updateCurrent, addTodo})(TodoInput);
