// toolkit createSlice -----------------------------------------------------
import { contactsReducerSlice } from "./contactsSlice";
import { filtersReducerSlice } from "./filtersSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "items",
  storage,
};

const persistedContactReducer = persistReducer(persistConfig, contactsReducerSlice);

const rootReducer = combineReducers({
  contacts: persistedContactReducer,
  filters: filtersReducerSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
