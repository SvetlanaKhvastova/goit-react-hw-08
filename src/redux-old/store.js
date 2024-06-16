// toolkit -----------------------------------------------------
import { contactsReducer, filtersReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

// redux -----------------------------------------------------
// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
