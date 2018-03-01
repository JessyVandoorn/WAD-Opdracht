import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Essential from './Essential';

class App extends Component {
  constructor(){
    super()
    this.state = {currentItem: false}
  }

  handleClickItem = (e) => {
    console.log(e);
    e.preventDefault();
    this.setState((prevState, props)=> ({ currentItem: !prevState.currentItem }));
  }

  render() {
    const {currentItem} = this.state;
    return (
      <div>
        <ul>
            <Navigation itemName="Home" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
           <Navigation itemName="Duikerslog" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
            <Navigation itemName="Materiaal" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
        </ul>
        <Essential datum="15/10/2017" locatie="Todi" diepte="10" temperatuur="24" buddy="Jeroen & Nathalie" luchtStart="300" luchtEind="150"/>
      </div>
    );
  }
}

export default App;
