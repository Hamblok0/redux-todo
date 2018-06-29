
const todos = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return action.payload

    case 'CREATE_TODO_SUCCESS':
      return [...state, action.payload]
      
    
    case 'DELETE_TODO_SUCCESS':
      return state.filter(todo => todo.id !== action.payload.id)
  

    case 'TOGGLE_TODO_SUCCESS':
      return state.map(todo => {
          if (todo.id !== action.payload.id) {
            return todo;
          } else {
            return action.payload
          }
        })
      
      
    default:
      return state;
  }
};

export default todos
