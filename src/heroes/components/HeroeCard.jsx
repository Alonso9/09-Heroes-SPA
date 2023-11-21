import React from 'react'
import { Link } from 'react-router-dom';

const CharacterByHero = ({alter_ego, characters}) => {
    if(alter_ego === characters) return <></>

    return <p>{characters}</p>
}

export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    // console.log(id)
    const heroImgUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className='col animate__animated animate__fafeIn'>
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={heroImgUrl} alt={superhero} className='card-img' />
                </div>
                <div className="col-8">
                    <div className="card-body">
                    <h5 className='cart-title'>{superhero}</h5>
                    <p className='card-text'>{alter_ego}</p>
                    {/* {
                        (alter_ego !== characters) && (<p>{characters}</p>)
                    } */}
                    <CharacterByHero alter_ego={alter_ego} characters={characters}/>

                    <p className='card-text '>
                        <small className='text-muted'>{first_appearance}</small>
                    </p>
                    <Link to={`/hero/${id}`}>
                     See more..
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
