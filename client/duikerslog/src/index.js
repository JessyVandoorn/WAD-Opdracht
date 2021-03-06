import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from './store'
import registerServiceWorker from './registerServiceWorker';

import ApolloClient  from 'apollo-boost';
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient({
  uri: "https://duikersapplication.now.sh/graphql"
}
);

// const client = new ApolloClient({
//   uri: "https://duikersapplication.now.sh/graphql",
//   clientState: {
//     defaults,
//     resolvers
//   },
//   request: async operation => {
//     const token = localStorage.getItem("jwt");
//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ""
//       }
//     });
//   }
// });

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </ApolloProvider>, 
  document.getElementById('root')
);
registerServiceWorker();
