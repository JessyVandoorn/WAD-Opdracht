import React, { Component } from 'react';
import '../css/App.css';
import Navigation from '../components/Navigation';
import DuikPlaatsen from '../components/DuikPlaatsen';
import DiveMaterial from '../components/DiveMaterial';
import Duikerslog from '../components/Duikerslog';
import OverviewDives from '../components/OverviewDives';
import DivePlacesDetail from '../components/DivePlacesDetail';
import AddTopic from '../components/AddTopic';
import NotFound from '../components/NotFound';
import Dive from '../models/Dive';
import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state = { duiken:{}, places:{}}
  }

  componentDidMount() {
    fetch('../data/dives.json')
        .then( response => response.json())   
        .then( this.parseDuiken);

      fetch('../data/divePlaces.json')
        .then(response => response.json())
        .then(this.parsePlaces);
    };

    parsePlaces = data => {
      this.setState({places: data.sites});
    }

    parseDuiken = data => {
      this.setState({duiken: data});
    }

  handleChangeDuik = (id, duik) => {
    const dives = {...this.state.duiken};
    dives[id] = duik;
    this.setState({duiken: dives});
  }

  handleDelete = (e, id) => {
    const list = { ...this.state.duiken };
    delete list[id];
    this.setState({ duiken: list });
    
  }

  handleInput = () => {
    const {duiken} = this.state;
    const updatedDives = {...duiken};
  }

  handleAddTopic = (value, callback) => {
    const dive = new Dive(value);
    const duiken = { ...this.state.duiken };
    const id = Date.now();
    duiken[id] = dive;
    console.log(duiken[id]);
    this.setState({ duiken }, () => callback(id));
  }


  render() {
    const { duiken, places} = this.state;
    return (
      <main className="main">
        <h1><Link to="/">Duikerslog</Link></h1>
        <Navigation/>
        <Switch>
          <Route path='/' exact render={() => <OverviewDives duiken={duiken} /> } />
          <Route path='/DuikPlaatsen' exact  render={() => <DuikPlaatsen plaatsen={places}/> } />
          <Route path='/Duikerslog'  render={() => <Duikerslog duiken={duiken}/> } />
          <Route path='/DiversTable/add' render={() => <AddTopic onAddTopic={this.handleAddTopic}/>}/>
          <Route path='/DuikPlaatsen/:id' render={({ match }) => {
            const id = match.params.id;
            return places[id]?<DivePlacesDetail key={id} id={id} place={places[id]} />:<NotFound />
          }} />
          <Route path='/DiveMaterial' exact render={() => <DiveMaterial/> } />
          <Route component={NotFound}/>
        </Switch>
        
      </main>
    );
  }
}

export default App;
