import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAdminAuth } from '../Context/adminAuthContext';

function PrivateUserRoute({ component: Component, ...rest }) {
  const { isUserValidated } = useAdminAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return isUserValidated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/ingresar', state: { referer: props.location } }}
          />
        );
      }}
    />
  );
}

export default PrivateUserRoute;