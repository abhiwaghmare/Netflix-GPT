import React from "react";
import { IMG_CDN_URL } from "../Utilities/Constants";
import { Link } from "react-router";
import { setSelectedMovie } from "../Store/movieSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  if (!movie.poster_path)
    return (
      <div className="w-48 h-72 shadow-xl m-3 flex justify-center items-center bg-gray-300">
        <p className="font-semibold">No Image Found</p>
      </div>
    );

  const handleMovieClick = () => {
    dispatch(setSelectedMovie(movie));
  };

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="w-52 shadow-xl m-3" onClick={() => handleMovieClick()}>
        <img alt="movieCard" src={IMG_CDN_URL + movie?.poster_path}></img>
      </div>
    </Link>
  );
};

export default MovieCard;
