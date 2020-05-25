import React from 'react';
import User from '../Components/Admin/User';

import './AdminUsers.css';

const AdminUsers = () => {
  return (
    <div className="admin-container">
      <div className="users">
        {/* <h1 className="users__title">USUARIOS</h1> */}
        <div className="input-container__user">
          <p>Buscar: </p>
          <input
            type="text"
            className="form__input"
            placeholder="Buscar Usuario"
          />
        </div>
        <div className="create-user">
          <button>NUEVO USUARIO</button>
        </div>
        <div className="users__container">
          <User name="Pedro" lastName="Huaman" email="nose@gmail.com" role="Administrador"/>
          <User name="Juan" lastName="Perez" email="nose@gmail.com" role="Tallerista"/>
          <User name="Jorge" lastName="Gonzales" email="nose@gmail.com" role="Tallerista"/>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
