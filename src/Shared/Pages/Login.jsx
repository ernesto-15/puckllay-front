import React, { useState, useContext } from 'react'
import { AuthAdminContext } from '../Context/adminAuthContext';
import Card from '../Components/UIElements/Card'
import { Redirect } from 'react-router-dom';
import './Login.css'

const Login = () => {
	const { setUserTokens, isUserValidated } = useContext(AuthAdminContext);
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  }

  const login = async () => {
    const { email, password } = formValue
    console.log(email, password)
    const resp = await fetch('https://puckllay-back.herokuapp.com/login/teacher', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const { ok, data } = await resp.json()
    if (!ok) {
      setError(data.message)
    } else {
      setUserTokens(data.token, false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login()
  }

  if (isUserValidated) {
    return <Redirect to="/mis-talleres" />;
  }

  return (
    <div className='login'>
      <Card className='login-card'>
        <h2 className='login-title'>INCIAR SESIÓN</h2>
        <form onSubmit={handleSubmit} className='form'>
          <label className='form__label' htmlFor='email'>
						Email
          </label>
          <br />
          <input
            className='form__input name'
            type='email'
            name='email'
            placeholder='Ingrese su email'
            value={formValue.email}
            onChange={handleChange}
          />
          <br />
          <label className='form__label' htmlFor='password'>
						Contraseña
          </label>
          <br />
          <input
            className='form__input email'
            type='password'
            name='password'
            placeholder='Ingrese su contraseña'
            value={formValue.password}
            onChange={handleChange}
          />
          <br />
          {error && <h3 className='error-message'>{error}</h3>}
          <button className='form__button' type='submit'>
						Ingresar
          </button>
        </form>
      </Card>
    </div>
  )
}

export default Login
