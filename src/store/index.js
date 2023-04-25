import { configureStore } from "@reduxjs/toolkit";
import { goalsSlice } from "./goalsSlice";
import { habitsSlice } from "./habitsSlice";

export const store = configureStore({
    reducer: {
        goals: goalsSlice.reducer,
        habits: habitsSlice.reducer,
    }
})