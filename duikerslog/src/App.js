import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Essential from './Essential';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation itemName="Home"/>
        <Essential datum="15/10/2017" locatie="Todi" diepte="10" temperatuur="24" buddy="Jeroen & Nathalie" luchtStart="300" luchtEind="150"/>
      </div>
    );
  }
}

export default App;
