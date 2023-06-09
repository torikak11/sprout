import { createApi, fetchBaseQuery } from "@reduxjs/toolkit";

const baseUrl = "http://localhost:3000/api/v1";

export const goalsApi = createApi({
  reducerPath: "goals",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllGoals: builder.query({
      query: () => `/goals`,
    }),
    getGoal: builder.query({
      query: (id) => `/goals/${id}`,
    }),
    createGoal: builder.mutation({
      query: (goal) => ({
        url: "/goals",
        method: "POST",
        body: goal,
      }),
    }),
    updateGoal: builder.mutation({
      query: ({ id, ...goal }) => ({
        url: `/goals/${id}`,
        method: "PATCH",
        body: goal,
      }),
    }),
    deleteGoal: builder.mutation({
      query: (id) => ({
        url: `/goals/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllGoalsQuery,
  useGetGoalQuery,
  useCreateGoalQuery,
  useUpdateGoalQuery,
  useDeleteGoalQuery,
} = goalsApi;

// const initialState = {
//   goals: [],
//   selectedGoal: null,
// };

// export const goalsSlice = createSlice({
//   name: "goals",
//   initialState,
//   reducers: {
//     addGoal: (state, action) => {
//       const newGoal = action.payload.newGoal;
//       state.goals.push({ ...newGoal, percentage: 0, complete: false });
//       console.log(state.goals);
//     },
//     deleteGoal: (state, action) => {
//       const goalId = action.payload;
//       state.goals = state.goals.filter((goal) => goal.id !== goalId);
//     },
//     editGoal: (state, action) => {
//       const editedGoal = action.payload;
//       const goalIndex = state.goals.findIndex(
//         (goal) => goal.id === editedGoal.id
//       );
//       if (goalIndex !== -1) {
//         state.goals[goalIndex] = { ...editedGoal };
//       }
//       console.log(state.goals);
//     },
//     setSelectedGoal: (state, action) => {
//       const goalId = action.payload;
//       state.selectedGoal = state.goals.find((goal) => goal.id === goalId);
//     },
//   },
// });
