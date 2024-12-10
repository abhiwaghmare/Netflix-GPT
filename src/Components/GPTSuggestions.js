import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GPTSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div>
      {movieNames && (
        <div className="bg-black w-full mt-3 p-3 bg-opacity-80">
          {movieNames?.map((movie, index) => (
            <div key={index}>
              <p className="text-white font-bold text-xl pl-4 pt-3 -mb-5">
                {movie}
              </p>
              <MoviesList movies={movieResults[index]} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GPTSuggestions;
