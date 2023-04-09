import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;

      if (!action.payload) {
        state.user = null;
      }
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setIsLoggedIn, setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
