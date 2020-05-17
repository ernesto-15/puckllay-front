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
          <Route path="/" exact component={Home} />
          <Route path="/ingresar" exact component={Login} />
          <Route path="/admin/ingresar" exact component={Login} />
          <Route path="/talleres" exact component={Workshops} />
          <Route path="/mis-talleres" exact component={Workshops} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
