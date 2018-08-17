import React, { Component } from 'react';
import logo from '../../../assets/logo.svg';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <h1 className="home-title">Welcome to Alias</h1>
        </header>
        <footer>
          footer
        </footer>
      </div>
    );
  }
}

export default Home;
