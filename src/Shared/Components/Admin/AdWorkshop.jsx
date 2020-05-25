import React from 'react';
import Card from '../UIElements/Card';
import './AdWorkshop.css';

const User = ({ name, user, avatar }) => {
  return (
    <Card className="ad-workshop-card">
      <div className="workshop-avatar">
        <img
          src="https://images.pexels.com/photos/1749057/pexels-photo-1749057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="profilePhoto"
        />
      </div>
      <div className="workshop-info">
        <h2 className="workshop__name">{name}</h2>
        <p className="workshop__user">{user}</p>
      </div>
      <div className="workshop-controls">
        <button className="control__edit">Editar</button>
        <button className="control__delete">Eliminar</button>
      </div>
    </Card>
  );
};

export default User;
