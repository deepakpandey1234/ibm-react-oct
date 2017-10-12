import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterBox from './components/CounterBox';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor() {
    super();
    console.log('App instance created');
  }

  render() {
     console.log('App::render()');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <hr />
        <CounterBox title="Hit Counter" />
      </div>
    );
  }
}

export default App;
