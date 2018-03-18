import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import DuikPlaatsen from './DuikPlaatsen';
import Duikerslog from './Duikerslog';
import OverviewDives from './OverviewDives';
import NotFound from './NotFound';
import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state = { duiken:{}, places:{}}
  }

  componentDidMount() {
    fetch('./data/dives.json')
        .then( response => response.json())   
        .then( this.parseDuiken);

      fetch('./data/divePlaces.json')
        .then(response => response.json())
        .then(this.parsePlaces);
    };

    parsePlaces = data => {
      console.log(data.sites);
      this.setState({places: data.sites});
    }

    parseDuiken = data => {
      this.setState({duiken: data});
    }

  handleChangeDuik = (id, duik) => {
    const dives = {...this.state.duiken};
    dives[id] = duik;
    this.setState({duiken: dives});
    console.log(dives);
  }

  handleDelete = (e, id) => {
    const list = { ...this.state.duiken };
    delete list[id];
    this.setState({ duiken: list });
    
  }

  handleInput = () => {
    const {duiken} = this.state;
    const updatedDives = {...duiken};
    console.log(updatedDives);
  }


  render() {
    const { duiken, places} = this.state;
    return (
      <main>
        <h1><Link to="/">Duikerslog</Link></h1>
        <Switch>
          <Route path='/' exact render={() => <Navigation/> } />
          <Route path='/DuikPlaatsen' exact  render={() => <DuikPlaatsen plaatsen={places}/> } />
          <Route path='/Duikerslog'  render={() => <Duikerslog duiken={duiken}/> } />
          <Route component={NotFound}/>
        </Switch>
        <OverviewDives duiken={duiken} />
      </main>
    );
  }
}

export default App;
