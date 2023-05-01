import { createSlice } from "@reduxjs/toolkit";
import habits from "../data/habits";

const initialState = {
    habits: [],
    selectedHabit: null,
};

export const habitsSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        addHabit: (state, action) => {
            const newHabit = action.payload.newHabit;
            state.habits.push({...newHabit, streak: 0, complete: false});
            console.log(state.habits)
        },
        deleteHabit: (state, action) => {
            const habitId = action.payload;
            state.habits = state.habits.filter((habit) => habit.id !== habitId)
        },
        editHabit: (state, action) => {
            const editedHabit = action.payload;
            const habitIndex = state.habits.findIndex((habit) => habit.id === editedHabit.id);
            if (habitIndex !== -1) {
                state.habits[habitIndex] = {...editedHabit}
            }
            console.log(state.habits)
        },
        setSelectedHabit: (state, action) => {
            const habitId = action.payload;
            state.selectedHabit = state.habits.find((habit) => habit.id === habitId);
        },
    },
});