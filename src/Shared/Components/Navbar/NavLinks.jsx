import React, { useContext } from 'react'
import { AuthContext } from '../../Context/authContext'
import { NavLink } from 'react-router-dom'

import './NavLinks.css'

const NavLinks = (props) => {
  const [token, setToken] = useContext(AuthContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
	props.onLogout(false)
  }

  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>
					INICIO
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' exact>
					NOSOTROS
        </NavLink>
      </li>
      <li>
        <NavLink to='/news'>NOTICIAS</NavLink>
      </li>
      <li>
        <NavLink to={`${token ? '/mis-talleres' : 'talleres'}`}>TALLERES</NavLink>
      </li>
      <li>
        <NavLink to='/projects'>PROYECTOS</NavLink>
      </li>
      <li>
        <NavLink to='/joinus'>ÚNETE</NavLink>
      </li>
      {!token && (
        <li>
          <NavLink to='/ingresar'>INGRESAR</NavLink>
        </li>
      )}
      {token && (
        <li>
          <NavLink onClick={logout} to='/'>CERRAR SESION</NavLink>
        </li>
      )}
    </ul>
  )
}

export default NavLinks
