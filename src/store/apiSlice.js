import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authSlice } from "./authSlice";

const baseUrl = "http://localhost:3000/api/v1";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPlants: builder.query({
      query: () => `plants`,
    }),
    getPlant: builder.query({
      query: (id) => `plants/${id}`,
    }),
    getGoals: builder.query({
      query: () => "goals",
    }),
    getGoal: builder.query({
      query: (id) => `goals/${id}`,
    }),
    createGoal: builder.mutation({
      query: (newGoal) => ({
        url: "goals",
        method: "POST",
        body: newGoal,
      }),
    }),
    updateGoal: builder.mutation({
      query: ({ id, updatedGoal }) => ({
        url: `goals/${id}`,
        method: "PATCH",
        body: updatedGoal,
      }),
    }),
    deleteGoal: builder.mutation({
      query: (id) => ({
        url: `goals/${id}`,
        method: "DELETE",
      }),
    }),
    getHabits: builder.query({
      query: () => "habits",
    }),
    getHabit: builder.query({
      query: (id) => `habits/${id}`,
    }),
    createHabit: builder.mutation({
      query: (newHabit) => ({
        url: "habits",
        method: "POST",
        body: newHabit,
      }),
    }),
    updateHabit: builder.mutation({
      query: ({ id, updatedHabit }) => ({
        url: `habits/${id}`,
        method: "PATCH",
        body: updatedHabit,
      }),
    }),
    deleteHabit: builder.mutation({
      query: (id) => ({
        url: `habits/${id}`,
        method: "DELETE",
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      onSuccess: (data, { dispatch }) => {
        dispatch(authSlice.actions.setToken(data.token));
      },
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "auth/register",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const {
  useGetPlantsQuery,
  useGetPlantQuery,
  useGetGoalsQuery,
  useGetGoalQuery,
  useCreateGoalMutation,
  useUpdateGoalMutation,
  useDeleteGoalMutation,
  useGetHabitsQuery,
  useGetHabitQuery,
  useCreateHabitMutation,
  useUpdateHabitMutation,
  useDeleteHabitMutation,
  useLoginMutation,
  useRegisterMutation,
} = apiSlice;
