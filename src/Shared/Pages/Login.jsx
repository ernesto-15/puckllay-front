import React from 'react';
import Card from '../Components/UIElements/Card';
import './Login.css';
// import Input from '../Components/FormElements/Input'

const Login = () => {
  const handleClick = (e) => {
    e.preventDefault()
  };

  return (
    <div className="login">
      <Card className='login-card'>
        <h2 className="login-title">INCIAR SESIÓN</h2>
        <form className="form">
          <label className="form__label" htmlFor="email">
            Email
          </label>{' '}
          <br />
          <input
            className="form__input name"
            type="email"
            name="email"
            id="name"
          />
          <br />
          <label className="form__label" htmlFor="password">
            Contraseña
          </label>{' '}
          <br />
          <input
            className="form__input email"
            type="password"
            name="password"
            id="password"
          />
          <br />
          <button onClick={handleClick} className="form__button" type="submit">
            Ingresar
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
