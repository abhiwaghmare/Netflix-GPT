import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTPage: false,
  },
  reducers: {
    showGptSearch: (state) => {
      state.showGPTPage = !state.showGPTPage;
    },
  },
});

export const { showGptSearch } = GPTSlice.actions;
export default GPTSlice.reducer;
