import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Message from './components/Message';
// import Box from './components/Box';
// import Comp1 from './components/Comp1'

class App extends Component {

  constructor(props) {
    console.log('App comp instance created..');
    super(props);
    this.state = {
      message: "greetings",
      showMessage: true
    };
  }

  getChildContext() {
    return { color: "purple" };
  }

  render() {

    console.log('App comp rendered..');
    let message;

    if (this.state.showMessage) {
      message = <Message message={this.state.message} />
    }

    // let menu = {
    //   menu1: 'Idly',
    //   menu2: 'Vada',
    //   menu3: 'poori'
    // }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <hr />

        <div className="container">
          <button className="btn btn-primary" onClick={() => { this.setState({ message: 'Good Morning' }) }}>say GM</button>
          <button className="btn btn-primary" onClick={() => { this.setState({ message: 'Good Noon' }) }}>say GN</button>
          <button className="btn btn-primary" onClick={() => { this.setState({ message: 'Good Evening' }) }}>say GE</button>
          <button className="btn btn-danger" onClick={() => { this.setState({ showMessage: false }) }}>Remove Message</button>
          <hr />
        </div>
        {message}

        {/* <Comp1 prop1="hello.." menu1={menu.menu1} menu2={menu.menu2} menu3={menu.menu3} /> */}
        {/* <Comp1 prop1="hello.." {...menu} /> */}

      </div>
    );
  }

  componentDidMount() {
    //console.log('App::componentDidMount()');
    // n/w call
    //this.setState({ message: 'Hello from server-side' });
  }

}

App.childContextTypes = {
  color: PropTypes.string
};

export default App;
