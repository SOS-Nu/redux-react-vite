import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  mode: string;
} = {
  mode: "light",
};

export const appSlide = createSlice({
  name: "appMode",
  initialState,
  reducers: {
    changeMode(state, action) {
      console.log("checkk action", action);
      state.mode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMode } = appSlide.actions;

export default appSlide.reducer;
