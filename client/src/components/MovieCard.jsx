// eslint-disable-next-line no-unused-vars
import React from "react";
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const movie = props.movie;

  return (
    <div className=" w-full relative group bg-gray-100">
      <Link to={`/show-movie/${movie._id}`}>
        <div className="h-96 cursor-pointer overflow-hidden">
          <img
            src={movie.img}
            alt="movies"
            height={200}
            className="w-full h-full object-cover group-hover:scale-110 duration-500"
          />
        </div>

        <div className="w-full border-[1px] px-2 py-4">
          <h2>{movie.title}</h2>
          <h3>{movie.director}</h3>
          <p>{movie.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
