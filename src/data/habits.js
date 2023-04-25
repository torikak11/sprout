import { COLORS } from "./theme";

export default [
    {
        id: "1",
        name: "Exercise/Stretch",
        completed: true,
        harvest: false,
        streak: 3,
        plant: {
            id: "1",
            name: "Lavender",
            image: require("../../assets/images/medium-plant.png")
        },
        color: COLORS.green100,
    },
    {
        id: "2",
        name: "Drink 64 oz water",
        completed: false,
        harvest: true,
        streak: 4,
        plant: {
            id: "1",
            name: "Tomato",
            image: require("../../assets/images/large-plant.png"),
        },
        color: COLORS.blue200,
    },
    {
        id: "3",
        name: "Take a walk outside",
        completed: true,
        harvest: false,
        streak: 7,
        plant: {
            id: "1",
            name: "Tomato",
            image: require("../../assets/images/large-plant.png"),
        },
        color: COLORS.coral100,
    },
    {
        id: "4",
        name: "Practice French",
        completed: false,
        harvest: false,
        streak: 0,
        plant: {
            id: "1",
            name: "Tomato",
            image: require("../../assets/images/small-plant.png")
        },
        color: COLORS.blue100,
    },
]