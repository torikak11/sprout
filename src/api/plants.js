import { BASE_URL } from "./config";

export const getPlants = async () => {
  const res = await fetch(`${BASE_URL}/plants`);
  if (res.status !== 200) {
    throw new Error("Error fetching plants");
  }
  return await res.json();
};

export const getPlant = async (id) => {
  const res = await fetch(`${BASE_URL}/plants/${id}`);
  if (res.status === 404) {
    throw new Error("Plant not found");
  }
  if (res.status !== 200) {
    throw new Error("Error fetching plants");
  }
  return await res.json();
};
