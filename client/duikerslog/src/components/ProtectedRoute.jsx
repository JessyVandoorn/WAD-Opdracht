import React from "react";

import { Route, Redirect } from "react-router-dom";

import { Query } from "react-apollo";
import USER from "../graphql/user";

const ProtectedRoute = ({ component: Component, authenticated, userId, projects, events, isChecked, ...rest }) => (
  <Query query={USER} variables={{ authid: userId }}>
    {({ loading, error, data: { user } }) => {
      if (loading) return <p>loading...</p>;
      if (error) return <p>{error.message}</p>;
      return (
        <Route
          {...rest}
          render={props => {
            return authenticated ? (
              <Component currentUser={user} projects={projects} events={events} isChecked={isChecked} {...props} />
            ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: props.location }
                  }}
                />
              );
          }}
        />
      );
    }}
  </Query>
);

export default ProtectedRoute;