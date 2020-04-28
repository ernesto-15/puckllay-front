import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import MainNavigation from './Shared/Components/Navbar/MainNavigation';
import Home from './Shared/Pages/Home'
import Login from './Shared/Pages/Login'
import Workshops from './Shared/Pages/Workshops'
import './App.css';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/workshops" exact>
            <Workshops />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
