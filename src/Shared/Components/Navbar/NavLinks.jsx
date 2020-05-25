import React, { useContext } from 'react';
import { AuthAdminContext } from '../../Context/adminAuthContext';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
  const { isValidated, isUserValidated, setUserTokens, setTokens } = useContext(
    AuthAdminContext
  );

  const logout = () => {
    setUserTokens(null, true);
    setTokens(null, true);
  };

  return (
    <ul className="nav-links">
      {!isValidated && (
        <li>
          <NavLink to="/" exact>
            INICIO
          </NavLink>
        </li>
      )}

      {!isValidated && (
        <li>
          <NavLink to="/about" exact>
            NOSOTROS
          </NavLink>
        </li>
      )}

      {!isValidated && (
        <li>
          <NavLink to="/news" exact>
            NOTICIAS
          </NavLink>
        </li>
      )}

      {!isValidated && (
        <li>
          <NavLink to={isUserValidated ? '/mis-talleres' : '/talleres'} exact>
            {isUserValidated ? 'MIS TALLERES' : 'TALLERES'}
          </NavLink>
        </li>
      )}

      {!isValidated && (
        <li>
          <NavLink to="/projects" exact>
            PROYECTOS
          </NavLink>
        </li>
      )}

      {!isValidated && (
        <li>
          <NavLink to="/joinus" exact>
            ÚNETE
          </NavLink>
        </li>
      )}

      {isValidated && (
        <li>
          <NavLink to="/usuarios" exact>
            USUARIOS 
          </NavLink>
        </li>
      )}

      {isValidated && (
        <li>
          <NavLink to="/talleres" exact>
            TALLERES
          </NavLink>
        </li>
      )}

      {!isValidated && !isUserValidated && (
        <li>
          <NavLink to="/ingresar" exact>
            INGRESAR
          </NavLink>
        </li>
      )}

      {(isValidated || isUserValidated) && (
        <li className="logout-button">
          <NavLink onClick={logout} to="/">
            CERRAR SESION
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
