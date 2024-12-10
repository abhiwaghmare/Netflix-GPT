import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import usePopularMovies from "../CustomHooks/usePopularMovies";
import { useSelector } from "react-redux";
import GPTContainer from "./GPTContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const showGPTContainer = useSelector((store) => store?.gpt?.showGPTPage);
  console.log("showGPTPage", showGPTContainer);
  return (
    <div>
      <Header />
      {showGPTContainer ? (
        <GPTContainer />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
