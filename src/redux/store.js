// toolkit createSlice -----------------------------------------------------
import { contactsReducerSlice } from "./contactsSlice";
import { filtersReducerSlice } from "./filtersSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactsReducerSlice,
    filters: filtersReducerSlice,
  },
});
