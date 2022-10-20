/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export interface userType {
  userName?: string;
}

interface initialStateType {
  user: userType;
}

const initialState: initialStateType = {
  user: {},
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (store, action) => {
      sessionStorage.setItem("userName", action.payload);
      store.user = { userName: action.payload };
    },
    getUser: (store) => {
      const userName = sessionStorage.getItem("userName") || "";
      store.user = { userName };
    },
    logUserOut: (store) => {
      sessionStorage.removeItem("userName");
      store.user = {};
    },
  },
});

export const { setUser, getUser, logUserOut } = user.actions;

export default user.reducer;
