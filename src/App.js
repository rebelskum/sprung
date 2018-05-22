import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Picture from './components/Picture';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Profile-page">Profile Page</h1>
        </header>
        <div className="App-intro">
          <Picture/>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
