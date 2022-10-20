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
      localStorage.setItem("userName", action.payload);
      store.user = { userName: action.payload };
    },
    getUser: (store) => {
      const userName = localStorage.getItem("userName") || "";
      store.user = { userName };
    },
  },
});

export const { setUser, getUser } = user.actions;

export default user.reducer;
