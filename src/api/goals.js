import { createContext, useContext } from "react";
import { BASE_URL } from "./config";
import { useAuth } from "../context/AuthContext";

const GoalsApiContext = createContext({});

const GoalsApiContextProvider = ({ children }) => {
  const { authToken } = useAuth();

  const getGoals = async () => {
    const res = await fetch(`${BASE_URL}/goals`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === 401) {
      throw new Error("Not authorized. Please sign in");
    }
    if (res.status !== 200) {
      throw new Error("Error fetching goals");
    }
    return await res.json();
  };

  const getGoal = async (id) => {
    const res = await fetch(`${BASE_URL}/goals/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
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

  const createGoal = async (data) => {
    const res = await fetch(`${BASE_URL}/goals`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-type": "application/json",
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

  const updateGoal = async (data) => {
    const id = data._id;
    const res = await fetch(`${BASE_URL}/goals/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-type": "application/json",
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

  const deleteGoal = async (id) => {
    const res = await fetch(`${BASE_URL}/goals/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-type": "application/json",
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

  const getUserName = async () => {
    const res = await fetch(`${BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (res.status === 401) {
      throw new Error("Not authorized. Please sign in");
    }
    if (res.status !== 200) {
      throw new Error("Error fetching goals");
    }
    return await res.json();
  }

  return (
    <GoalsApiContext.Provider
      value={{ getGoals, getGoal, createGoal, updateGoal, deleteGoal, getUserName }}
    >
      {children}
    </GoalsApiContext.Provider>
  );
};

export default GoalsApiContextProvider;

export const useGoalsApi = () => useContext(GoalsApiContext);
