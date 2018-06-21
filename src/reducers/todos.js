
const todos = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return {...state, todos: action.payload}

    case 'CREATE_TODO_SUCCESS':
      return {
        todos: state.todos.concat({
          id: action.payload.id,
          text: action.payload.text,
          completed: action.payload.completed
        }),
        current: ""
      }
    
    case 'DELETE_TODO_SUCCESS':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }

    case 'TOGGLE_TODO_SUCCESS':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.id) {
            return todo;
          } else {
            return {
              ...action.payload
            }
          }
        })
      };

    case 'UPDATE_CURRENT':
      return {...state, current: action.payload}


    default:
      return state;
  }
};

export default todos
