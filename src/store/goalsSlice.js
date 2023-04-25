import { createSlice } from "@reduxjs/toolkit";
import goals from "../data/goals";

const initialState = {
    goals: goals,
    selectedGoal: null,
};

export const goalsSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {
        setSelectedGoal: (state, action) => {
            const goalId = action.payload;
            state.selectedGoal = state.goals.find((g) => g.id === goalId);
        }
    },
})