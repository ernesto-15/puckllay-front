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
      <NavLink to="/about" exact>NOSOTROS</NavLink>
    </li>
    <li>
      <NavLink to="/news">NOTICIAS</NavLink>
    </li>
    <li>
      <NavLink to="/talleres">TALLERES</NavLink>
    </li>
    <li>
      <NavLink to="/projects">PROYECTOS</NavLink>
    </li>
    <li>
      <NavLink to="/joinus">ÚNETE</NavLink>
    </li>
    <li>
      <NavLink to="/ingresar">INGRESAR</NavLink>
    </li>
  </ul>
  );
};

export default NavLinks;