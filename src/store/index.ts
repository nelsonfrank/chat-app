import { configureStore } from "@reduxjs/toolkit";

// features
import userReducer from './features/userSlice';
import messagesReducer from "./features/messagesSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messagesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
