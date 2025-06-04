import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter.slide";
import userReducer from "./user/user.slide";
// Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer,

    user: userReducer,
  },
  devTools: true, // Kích hoạt Redux DevTools
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { sosnu: { value: 0 } }
export type AppDispatch = typeof store.dispatch;
