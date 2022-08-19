import { createSlice } from "@reduxjs/toolkit";

// Show or hide loading state (for alerts), modularised for universal usage

export const alertsSlice = createSlice({
  name: "alerts",
  // By default nothing should be loading, so this is set as default state
  initialState: {
    loading: false,
  },

  // Reducers to show or hiding loading
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { showLoading, hideLoading } = alertsSlice.actions;
