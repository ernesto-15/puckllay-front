import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return (
  <ul className="nav-links">
    <li>
      <NavLink to="/" exact>INICIO</NavLink>
    </li>
    <li>
      <NavLink to="/about" exact>ACERCA DE NOSOTROS</NavLink>
    </li>
    <li>
      <NavLink to="/news">NOTICIAS</NavLink>
    </li>
    <li>
      <NavLink to="/workshops">TALLERES</NavLink>
    </li>
    <li>
      <NavLink to="/projects">PROYECTOS</NavLink>
    </li>
    <li>
      <NavLink to="/login">INGRESAR</NavLink>
    </li>
  </ul>
  );
};

export default NavLinks;