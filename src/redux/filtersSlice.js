import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  name: "",
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
  selectors: {
    selectNameFilter: (state) => state.name,
  },
});

export const { changeFilter } = filterSlice.actions;
export const filtersReducerSlice = filterSlice.reducer;
export const { selectNameFilter } = filterSlice.selectors;
