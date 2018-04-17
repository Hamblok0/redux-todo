
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let todoId = '_' + Math.random().toString(36).substr(2, 9);
      return {
        todos: state.todos.concat({
          id: todoId,
          text: action.payload,
          completed: false
        }),
        current: ""
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload) {
            return todo;
          } else {
            return {
              ...todo,
              completed: !todo.completed
            };
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
