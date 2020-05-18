import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import MainNavigation from './Shared/Components/Navbar/MainNavigation';
import Home from './Shared/Pages/Home';
import Login from './Shared/Pages/Login';
import AdminLogin from './Shared/Pages/AdminLogin';
import Workshops from './Shared/Pages/Workshops';
import { AuthProvider } from './Shared/Context/authContext';
import './App.css';

function App() {
  let routes;

  if (!localStorage.getItem('token')) {
    routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/talleres" exact component={Workshops} />
        <Route path="/ingresar" exact component={Login} />
        <Route path="/admin/ingresar" exact component={AdminLogin} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/talleres" exact component={Workshops} /> */}
        <Route path="/mis-talleres" exact component={Workshops} />
        {/* <Route path="/admin/ingresar" exact component={AdminLogin} /> */}
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthProvider>
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthProvider>
  );
}

export default App;
