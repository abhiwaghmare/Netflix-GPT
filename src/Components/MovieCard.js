import React from "react";
import { IMG_CDN_URL } from "../Utilities/Constants";

const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return null;
  return (
    <div className="w-48 shadow-xl m-3">
      <img alt="movieCard" src={IMG_CDN_URL + movie?.poster_path}></img>
    </div>
  );
};

export default MovieCard;
