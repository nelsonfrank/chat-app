/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface messages {
  userName?: string;
  message?: string;
}

interface initialStateType {
  messages: messages[];
  isLoading: boolean;
}

const initialState: initialStateType = {
  messages: [],
  isLoading: false,
};

export const addMessage = createAsyncThunk(
  "messages/addMessage",
  async (
    messageObj: { message: string; userName: string; allMessages: messages[] },
    thunkAPI
  ) => {
    const { message, userName, allMessages } = messageObj;
    const messages = [...allMessages, { message, userName }];
    localStorage.setItem("messages", JSON.stringify(messages));
    return messages;
  }
);
export const getMessages = createAsyncThunk(
  "messages/getMessages",
  async (message, thunkAPI) => {
    const data = localStorage.getItem("messages");
    const messages = data ? JSON.parse(data) : "";
    return [...messages];
  }
);
const messages = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload;
      })
      .addCase(addMessage.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// export const { addMessage, getMessages } = messages.actions;

export default messages.reducer;
