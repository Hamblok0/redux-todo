import { createStore } from 'redux';
import reducer from './reducers/todos';

export default createStore(reducer)
