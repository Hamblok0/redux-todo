import { createStore, applyMiddleware, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import todos from './reducers/todos';
import filter from './reducers/filter';
import current from './reducers/current';
import authenticated from './reducers/auth';
import thunk from 'redux-thunk';

let initialState = {
    todos: [],
    filter: "SHOW_ALL",
    current: "",
    authenticated: "UNAUTHENTICATED"
}

const rootReducer = combineReducers({
    todos,
    filter,
    current,
    authenticated
})

export default createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
