import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter.slide";

// Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer,

    balance: counterReducer,
  },
  devTools: true, // Kích hoạt Redux DevTools
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { sosnu: { value: 0 } }
export type AppDispatch = typeof store.dispatch;
