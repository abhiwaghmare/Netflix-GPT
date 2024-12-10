import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTPage: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    showGptSearch: (state) => {
      state.showGPTPage = !state.showGPTPage;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    removeGPTMovieResult: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const { showGptSearch, addGptMovieResult, removeGPTMovieResult } =
  GPTSlice.actions;
export default GPTSlice.reducer;
