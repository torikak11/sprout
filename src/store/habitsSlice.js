import { createSlice } from "@reduxjs/toolkit";
import habits from "../data/habits";

const initialState = {
    habits: habits,
    selectedHabit: null,
};

export const habitsSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        setSelectedHabit: (state, action) => {
            const habitId = action.payload;
            state.selectedHabit = state.habits.find((h) => h.id === habitId);
        }
    },
});