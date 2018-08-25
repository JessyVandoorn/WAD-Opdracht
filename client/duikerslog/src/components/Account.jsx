import React from 'react';
import {observer} from "mobx-react";
import OverviewDives from './OverviewDives.jsx';
// import * as routes from '../lib/routes.js';
import PropTypes from 'prop-types';

const Account = ({store, history}) => {
  const {currentUser} = store;

  return (
    <div className='account-box'>
      {currentUser ? <OverviewDives store={store} history={history}/> : history.push('/Login')}
    </div>
  );
};

Account.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default observer(Account);