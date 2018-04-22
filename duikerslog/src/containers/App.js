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
import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  // constructor(){
  //   super()
  //   this.state = {places:{}}
  // }

  // componentDidMount() {
    // fetch('../data/dives.json')
    //     .then( response => response.json())   
    //     .then( this.parseDuiken);

    //   fetch('../data/divePlaces.json')
    //     .then(response => response.json())
    //     .then(this.parsePlaces);
    // };

    // parsePlaces = data => {
    //   this.setState({places: data.sites});
    // }

  //   parseDuiken = data => {
  //     this.setState({duiken: data});
  //   }

  render() {
    const {store} = this.props;
    return (
      <main className="main">
        <h1><Link to="/">Duikerslog</Link></h1>
        <Navigation/>
        <Switch>
          <Route path='/' exact render={() => <OverviewDives store={store} /> } />
          <Route path='/DuikPlaatsen' exact  render={() => <DuikPlaatsen store={store.places}/> } />
          <Route path='/Duikerslog'  render={() => <Duikerslog store={store}/> } />
          <Route path='/DiversTable/add' render={() => <AddTopic store={store}/>}/>
          {/* <Route path='/DuikPlaatsen/:id' render={({ match }) => {
            const id = match.params.id;
            return places[id]?<DivePlacesDetail key={id} id={id} place={places[id]} />:<NotFound />
          }} /> */}
          <Route path='/DiveMaterial' exact render={() => <DiveMaterial/> } />
          <Route component={NotFound}/>
        </Switch>
        
      </main>
    );
  }
}

export default App;
