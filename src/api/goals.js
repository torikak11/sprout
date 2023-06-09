import { BASE_URL } from "./config";

export const getGoals = async () => {
  const res = await fetch(`${BASE_URL}/goals`);
  if (res.status === 401) {
    throw new Error("Not authorized. Please sign in");
  }
  if (res.status !== 200) {
    throw new Error("Error fetching goals");
  }
  return await res.json();
};

export const getPlant = async (id) => {
  const res = await fetch(`${BASE_URL}/goals/${id}`);
  if (res.status === 401) {
    throw new Error("Not authorized. Please sign in");
  }
  if (res.status === 404) {
    throw new Error("Goal not found");
  }
  if (res.status !== 200) {
    throw new Error("Error fetching goals");
  }
  return await res.json();
};

export const createGoal = async (newGoal) => {
  const res = await fetch(`${BASE_URL}/goals`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (res.status === 401) {
    throw new Error("Not authorized. Please sign in");
  }
  if (res.status !== 200) {
    throw new Error("Error creating goal");
  }
  return await res.json();
};
