import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  name: "",
  number: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    changeFilter: {
      reducer(state, action) {
        return {
          name: action.payload,
        };
      },
      prepare(txt) {
        return {
          payload: txt,
        };
      },
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filtersReducerSlice = filterSlice.reducer;
