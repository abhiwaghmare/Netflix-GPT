import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const GPTSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  const [loading, setLoading] = useState(true);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const color = "#ffffff";
  useEffect(() => {
    if (movieResults && movieResults.length > 0) {
      setLoading(false);
    }
  }, [movieResults]);

  if (loading)
    return (
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

  if (!movieNames) return <h1>Loading...</h1>;
  return (
    <div>
      {movieNames && (
        <div className="bg-black w-full mt-3 p-3 bg-opacity-80">
          {movieNames?.map((movie, index) => (
            <div key={index}>
              <p className="text-white font-bold text-xl pl-4 pt-3">{movie}</p>
              {movieResults[index].length ? (
                <MoviesList movies={movieResults[index]} />
              ) : (
                <p className="text-white mx-10 my-5">No Movie Details Found</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GPTSuggestions;
