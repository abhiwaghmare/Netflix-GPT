import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
    selectedMovie: null,
    selectedMovieTrailer: null,
    bannerMovie: null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    removeTrailer: (state) => {
      state.trailer = null;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    setSelectedMovieTrailer: (state, action) => {
      state.selectedMovieTrailer = action.payload;
    },
    removeSelectedMovie: (state) => {
      state.selectedMovie = null;
    },
    removeSelectedMovieTrailer: (state) => {
      state.selectedMovieTrailer = null;
    },
    setBannerMovie: (state, action) => {
      state.bannerMovie = action.payload;
    },

  },
});

export const {
  setNowPlayingMovies,
  setTrailer,
  removeTrailer,
  setPopularMovies,
  setSelectedMovie,
  setSelectedMovieTrailer,
  removeSelectedMovie,
  removeSelectedMovieTrailer,
  setBannerMovie,
} = movies.actions;
export default movies.reducer;
