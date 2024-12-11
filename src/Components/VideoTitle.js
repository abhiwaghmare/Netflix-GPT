import React, { useEffect } from "react";
import { useState } from "react";
import { API_OPTIONS } from "../Utilities/Constants";

const VideoTitle = ({ title, overview, genres }) => {
  const [genresList, setGenresList] = useState([]);
  const getGenresList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      API_OPTIONS
    );
    const json = await data.json();
    return json.genres;
  };
  useEffect(() => {
    getGenresList().then((data) => {
      const filteredData = data.filter((genre) => genres?.includes(genre.id));
      const movieGenres = filteredData.map((genre) => genre.name);
      setGenresList(movieGenres);
    });
  }, []);

  return (
    <div className="pt-64 pl-24 absolute text-white shadow-md bg-gradient-to-r from-black w-screen aspect-video">
      <div className="text-5xl font-bold">{title}</div>
      <div className="w-1/3 text-xl mt-4">{overview}</div>
      <div className="my-2 py-2">
        {genresList.map((genre) => (
          <span
            key={genre}
            className="bg-gray-300 text-lg bg-opacity-40 text-sm py-2 px-4 rounded-lg mt-2 mx-2"
          >
            {genre}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-4">
        <button className="bg-white py-3 px-8 text-lg rounded-lg font-semibold text-black flex gap-2 items-center hover:opacity-75">
          <img
            alt="play"
            src="https://www.svgrepo.com/show/69732/play-button.svg"
            className="w-5 h-5"
          ></img>
          Play
        </button>
        <button className="bg-gray-300 bg-opacity-40 text-lg py-3 px-8 rounded-lg font-semibold text-white flex gap-2 items-center hover:opacity-75">
          <img
            alt="play"
            src="https://upload.wikimedia.org/wikipedia/commons/4/43/Minimalist_info_Icon.png"
            className="w-5 h-5 filter invert"
          ></img>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
