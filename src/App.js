import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header"/>
        <Router>
          <div className="wrapper">
            <div className="Todo-Main">
              <TodoInput />
              <Route path='/:filter?' render={({match}) => (
                <TodoList filter={match.params.filter} />
              )} />
              <Filter />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}


export default App
