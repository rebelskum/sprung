import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Profile-page">Profile Page</h1>
        </header>
        <div className="App-intro">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
