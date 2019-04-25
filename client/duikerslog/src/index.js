import React from "react";
import ReactDOM from "react-dom";

import store from './store'

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter } from "react-router-dom";

import { ApolloProvider } from "react-apollo";

import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import { ApolloLink, Observable } from "apollo-link";

import firebase from "firebase/app";
import "firebase/auth";
var config = {
  apiKey: "AIzaSyBuvE-v8Ix-9mevB2Mg19ZeZ9UJla7rTm0",
  authDomain: "duikapp.firebaseapp.com"
};

firebase.initializeApp(config);

const authMiddleware = new ApolloLink((operation, forward) => {
  return new Observable(observable => {
    let sub = null;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(token => {
          operation.setContext({
            headers: {
              authorization: token ? `${token}` : null
            }
          });
          sub = forward(operation).subscribe(observable);
        });
      } else {
        sub = forward(operation).subscribe(observable);
      }
    });

    return () => (sub ? sub.unsubscribe() : null);
  });
});

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    authMiddleware,
    // createUploadLink({ uri: "https://servermav.now.sh/graphql" })
    createUploadLink({ uri: "//localhost:4000/graphql" })
  ]),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </ApolloProvider>,
document.getElementById("root")
);
registerServiceWorker();