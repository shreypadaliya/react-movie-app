import React, { useContext } from "react";
import { AppContext } from "./context";
import { NavLink } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";

const Movies = () => {
  const { movie, isLoading } = useContext(AppContext);
  // console.log(movie);

  if (isLoading) {
    return (
      <div>
        <div className="loading">
          {" "}
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      </div>
    );
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
            const { imdbID, Title, Poster } = curMovie;
            const movieName = Title.substring(0, 15);

            return (
              <NavLink to={`movie/${imdbID}`}>
                <div className="card">
                  <div className="card-info">
                    <h2>
                      {movieName.length > 15 ? `{movieName}...` : movieName}
                    </h2>
                    <img src={Poster} alt="" />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
