import React, { Component } from 'react';
import logo from './teselagen-white-text.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TeselaGen's DevOps Example</h1>
        </header>
        <p className="App-intro">
          This solution is used to demo how to follow TeselaGen's DevOps process.
        </p>
      </div>
    );
  }
}

export default App;
