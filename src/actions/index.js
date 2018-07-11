import Axios from "axios";

export const updateCurrent = (val) => ({type:'UPDATE_CURRENT', payload: val})
export const setFilter = (filter) => ({type:'SET_FILTER', payload: filter})
export const filterTodos = (todos, filter) => {
  switch(filter) {
    case 'ACTIVE':
      return todos.filter(t => !t.completed)
    case 'COMPLETED':
      return todos.filter(t => t.completed)
    default:
      return SortDefault(todos);
  }

  function SortDefault(todos) {
    let todoArrayComplete = [];
    let todoArrayNotComplete = [];
    for (let todo of todos) {
      if(todo.completed) 
        todoArrayComplete.push(todo);
       else 
        todoArrayNotComplete.push(todo);
    }
    return todoArrayNotComplete.concat(todoArrayComplete);
  }
}

// API actions 
const apiUrl = "http://5b2ac0383a8ea3001418d7dc.mockapi.io/todos"
export const fetchTodosSuccess = (todos) => ({type: "FETCH_TODOS_SUCCESS", payload: todos})
export const fetchTodos = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchTodosSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
}

export const createTodoSuccess = (todo) => ({type: "CREATE_TODO_SUCCESS", payload: todo})
export const createTodo = (todo) => {
  return (dispatch) => {
    return Axios.post(apiUrl, todo)
      .then(response => {
        dispatch(createTodoSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
}

export const toggleTodoSuccess = (todo) => ({type: "TOGGLE_TODO_SUCCESS", payload: todo})
export const toggleTodo = (todo) => {
  let editedTodo = {
    ...todo,
    completed: !todo.completed
  }
  return (dispatch) => {
    return Axios.put(apiUrl + '/' + todo.id, editedTodo)
      .then(response => {
        dispatch(toggleTodoSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
}

export const deleteTodoSuccess = (todo) => ({type: "DELETE_TODO_SUCCESS", payload: todo})
export const deleteTodo = (id) => {
  return (dispatch) => {
    return Axios.delete(apiUrl + '/' + id)
      .then(response => {
        dispatch(deleteTodoSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
}

const URL = 'localhost:3000/api/users'

export const authenticated = () => ({type: "AUTHENTICATED"})
export const signIn = ({email, password}) => {
  return (dispatch) => {
    return Axios.post(URL + '/signin', {email, password})
      .then(response => {
        dispatch(authenticated());
        localStorage.setItem('user', response.data.token);
      })
      .catch(error => {
        throw(error)
      })
  }
};

export const signUp = ({email, password}) => {
  return (dispatch) => {
    return Axios.post('/signup', {email, password})
      .then(response => {
        dispatch(authenticated());
        localStorage.setItem('user', response.data.token);
      })
      .catch(error => {
        throw(error);
      })
  }
};