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

  render() {
    const {store} = this.props;
    return (
      <main className="main">
        <h1><Link to="/">Duikerslog</Link></h1>
        <Navigation/>
        <Switch>
          <Route path='/' exact render={() => <OverviewDives store={store} /> } />
          <Route path='/DuikPlaatsen' exact  render={() => <DuikPlaatsen store={store}/> } />
          <Route path='/Duikerslog'  render={() => <Duikerslog store={store}/> } />
          <Route path='/DiversTable/add' render={() => <AddTopic store={store}/>}/>
          <Route path='/DuikPlaatsen/:id' render={({ match }) => {
            const id = match.params.id;
            return store.places[id]?<DivePlacesDetail key={id} id={id} store={store.places[id]} />:<NotFound />
          }} /> 
          <Route path='/DiveMaterial' exact render={() => <DiveMaterial/> } />
          <Route component={NotFound}/>
        </Switch>
        
      </main>
    );
  }
}

export default App;
