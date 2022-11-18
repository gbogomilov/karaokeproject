import { createSlice, configureStore } from "@reduxjs/toolkit";
import { initialState } from "../initialStates/initialStates";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, user) => {
      console.log("setUserInfo", user);
      state.displayName = user.payload.displayName;
      state.firstName = user.payload.firstName;
      state.lastName = user.payload.lastName;
      state.email = user.payload.email;
      state.token = user.payload.token;
      state.isLoggedIn = true;
    },
    clearUserInfo: (state) => {
      state.displayName = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});
export const userActions = userSlice.actions;
export const store = configureStore({ reducer: { user: userSlice.reducer } });
