import React from "react";
import useTrailerHook from "../CustomHooks/useTrailerHook";
import { useSelector } from "react-redux";

const VideoContainer = ({ id }) => {
  useTrailerHook(id);
  const trailer = useSelector((store) => store.movies?.trailer);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        width="w-screen aspect-video"
        height="aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&mute=1&loop=1&playlist=" +
          trailer?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
