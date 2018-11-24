import React, { Component } from 'react';
import './css/App.css';
import { Switch, Route } from 'react-router-dom'
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component = {Container} />
        </Switch>
      </div>
    );
  }
}

export default App;
