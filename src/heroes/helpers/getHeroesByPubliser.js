import { heroes } from "../data/heroes";


export const getHeroesByPubliser = ( publisher) =>{
    const validPubliser = ['Marvel Comics','DC Comics'];

    if(!validPubliser.includes(publisher)){
        throw new Error(`${ publisher } is not a valid value :C`)
    }

    // Retornamos loheroes donde el atributo publisher sea igual al publisher que le mandamos ya sea DC o Marvel
    return heroes.filter( heroes => heroes.publisher === publisher)
}