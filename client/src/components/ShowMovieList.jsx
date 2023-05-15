// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function ShowMovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => {
        setMovies(res.data);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        console.log("Error from ShowmovieList");
      });
  }, []);

  const movieList =
    movies.length === 0
      ? "there is no movie record!"
      : movies.map((movie, k) => <MovieCard movie={movie} key={k} />);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center gap-4 mb-2">
        <div className="col-md-12">
          <br />
          <h2 className="flex display-4 justify-center items-center">
            movies List
          </h2>
        </div>

        {/*<div className="col-md-11">
            <Link
              to="/create-movie"
              className="btn btn-outline-warning float-right"
            >
              + Add New movie
            </Link>
            <br />
            <br />
            <hr />
           </div>*/}
      </div>

      <div className="">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2">
          {movieList}
        </div>
      </div>
    </div>
  );
}

export default ShowMovieList;
