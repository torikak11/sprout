import { AUTH_TOKEN, BASE_URL } from "./config";

export const getGoals = async () => {
  const res = await fetch(`${BASE_URL}/goals`, {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    }
  });
  if (res.status === 401) {
    throw new Error("Not authorized. Please sign in");
  }
  if (res.status !== 200) {
    throw new Error("Error fetching goals");
  }
  return await res.json();
};

export const getGoal = async (id) => {
  const res = await fetch(`${BASE_URL}/goals/${id}`, {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    }
  });
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

export const createGoal = async (data) => {
  const res = await fetch(`${BASE_URL}/goals`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (res.status === 401) {
    throw new Error("Not authorized. Please sign in");
  }
  if (res.status !== 201) {
    throw new Error("Error creating goal");
  }
  return await res.json();
};

export const updateGoal = async (data) => {
  const id = data._id
  const res = await fetch(`${BASE_URL}/goals/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (res.status === 401) {
    throw new Error("Not authorized. Please sign in");
  }
  if (res.status !== 200) {
    throw new Error("Error updating goal");
  }
  return await res.json();
};

export const deleteGoal = async (id) => {
  const res = await fetch(`${BASE_URL}/goals/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      'Content-type': 'application/json',
    },
  });
  if (res.status === 401) {
    throw new Error("Not authorized. Please sign in");
  }
  if (res.status !== 200) {
    throw new Error("Error deleting goal");
  }
  return await res.text();
};
