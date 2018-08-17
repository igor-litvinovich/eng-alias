import React, { Component } from 'react';
import { DictaphoneComponent } from '../../components';
import logo from '../../../assets/logo.svg';
import './homePage.scss';

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <img src={logo} className="home-logo" alt="logo"/>
          <h1 className="home-title">Welcome to Alias</h1>
        </header>
        <section>
          <DictaphoneComponent/>
        </section>
        <footer>
          footer
        </footer>
      </div>
    );
  }
}

export default HomePage;
