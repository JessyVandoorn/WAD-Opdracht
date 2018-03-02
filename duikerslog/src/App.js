import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Essential from './Essential';
import Form from './Form';

class App extends Component {
  constructor(){
    super()
    this.state = {currentItem: false, value: "Todi", diepte:"{10}", buddy:"Jeroen & Nathalie"}
  }

  handleClickItem = (currentItem) => {
    this.setState((prevState, props)=> ({ currentItem: !prevState.currentItem }));
    console.log(currentItem);
  }

  handleChangeInput = (channel, input) => {
    this.setState({[channel]: input});
    console.log(channel)
    console.log(input);
  }


  render() {
    const {currentItem, value, diepte, buddy} = this.state;
    return (
      <div>
        <ul>
          <Navigation itemName="Home" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
          <Navigation itemName="Duikerslog" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
          <Navigation itemName="Materiaal" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
        </ul>
        <Essential datum="15/10/2017" locatie={value} diepte={diepte} temperatuur={24} buddy={buddy} luchtStart={300} luchtEind={150}/>
        <Form onChange={e => this.handleChangeInput("value", e)} name={value}/>
        <Form onChange={e => this.handleChangeInput("diepte", e)} name={diepte}/>
        <Form onChange={e => this.handleChangeInput("buddy", e)} name={buddy}/>
        {/* <div>
          {Object.keys(this.state).map(
            key => <Form value={this.state[key]} key={key} onChange={this.handleChangeInput(key)} />
          )}
        </div> */}
      </div>
    );
  }
}

export default App;
