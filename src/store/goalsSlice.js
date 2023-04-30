import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    goals: [],
    selectedGoal: null,
};

export const goalsSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {
        addGoal: (state, action) => {
            const newGoal = action.payload.newGoal;
            state.goals.push({...newGoal, percentage: 0, complete: false})
            console.log(state.goals)
        },
        deleteGoal: (state, action) => {
            const goalId = action.payload;
            state.goals = state.goals.filter((goal) => goal.id !== goalId)
        },
        editGoal: (state, action) => {
            const editedGoal = action.payload;
            const goalIndex = state.goals.findIndex((goal) => goal.id === editedGoal.id);
            if (goalIndex !== -1) {
                state.goals[goalIndex] = {...editedGoal}
            }
            console.log(state.goals)
        },
        setSelectedGoal: (state, action) => {
            const goalId = action.payload;
            state.selectedGoal = state.goals.find((goal) => goal.id === goalId);
        },
        sortGoals: (state, action) => {
            const currentGoals = action.payload;
            state.goals = currentGoals.sort((a, b) => b.complete - a.complete);
        },
    },
});