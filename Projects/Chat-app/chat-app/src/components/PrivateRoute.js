import React from 'react';
import { Redirect, Route } from 'react-router/cjs/react-router.min';

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = false;

  if (!profile) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
