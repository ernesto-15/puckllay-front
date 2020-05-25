import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAdminAuth } from '../Context/adminAuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { isValidated } = useAdminAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return isValidated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/admin/ingresar', state: { referer: props.location } }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;