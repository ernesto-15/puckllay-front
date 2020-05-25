import React, { useContext } from 'react';
import { AuthAdminContext } from '../../Context/adminAuthContext';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const AdminNavLinks = (props) => {
  const { setToken } = useContext(AuthAdminContext);

  const logout = () => {
    setToken(null, true)
  };

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/dashboard">DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink onClick={logout} to="/">
          CERRAR SESION
        </NavLink>
      </li>
    </ul>
  );
};

export default AdminNavLinks;
