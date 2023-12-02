import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import { types } from '../types/types'

const initialState = {
    logged: false,
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged : !!user, // Aqui revisamos si el user existe con las !! 
    user: user,
  }
}

export const AuthProvider = ({children}) => {
  const [AuthState, dispach] = useReducer(AuthReducer, {}, init);

  const login = (name = '') => {
    const user = { id: 'ABC', name: name }

    const action = {
      type:  types.login,
      payload: user 
    }

    localStorage.setItem('user', JSON.stringify(user));

    dispach(action);
  }


  const logout = ()=> {
    console.log("logout")
    localStorage.removeItem('user');
    const action = {types: types.logout};
    dispach(action);
  }
  return (
    <AuthContext.Provider value={{ ...AuthState, login: login, logout: logout}}> {children} </ AuthContext.Provider>
  )
}


/*
  Con el init le decimos que cada vez que se llama la funcion login llame a guardar en el local nuestra variable user (donde recibimos el nombre que se loggea)
*/