import React from 'react';
import { Route } from 'react-router-dom';
import { isAuthenticated, userRoles } from './Auth';

const withAuthorization = (allowedRoles) => (WrappedComponent) => {
  const AuthorizationChecker = (props) => {
    // Check if the user is authenticated and has the required role
    if (isAuthenticated && allowedRoles.some(role => userRoles.includes(role))) {
      return <WrappedComponent {...props} />;
    } else {
      return <Route to="/unauthorized" />; // Redirect to unauthorized page or login
    }
  };

  return AuthorizationChecker;
};

export default withAuthorization;
