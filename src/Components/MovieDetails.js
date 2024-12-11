import React from "react";
import Header from "./Header";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const MovieDetails = () => {
  window.scrollTo(0, 0);
  const movie = useSelector((store) => store.movies?.selectedMovie);
  if (!movie) return null;
  const { original_title, overview, id } = movie;
  return (
    <div>
      <Header />
      <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoContainer id={id} />
      </div>
    </div>
  );
};

export default MovieDetails;
