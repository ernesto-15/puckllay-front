import React from 'react';
import Card from './UIElements/Card';
import './Workshop.css';

const Workshop = () => {
  return (
    <div className="workshop-container">
      <Card className="workshop-card">
        <img
          className="workshop__image"
          src="https://images.pexels.com/photos/1749057/pexels-photo-1749057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <div className="workshop__info">
          <p>Pukllay</p>
          <h2>Taller de ierda djaslkdjsak</h2>
          <p>En este momento</p>
          <p>A tu propio ritmo</p>
        </div>
      </Card>
    </div>
  );
};

export default Workshop;
