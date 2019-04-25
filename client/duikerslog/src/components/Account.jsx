import React from 'react';
import {observer} from "mobx-react";
import OverviewDives from './OverviewDives.jsx';
// import * as routes from '../lib/routes.js';
import PropTypes from 'prop-types';

import {Query} from "react-apollo";
import GET_ALL_DIVES from "../graphql/getAllDives";

const Account = ({store, history}) => {
  const {currentUser} = store;

    return(
    <Query query={GET_ALL_DIVES}>
          {
            ({loading, error, data:{allDives}}) => {
              console.log('ingelogd');
              if(loading) return <p>Loading ...</p>;
              if(error) return <p>error: {error.message}</p>
              return(
                <div className='account-box'>
      {currentUser ? <OverviewDives store={store} history={history} dives={allDives}/> : history.push('/Login')}
      <button className='btn btn-form uitlog-btn' onClick={() => store.logout(history)}>Uitloggen</button>
      </div>
    )
}
}
</Query>
    );
};

Account.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default observer(Account);