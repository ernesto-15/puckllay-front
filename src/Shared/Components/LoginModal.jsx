import React, { useState } from 'react';
import Modal from './UIElements/Modal';
import { CSSTransition } from 'react-transition-group';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose, workshopData }) => {
  const [code, setCode] = useState({
    code: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(code);
  };

  const handleChange = (e) => {
    setCode({code: e.target.value})
  }

  return (
    <CSSTransition classNames="fade-in" in={isOpen} timeout={300}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <h1 className="loginModal__title">{workshopData.title}</h1>
        <h2>Ingrese su codigo</h2>
        <form onSubmit={handleSubmit} action="">
          <input
            className="form__input email"
            type="text"
            name="text"
            onChange={handleChange}
            value={code.code}
            placeholder="Ingrese el código"
          />
          <button className="loginModal__button" type="submit">
            Ingresar
          </button>
        </form>
      </Modal>
    </CSSTransition>
  );
};

export default LoginModal;
