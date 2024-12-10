import React from "react";
import MovieCard from "./MovieCard";
import { useRef } from "react";
const MoviesList = ({ category, movies }) => {
  const moviesRowRef = useRef(null);
  return (
    <div className="pt-4">
      <h1 className="text-2xl font-semibold text-white mt-3">{category}</h1>
      <div className="flex pt-4 ">
        <div
          ref={moviesRowRef}
          className="flex items-center movies-row overflow-x-hidden  group"
        >
          <button
            className="bg-gray-700 bg-opacity-50 text-white px-4 py-2 rounded-l z-index-10 absolute h-60 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => {
              moviesRowRef.current.scrollBy({
                left: -800,
                behavior: "smooth",
              });
            }}
          >
            <img
              alt="chevron-left"
              src="https://www.svgrepo.com/show/127047/right-thin-chevron.svg"
              className="w-6 h-6 filter invert rotate-180"
              width="24px"
              height="24px"
            ></img>
          </button>
          <div className="flex px-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} id={movie.id} movie={movie} />
            ))}
          </div>
          <button
            className="bg-gray-700 bg-opacity-50 text-white px-4 py-2 rounded-r absolute right-0 h-60 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => {
              moviesRowRef.current.scrollBy({
                left: 800,
                behavior: "smooth",
              });
            }}
          >
            <img
              alt="right-chevron"
              src="https://www.svgrepo.com/show/127047/right-thin-chevron.svg"
              className="h-6 w-6 filter invert"
              width="24px"
              height="24px"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
