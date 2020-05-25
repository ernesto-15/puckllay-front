import React from 'react';
import Workshop from '../Components/Workshop';
import './Workshops.css';

const Workshops = () => {
  return (
    <>
      <div className="input-container">
        <p>Buscar: </p>
        <input type="text" className="form__input" placeholder="Buscar Taller" />
      </div>
      <div className="workshops-container">
        <Workshop />
        <Workshop />
        <Workshop />
        <Workshop />
        <Workshop />
        <Workshop />
        <Workshop />
        <Workshop />
      </div>
    </>
  );
};

export default Workshops;
