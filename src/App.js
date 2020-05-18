import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import MainNavigation from './Shared/Components/Navbar/MainNavigation'
import Home from './Shared/Pages/Home'
import Login from './Shared/Pages/Login'
import AdminLogin from './Shared/Pages/AdminLogin'
import Workshops from './Shared/Pages/Workshops'
import { AuthProvider } from './Shared/Context/authContext'
import './App.css'

function App () {
  const [token, setToken] = useState(null)
  function handleToken (token) {
    setToken(token)
  }
  const routesLogin = (
    <Switch>
      <Route path='/' exact component={Home} />
      {/* <Route path="/talleres" exact component={Workshops} /> */}
      <Route path='/mis-talleres' exact component={Workshops} />
      {/* <Route path="/admin/ingresar" exact component={AdminLogin} /> */}
      <Redirect to='/' />
    </Switch>
  )
  const routesGuess = (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/talleres' exact component={Workshops} />
      <Route path='/ingresar' exact render={(props) => <Login {...props} onLogin={handleToken} />} />
      <Route path='/admin/ingresar' exact component={AdminLogin} />
      <Redirect to='/' />
    </Switch>
  )

  return (
    <AuthProvider>
      <Router>
        <MainNavigation onLogout={handleToken} />
        <main>{token && routesLogin}
          {!token && routesGuess}
        </main>
      </Router>
    </AuthProvider>
  )
}

export default App
