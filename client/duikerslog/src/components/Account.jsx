import React from 'react';
import {observer} from "mobx-react";
import PropTypes from 'prop-types';

import {Query} from "react-apollo";
import GET_CURRENT_USER from "../graphql/getCurrentUser";

import firebase from "firebase/app";
import "firebase/auth";



const Account = ({store, history, currentUser, dives}) => {
  console.log(currentUser);
  const handleSignOut = async () => {
    await firebase.auth().signOut();
    history.push("/Login");
  };

return(
  <Query query={GET_CURRENT_USER}  variables={{ authid: currentUser }}>
          {
            ({loading, error, data:{user}}) => {
              if(loading) return <p>Loading ...</p>;
              if(error) return <p>error: {error.message}</p>

    return(
      <div className='account-box'>
      <p>{user.name}</p>
      {currentUser !== null ? " " : history.push('/Login')}
      {currentUser !== null ? <button className="uitlog-button" onClick={() => handleSignOut()}>Uitloggen</button> : ""}
      </div>
    );
              }
            }
      </Query>
)

};

Account.propTypes = {
  history: PropTypes.object.isRequired
};

export default observer(Account);