import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TodoContainer from './components/TodosContainer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header"/>
        <Router>
          <div className="wrapper">
            <Route path="/todos" component={TodoContainer} />
          </div>
        </Router>
      </div>
    );
  }
}


export default App
