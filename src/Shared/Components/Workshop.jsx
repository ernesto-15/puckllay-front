import React, { useState } from 'react';
import Card from './UIElements/Card';
import LoginModal from './LoginModal';
import './Workshop.css';

const workshop = {
  title: 'TALLER 1',
  descrition1: 'En este momento',
  descrition2: 'A tu propio ritmo',
};

const Workshop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
          <h2>{workshop.title}</h2>
          <p>{workshop.descrition1}</p>
          <p>{workshop.descrition1}</p>
          <button onClick={openModal}>Ingresar</button>
          <LoginModal workshopData={workshop} isOpen={isOpen} onClose={closeModal} />
        </div>
      </Card>
    </div>
  );
};

export default Workshop;
