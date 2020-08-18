import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
            {...rest}
            render={ () => {
                if (localStorage.getItem('token')) {
                    return <Component />
                } else {
                    return <Redirect to='/login' />
                }
            }}
        />
    )
}

export default PrivateRoute


/************* CHRIS' VERSION ************* 
import React from "react";
import { Route, Redirect } from "react-router-dom";
export function ProtectedRoute(props) {
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
}

**************/