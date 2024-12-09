import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setTrailer: (state, action) => {
      state.trailer = action.payload
  },
}
});

export const { setNowPlayingMovies,setTrailer } = movies.actions;
export default movies.reducer;
