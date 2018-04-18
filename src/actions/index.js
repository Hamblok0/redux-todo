export const updateCurrent = (val) => ({type:'UPDATE_CURRENT', payload: val})
export const addTodo = (val) => ({type: 'ADD_TODO', payload: val})
export const toggleTodo = (id) => ({type: 'TOGGLE_TODO', payload: id})
export const deleteTodo = (id) => ({type: 'DELETE_TODO', payload: id})
export const filterTodos = (todos, filter) => {
  switch(filter) {
    case 'active':
      return todos.filter(t => !t.completed)
    case 'completed':
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
