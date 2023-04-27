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
            state.goals.push({id: newGoal.id, name: newGoal.name, steps: newGoal.steps, color: newGoal.color, plant: newGoal.plant, percentage: 0})
            console.log(state.goals)
        },
        deleteGoal: (state, action) => {
            const goalId = action.payload;
            state.goals = state.goals.filter((goal) => goal.id !== goalId)
        },
        setSelectedGoal: (state, action) => {
            const goalId = action.payload;
            state.selectedGoal = state.goals.find((g) => g.id === goalId);
        }
    },
});