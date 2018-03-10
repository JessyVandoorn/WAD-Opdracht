import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Essential from './Essential';
import Form from './Form';

class App extends Component {
  constructor(){
    super()
    this.state = {currentItem: false, duiken:{}}
  }

  componentDidMount() {
    fetch('./data/beesten.json')
        .then( response => response.json())   
        .then( this.parseDuiken);
    };

    parseDuiken = data => {
      this.setState({duiken: data});
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
    const {currentItem, duiken} = this.state;
    return (
      <div>
        <ul>
          <Navigation itemName="Home" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
          <Navigation itemName="Duikerslog" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
          <Navigation itemName="Materiaal" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
        </ul>
        
        <div className="form">
          <Form onChange={value => this.handleChangeInput("value", value)} name="Locatie" defaultValue="Todi"/>
          <Form onChange={value => this.handleChangeInput("diepte", value)} name="Diepte"/>
          <Form onChange={value => this.handleChangeInput("buddy", value)} name="buddy"/>
        </div>
        <table>
                        <thead>
                            <tr>
                                <th className="tdHead">Datum</th>
                                <th className="thHead">Locatie</th>
                                <th className="tdHead">Diepte (m)</th>
                                <th className="tdHead">temperatuur (°C)</th>
                                <th className="tdHead">Buddy</th>
                                <th className="tdHead">Lucht Start (bar)</th>
                                <th className="tdHead">Lucht Eind (bar)</th>
                            </tr>
                        </thead>
                            <Essential duiken={duiken}/>
                    </table>
      </div>
    );
  }
}

export default App;
