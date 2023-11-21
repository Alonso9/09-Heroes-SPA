import React, { useMemo } from 'react'
import { HeroeCard } from './HeroeCard';
import { getHeroesByPubliser } from '../helpers';


export const HeroesList = ( {publisher} ) => {
    const heroes = useMemo(()=>getHeroesByPubliser( publisher), [publisher]) 
  return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map((heroe) =>
                    <HeroeCard 
                    key={heroe.id}
                    {...heroe}
                    />
                        // <li key={heroe.id}>
                        // {heroe.superhero}
                        // </li>
                )
            }
        </div> 
  )
}

