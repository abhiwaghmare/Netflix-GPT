import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  return (
    <div className="bg-[#141414] px-4">
      <div className="-mt-48 relative z-50">
        {nowPlayingMovies && (
          <MoviesList category="Latest Movies" movies={nowPlayingMovies} />
        )}
        {popularMovies && (
          <MoviesList category="Top Rated Movies" movies={popularMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
