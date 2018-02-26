import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Essential from './Essential';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation itemName="Home"/>
        <Essential datum="15/10/2017" locatie="Todi"/>
      </div>
    );
  }
}

export default App;
