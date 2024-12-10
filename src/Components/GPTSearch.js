import React, { useRef } from "react";
import { fetchGPTSuggestions } from "../Utilities/fetchGPTSuggestions";
import { API_OPTIONS } from "../Utilities/Constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../Store/GPTSlice";

const GPTSearch = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // const filteredData = await json?.results?.filter(
    //   (result) =>
    //     result?.original_title?.toLowerCase().includes(movie.toLowerCase()) ||
    //     result?.title.toLowerCase().includes(movie.toLowerCase())
    // );
    return json.results;
    // return filteredData;
  };

  const handleGPTSearch = async () => {
    const movieList = await fetchGPTSuggestions(searchText);
    const promiseArray = movieList?.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: movieList, movieResults: tmdbResults })
    );
  };

  return (
    <div className="bg-black w-1/2 px-5 py-3 items-center justify-center gap-3 grid grid-cols-12 m-auto shadow-xl bg-opacity-90">
      <input
        ref={searchText}
        type="text"
        placeholder="What would you like to watch today ?"
        className="m-4 p-2 rounded-lg col-span-10"
      ></input>
      <button
        className="bg-red-700 text-white py-2 px-4 rounded-lg shadow-md col-span-2"
        onClick={handleGPTSearch}
      >
        Search
      </button>
    </div>
  );
};

export default GPTSearch;
