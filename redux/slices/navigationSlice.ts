//libraries
import { createSlice } from "@reduxjs/toolkit";

export interface NavigationSlice {
  isNavActive: boolean;
  withShadow: boolean;
}

const initialState: NavigationSlice = {
  isNavActive: false,
  withShadow: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleNavigation: (state) => {
      state.isNavActive = !state.isNavActive;
    },
    toggleShadow: (state, action) => {
      state.withShadow = action.payload;
    },
  },
});

export const { toggleNavigation, toggleShadow } = navigationSlice.actions;

export default navigationSlice.reducer;
