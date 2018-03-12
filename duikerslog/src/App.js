import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
// import Essential from './Essential';
// import Form from './Form';
import DiversTable from './DiversTable';
import OverviewDives from './OverviewDives';

class App extends Component {
  constructor(){
    super()
    this.state = {currentItem: false, duiken:{}}
  }

  componentDidMount() {
    fetch('./data/dives.json')
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
        <h1> Duikerslog </h1>
        <ul>
          <Navigation itemName="Home" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
          <Navigation itemName="Duikerslog" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
          <Navigation itemName="Materiaal" onClick={this.handleClickItem} className={currentItem?`currentItem`:``}/>
        </ul>
        <section className="overviewSection">
        <OverviewDives duiken={duiken}/>
        <DiversTable duiken={duiken} />
        </section>
      </div>
    );
  }
}

export default App;
