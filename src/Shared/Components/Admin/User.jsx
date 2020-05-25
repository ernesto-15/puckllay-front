import React from 'react';
import Card from '../UIElements/Card';
import './User.css';

const User = ({ name, lastName, email, role, avatar }) => {
  return (
    <Card className="user-card">
      <div className="user-avatar">
        <img
          src="https://images.pexels.com/photos/1749057/pexels-photo-1749057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="profilePhoto"
        />
      </div>
      <div className="user-info">
        <h2 className="user__name">{`${name} ${lastName}`}</h2>
        <p className="user__email">{email}</p>
        <p className="user__role">Tipo: {role}</p>
      </div>
      <div className="user-controls">
        <button className="control__edit">Editar</button>
        <button className="control__delete">Eliminar</button>
      </div>
    </Card>
  );
};

export default User;
