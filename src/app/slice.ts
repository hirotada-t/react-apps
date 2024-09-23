import { createSlice } from "@reduxjs/toolkit";

const settings = createSlice({
  name: "settings",
  initialState: {
    darkMode: true,
  },
  reducers: {
    changeMode: (state) => {
      state.darkMode = !state.darkMode
    },
  },
});

export default settings.reducer;