import { createStore } from 'redux';
import reducer from './reducers/todos';
import {loadState} from './localStorage';

export default createStore(reducer, loadState())
