import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from'./store';
import {saveState} from './localStorage';

console.log(store.getState())

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
