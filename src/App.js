import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import PrivateRoute from './Shared/Components/PrivateRoute';
import PrivateUserRoute from './Shared/Components/PrivateUserRoute';
import MainNavigation from './Shared/Components/Navbar/MainNavigation';
// import AdminNavigation from './Shared/Components/Navbar/AdminNavigation';
import Home from './Shared/Pages/Home';
import Login from './Shared/Pages/Login';
import AdminLogin from './Shared/Pages/AdminLogin';
import Admin from './Shared/Pages/Admin';
import User from './Shared/Pages/User';
import Workshops from './Shared/Pages/Workshops';
import { AuthAdminContext } from './Shared/Context/adminAuthContext';
import './App.css';

function App() {
  const existingAdminToken = JSON.parse(localStorage.getItem('adminToken'));
  const [adminToken, setAdminToken] = useState(existingAdminToken);
  const existingUserToken = JSON.parse(localStorage.getItem('userToken'));
  const [userToken, setUserToken] = useState(existingUserToken);
  const [isValidated, setIsValidated] = useState(existingAdminToken);
  const [isUserValidated, setIsUserValidated] = useState(existingUserToken);

  const validateUserToken = async (token) => {
    const resp = await fetch(
      'https://puckllay-back.herokuapp.com/token/validation',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setIsUserValidated(resp.ok);
    return resp.ok;
    // validate(resp.ok);
  };

  const validateToken = async (token) => {
    const resp = await fetch(
      'https://puckllay-back.herokuapp.com/token/validation',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setIsValidated(resp.ok);
    return resp.ok;
    // validate(resp.ok);
  };

  const setTokens = (data, logout) => {
    const validated = validateToken(data);
    if (validated) {
      if (logout) {
        localStorage.removeItem('adminToken');
        setAdminToken(null);
      } else {
        localStorage.setItem('adminToken', JSON.stringify(data));
        setAdminToken(data);
      }
    }
  };

  const setUserTokens = (data, logout) => {
    const validated = validateUserToken(data);
    if (validated) {
      if (logout) {
        localStorage.removeItem('userToken');
        setUserToken(null);
      } else {
        localStorage.setItem('userToken', JSON.stringify(data));
        setUserToken(data);
      }
    }
  };

  useEffect(() => {
    validateToken(adminToken);
    validateUserToken(userToken);
  }, [adminToken, userToken]);

  return (
    <AuthAdminContext.Provider
      value={{
        adminToken,
        setTokens,
        isValidated,
        userToken,
        setUserTokens,
        isUserValidated,
      }}
    >
      <Router>
        <MainNavigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/talleres" exact component={Workshops} />
          <Route path="/ingresar" exact component={Login} />
          <Route path="/admin/ingresar" exact component={AdminLogin} />
          <PrivateRoute exact path="/dashboard" component={Admin} />
          <PrivateUserRoute exact path="/mis-talleres" component={User} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthAdminContext.Provider>
    // <AuthProvider>
    //   <Router>
    //     <MainNavigation onLogout={handleToken} />
    //     <main>
    //       {token && routesLogin}
    //       {!token && routesGuess}
    //     </main>
    //   </Router>
    //   <AuthAdminContext.Provider value={{ adminToken, setTokens, isValidated }}>
    //     <Router>
    //       <AdminNavigation />
    //       {adminRoutes}
    //     </Router>
    //   </AuthAdminContext.Provider>
    // </AuthProvider>
  );
}

export default App;
