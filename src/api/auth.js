import { BASE_URL } from "./config";

export const login = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.status !== 200) {
    throw new Error("Error during login");
  }
  return await res.json();
};

export const register = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.status !== 201) {
    throw new Error("Email already in use");
  }
  return await res.json();
};
