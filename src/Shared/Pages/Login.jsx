import React, { useState } from 'react';
import Card from '../Components/UIElements/Card';
import './Login.css';

const Login = () => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="login">
      <Card className="login-card">
        <h2 className="login-title">INCIAR SESIÓN</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="form__input name"
            type="email"
            name="email"
            placeholder="Ingrese su email"
            value={formValue.email}
            onChange={handleChange}
          />
          <br />
          <label className="form__label" htmlFor="password">
            Contraseña
          </label>
          <br />
          <input
            className="form__input email"
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={formValue.password}
            onChange={handleChange}
          />
          <br />
          <button className="form__button" type="submit">
            Ingresar
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
