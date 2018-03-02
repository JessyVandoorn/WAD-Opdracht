import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Essential from './Essential';
import Form from './Form';

class App extends Component {
  constructor(){
    super()
    this.state = {currentItem: false, value: "Todi"}
  }

  handleClickItem = (currentItem) => {
    this.setState((prevState, props)=> ({ currentItem: !prevState.currentItem }));
    console.log(currentItem);
  }

  handleChangeInput = (e) => {
    const {value} = this.state
    this.setState({value: e});
    console.log(value)
    console.log(e);
  }

  render() {
    const {currentItem, value} = this.state;
    return (
      <div>
        <ul>
          <Navigation itemName="Home" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
          <Navigation itemName="Duikerslog" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
          <Navigation itemName="Materiaal" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
        </ul>
        <Essential datum="15/10/2017" locatie={value} diepte={10} temperatuur={24} buddy="Jeroen & Nathalie" luchtStart={300} luchtEind={150}/>
        <Form onChange={this.handleChangeInput} name={value}/>
      </div>
    );
  }
}

export default App;
