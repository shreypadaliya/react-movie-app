import React, { useContext } from "react";
import { AppContext } from "./context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie, isLoading } = useContext(AppContext);
  // console.log(movie);

  if(isLoading){
    return (
      <div>
        <div className='loading'>Loading...</div>
      </div>
    )
  }

  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie.map((curMovie) => {
            {
              /* return {
               <div>
              <h2>{curMovie.Title}</h2>
            </div> 
            }; */ 
            }
              const {imdbID,Title,Poster} = curMovie;
              const movieName = Title.substring(0,15);

            return <NavLink to={`movie/${imdbID}`}>
              <div className="card">
                <div className="card-info">
                  <h2>{movieName.length > 15 ? `{movieName}...` : movieName}</h2>
                  <img src={Poster} alt="" />
                </div>
              </div>
            </NavLink>
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
