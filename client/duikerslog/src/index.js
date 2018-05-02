import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

import ApolloClient  from 'apollo-boost';
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient({uri: "http://localhost:4000/graphql"});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>, 
  document.getElementById('root')
);
registerServiceWorker();
