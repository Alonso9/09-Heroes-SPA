import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroComponent = () => {
  // const params = useParams();
  const {id, ...rest} = useParams();
  const navigate = useNavigate()
  const hero = useMemo(()=> getHeroById(id), [id]); 
  
  const onReturn = () => {
    console.log("BACK")
    navigate(-1)
  }

  if(!hero){
    return <Navigate to="/marvel"/>
  }
  console.log(id)
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero} 
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeInRight">
        <h3> {hero.superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b> {hero.alter_ego} </li>
          <li className="list-group-item"><b>Publisher: </b> {hero.publisher} </li>
          <li className="list-group-item"><b>First appearance: </b> {hero.first_appearance} </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p> {hero.characters} </p>

        <button 
          onClick={onReturn}
          className="btn btn-outline-primary"
        >
          Go to back
        </button>
      </div>
    </div>
  )
}
