import React, { useState, useEffect } from "react";
import { API_OPTIONS } from "../Utilities/Constants";
import CastCard from "./CastCard";

const CastList = ({ id }) => {
  const [movieCast, setMovieCast] = useState([]);

  const getMovieCast = async (id) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/credits?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const actingCast = json.cast.filter(
      (actor) => actor.known_for_department === "Acting"
    );
    setMovieCast(actingCast.slice(0, 12));
  };

  useEffect(() => {
    getMovieCast(id);
  }, [id]);

  return (
    <div className="bg-[#141414] ">
      <h1 className="text-white text-3xl p-4 font-semibold">Cast:</h1>
      <div className="flex flex-wrap">
        {movieCast.map((actor) => (
          <div key={actor.id} className="m-2 p-2">
            <CastCard name={actor.name} profile_path={actor.profile_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastList;
