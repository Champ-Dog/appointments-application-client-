import { createSlice } from "@reduxjs/toolkit";

// Get user name from token

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
