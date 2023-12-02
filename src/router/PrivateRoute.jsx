import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ( {children} ) => {
    const {logged} = useContext(AuthContext)


  return (logged) ? children : <Navigate to="/login"/>
}



/*
  Desde el use context tomaos la varible logged que es un boolean que indica el estado de loggeo del usuario, si esta loggeado le pasamos los hijos
  que sewrian las rutas privadas, sino lo navegamos al login
*/