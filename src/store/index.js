import { configureStore } from "@reduxjs/toolkit";
import { goalsApi } from "./goalsApi";
import { habitsSlice } from "./habitsSlice";

export const store = configureStore({
  reducer: {
    goals: goalsApi.reducer,
    habits: habitsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goalsApi.middleware),
});
