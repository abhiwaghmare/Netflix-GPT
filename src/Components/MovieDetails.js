import React, { useEffect } from "react";
import Header from "./Header";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import CastList from "./CastList";

const MovieDetails = () => {
  window.scrollTo(0, 0);

  const movie = useSelector((store) => store.movies?.selectedMovie);
  if (!movie) return null;
  const { original_title, overview, id, genre_ids } = movie;
  return (
    <div>
      <div>
        <Header />
        <div>
          <VideoTitle
            title={original_title}
            overview={overview}
            genres={genre_ids}
          />
          <VideoContainer id={id} />
        </div>
      </div>
      <div>
        <CastList id={id}/>
      </div>
    </div>
  );
};

export default MovieDetails;
