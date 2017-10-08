import React from 'react';

const TodoItem = (props) => (
  <div className='List-Wrapper'>
    <li
      className="Todo-Item"
      style={{textDecoration: props.completed ? 'line-through' : 'none'}}
      onClick={props.handleToggle}
    >
      {props.text}
      <button type="button" onClick={props.handleDelete}>Delete</button>
    </li>
  </div>

)

export default TodoItem
