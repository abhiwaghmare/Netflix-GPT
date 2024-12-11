import React from "react";
import { useEffect } from "react";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setBannerMovie } from "../Store/movieSlice";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movies && movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      dispatch(setBannerMovie(movies[randomIndex]));
    }
  }, [movies]);

  const mainMovie = useSelector((store) => store.movies?.bannerMovie);

  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoContainer id={id} />
    </div>
  );
};

export default MainContainer;
