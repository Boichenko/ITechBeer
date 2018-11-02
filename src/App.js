import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/index';
import Header from './components/header/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard name="Sara"/>
      </div>
    );
  }
}

export default App;
