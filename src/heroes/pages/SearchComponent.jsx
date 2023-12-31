import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../../hooks/useForm";
import { HeroeCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroesByName(q);
  const showSearch = (q.length === 0);
  const showError = (q.length > 0)&& heroes.length === 0;
  const {searchText, onInputChange, onResetForm} = useForm({
    searchText: q
  });
  // console.log({query})
  // console.log({location})
  const onSearchSubmit = (event)=>{
    event.preventDefault();
    // if(searchText.trim().length <= 1){
    //   // heroes = [];
    //   return
    // }     
    navigate(`?q=${searchText.toLowerCase().trim()}`)
    // onResetForm();
  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button
              className="btn btn-outline-primary mt-2"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results:</h4>

          {/* {
            ( q === '') ? 
              <div className="alert alert-primary">
                Search a hero
              </div>
            : (heroes.length === 0) &&
          <div className="alert alert-danger">
            No hero <b> { q } </b>
          </div>
          } */}

          <div className="alert alert-primary animate__animated animate__wobble" style={{display: showSearch ? '': 'none'}}>
          <i class="fa-solid fa-magnifying-glass">Search</i>
          </div>

          <div className="alert alert-danger animate__animated animate__wobble" style={{display: showError ? '' : 'none'}}>
            No hero <b> { q } </b>
          </div>

          {
            heroes.map( hero => (
              <HeroeCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>
    </>
  )
}
