import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utilities/Constants";
import { useDispatch } from "react-redux";
import { setTrailer } from "../Store/movieSlice";
import { setSelectedMovieTrailer } from "../Store/movieSlice";

const useTrailerHook = (id) => {
  const dispatch = useDispatch();
  const fetchTrailerData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((item) => item.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json[0];
    const path = window.location.pathname;
    if (path.includes("browse")) {
      dispatch(setTrailer(trailer));
    } else if (path.includes("movie")) {
      dispatch(setSelectedMovieTrailer(trailer));
    }
  };
  useEffect(() => {
    fetchTrailerData();
  }, []);
  return <div></div>;
};

export default useTrailerHook;
