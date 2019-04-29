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
import Register from "./components/auth/Register";
import Gate from "./components/auth/Gate";
import LoadingScreen from "./components/LoadingScreen";
import Login from "./components/auth/Login";
import Account from './components/Account.jsx';
import Reset from "./components/auth/Reset";

import ProtectedRoute from "./components/ProtectedRoute";
import { Route, Link, Switch, withRouter } from 'react-router-dom';

import firebase from "firebase/app";

import {Query} from "react-apollo";
import GET_ALL_DIVES from "./graphql/getAllDives";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true,
      duiken: []
    };
    this.props = props;
  }


  componentDidMount() {
    this.firebaseListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.firebaseListener = undefined;
  }

  render() {
    let authId = "0";
    if (this.state.currentUser) {
      console.log(this.state.currentUser);
      authId = this.state.currentUser.uid;
      console.log(authId);
    }

    console.log(authId);
    const { loading, authenticated, duiken} = this.state;
    const {store, history} = this.props;

    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
    return <LoadingScreen/>; // render null when app is not ready
  }

    return (
      <main className="main">
        <div className="headerDiv">
          <h1><Link to="/">Duikerslog</Link></h1>
          <p><Link to="/Account">Account</Link></p>
        </div>
        <Navigation/>
        <div>
        <Query query={GET_ALL_DIVES}>
          {
            ({loading, error, data:{allDives}}) => {
              console.log('3',allDives);
              if(loading) return <p>Loading ...</p>;
              if(error) return <p>error: {error.message}</p>
              return(
          <Switch>
            <Route path='/' exact render={() => <OverviewDives dives={allDives} /> } /> 
            <Route path='/DuikPlaatsen' exact  render={() => <DuikPlaatsen store={store}/> } />
            <Route path='/Duikerslog' exact  render={() => <Duikerslog  dives={allDives} history={history}/> } />
            <Route path="/Duikerslog/add" component={AddDive}/> 
            <Route path='/DuikPlaatsen/:id' render={({ match }) => {
              const id = match.params.id;
              return store.places[id]?<DivePlacesDetail key={id} id={id} store={store.places[id]} />:<NotFound />
            }} /> 
            <Route path='/DiveMaterial' exact render={() => <DiveMaterial/> } />
            <ProtectedRoute
                        path="/Account"
                        component={Account}
                        authenticated={authenticated}
                        userId={authId}
                        projects={allDives}
                        events={store.evenementen}
                      />
             <Route
                        path="/Register"
                        render={({ history }) => (
                          <Gate
                            body={<Register history={history} />}
                            footer={
                              <Link to="/Login" className="signup-link"></Link>
                            }
                          />
                        )}
                      /> 
                      <Route
                        path="/login"
                        render={({ history }) => (
                        <Gate
                          body={<Login history={history} />}
                          footer={
                            <Link to="/Register" className="signup-link"></Link>
                          }
                        />
                        )}
                      />
                      <Route
	                      path="/Reset"
	                      render={({ history }) => (
	                      <Gate
	                        body={<Reset history={history} />}
	                        footer={
	                          <Link to="/Reset" className="signup-link"></Link>
	                        }
	                      />
	                      )}
	                    />
            {/* <Route component={NotFound}/>  */}
          </Switch>
              )
              }
            }
      </Query>
      </div>
      </main>
    );
  }
}

export default withRouter(App);
