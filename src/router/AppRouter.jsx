import { Navigate, Route, Routes } from 'react-router-dom'
import React from 'react';

import {DCPage, MarvelPage, HeroesRoutes} from '../heroes/index';
import {LoginPage} from '../auth/index'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='Login' element={<LoginPage/>}/>
            <Route path='/*' element={<HeroesRoutes/>}/>

        </Routes>
    </>
  )
}

/*
  Creamos un archivo de rutas especiales donde los componentes
  de Marvel y DC (junto con los que tienen dentro), sean ocultos, 
  si no estan logeados, para eso creamos un HeroesRoutes donde tenemos
  privadas esas rutas de compoentes, y las rutas externas como el login no,
  ya el Navbar solo esta llamado dentro de las rutas de los componente internos,
  asi que el login no lo puede ver
*/