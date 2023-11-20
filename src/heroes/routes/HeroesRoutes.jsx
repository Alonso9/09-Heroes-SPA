import { Navigate, Route, Routes } from 'react-router-dom';
import {Navbar} from '../../UI/components/index';
import { MarvelPage } from '../pages/MarvelPage';
import { DCPage } from '../pages/DCPage';
import { SearchComponent } from '../pages/SearchComponent';
import { HeroComponent } from '../pages/HeroComponent';

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path='Marvel' element={<MarvelPage/>}/>
                <Route path='DC' element={<DCPage/>}/>
                <Route path='search' element={<SearchComponent/>}/>
                <Route path='hero/:id' element={<HeroComponent/>}/>
                <Route path='/' element={<Navigate to="/Marvel"/>}/>
            </Routes>
        </div>
    </>
  )
}
