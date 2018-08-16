import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Alias</h1>
        </header>
        <footer>
            footer
        </footer>
      </div>
    );
  }
}

export default App;
