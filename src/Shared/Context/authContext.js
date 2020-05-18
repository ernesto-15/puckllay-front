import React, {useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  return (
    <AuthContext.Provider value={[token, setToken]}>
      {props.children}
    </AuthContext.Provider>
  )
}

