import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/todos';
import thunk from 'redux-thunk';

let initialState = {
    todos: [],
    current: ""
}

export default createStore(reducer, initialState, applyMiddleware(thunk))
