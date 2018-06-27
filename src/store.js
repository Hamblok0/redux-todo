import { createStore, applyMiddleware, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import todos from './reducers/todos';
import filter from './reducers/filter';
import current from './reducers/current';
import thunk from 'redux-thunk';

let initialState = {
    todos: [],
    filter: "SHOW_ALL",
    current: ""
}

const rootReducer = combineReducers({
    todos,
    filter,
    current
})

export default createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
