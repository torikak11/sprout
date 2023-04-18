export default [
    {
        name: "Create a mobile app",
        steps: {
            step: {
                id: "1",
                name: "Design wireframe in Figma",
                complete: true,
            },
            step: {
                id: "2",
                name: "Design static layout in Figma",
                complete: true,
            },
            step: {
                id: "3",
                name: "Create project in React Native",
                complete: true,
            },
        },
        due: "2023-05-05",
        plant: {
            id: "1",
            name: "Lavender",
            image: require("../../assets/images/large-plant.png"),
        },
        color: '#7C826B',
        percentage: 100,
    },
    {
        name: "Read 10 books",
        steps: {
            step: {
                id: "1",
                name: "Book 1",
                complete: true,
            },
            step: {
                id: "2",
                name: "Book 2",
                complete: true,
            },
            step: {
                id: "3",
                name: "Book 3",
                complete: true,
            },
            step: {
                id: "4",
                name: "Book 4",
                complete: true,
            },
            step: {
                id: "5",
                name: "Book 5",
                complete: false,
            },
            step: {
                id: "6",
                name: "Book 6",
                complete: false,
            },
            step: {
                id: "7",
                name: "Book 7",
                complete: false,
            },
            step: {
                id: "8",
                name: "Book 8",
                complete: false,
            },
            step: {
                id: "9",
                name: "Book 9",
                complete: false,
            },
            step: {
                id: "10",
                name: "Book 10",
                complete: false,
            },
        },
        due: "2024-01-01",
        plant: {
            id: "1",
            name: "Lavender",
            image: require("../../assets/images/medium-plant.png")
        },
        color: '#c5d9d9',
        percentage: 40,
    },
    {
        name: "Learn 500 vocabulary words in French",
        steps: {
            step: {
                id: "1",
                name: "Learn 100 words",
                complete: true,
            },
            step: {
                id: "2",
                name: "Learn 200 words",
                complete: false,
            },
            step: {
                id: "3",
                name: "Learn 300 words",
                complete: false,
            },
            step: {
                id: "4",
                name: "Learn 400 words",
                complete: false,
            },
            step: {
                id: "5",
                name: "Learn 500 words",
                complete: false,
            },
        },
        due: "2023-06-25",
        plant: {
            id: "1",
            name: "Lavender",
            image: require("../../assets/images/small-plant.png")
        },
        color: '#DBB18A',
        percentage: 20,
    },
    {
        name: "Do 15 pullups",
        steps: {
            step: {
                id: "1",
                name: "Do 5 pullups",
                complete: false,
            },
            step: {
                id: "2",
                name: "Do 10 pullups",
                complete: false,
            },
            step: {
                id: "3",
                name: "Do 15 pullups",
                complete: false,
            },
        },
        due: "None",
        plant: {
            id: "1",
            name: "Lavender",
            image: require("../../assets/images/small-plant.png")
        },
        color: '#1D2A2E',
        percentage: 0,
    },
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
        color: COLORS.coral200,
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