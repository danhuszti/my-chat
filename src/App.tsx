import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './chat.d';
import { Login } from './Login'
import { proxy } from './proxy';
import { Main } from './main';

export default class App extends Component {
  state = { showLoggedIn: true  };

  render() {
    return (
      <div className="app">
        { this.state.showLoggedIn? <Login /> : <Main /> }
      </div>
    );
  }

  componentDidMount()
  {
    proxy.addEventListener( "login", () => { this.setState( { showLoggedIn: false } ) } );
  }

}

