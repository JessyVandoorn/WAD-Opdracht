import React, { Component } from 'react';
import './css/App.css';
import Navigation from './components/Navigation';
import DuikPlaatsen from './components/DuikPlaatsen';
import DiveMaterial from './components/DiveMaterial';
import Duikerslog from './components/Duikerslog';
import OverviewDives from './components/OverviewDives';
import DivePlacesDetail from './components/DivePlacesDetail';
import AddDive from './components/AddDive';
import NotFound from './components/NotFound';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

import {Query} from "react-apollo";
import GET_ALL_DIVES from "./graphql/getAllDives";
import User from "./components/User";

class App extends Component {

  render() {
    const {store} = this.props;
    return (
      <main className="main">
        <h1><Link to="/">Duikerslog</Link></h1>
        <Navigation/>
        <div>
        <Query query={GET_ALL_DIVES}>
          {
            ({loading, error, data:{allDives}}) => {
              if(loading) return <p>Loading ...</p>;
              if(error) return <p>error: {error.message}</p>
              return(
          <Switch>
            <Route path='/' exact render={() => <OverviewDives dives={allDives} /> } /> 
            <Route path='/DuikPlaatsen' exact  render={() => <DuikPlaatsen store={store}/> } />
            <Route path='/Duikerslog'  render={() => <Duikerslog dives={allDives}/> } />
            <Route path='/DiversTable/add' render={() => <AddDive />}/> 
            <Route path='/DuikPlaatsen/:id' render={({ match }) => {
              const id = match.params.id;
              return store.places[id]?<DivePlacesDetail key={id} id={id} store={store.places[id]} />:<NotFound />
            }} /> 
            <Route path='/DiveMaterial' exact render={() => <DiveMaterial/> } />
            <Route component={NotFound}/> 
          </Switch>
              )
              }
            }
      </Query>
      <User />
      </div>
      </main>
    );
  }
}

export default withRouter(App);
