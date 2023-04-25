
export default [
    {
        id: "1",
        name: "Create a mobile app",
        steps: [
            {
                id: "1",
                name: "Design wireframe in Figma",
                complete: true,
            },
            {
                id: "2",
                name: "Design static layout in Figma",
                complete: true,
            },
            {
                id: "3",
                name: "Create project in React Native",
                complete: true,
            },
        ],
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
        id: "2",
        name: "Read 10 books",
        steps: [
            {
                id: "1",
                name: "Book 1",
                complete: true,
            },
            {
                id: "2",
                name: "Book 2",
                complete: true,
            },
            {
                id: "3",
                name: "Book 3",
                complete: true,
            },
            {
                id: "4",
                name: "Book 4",
                complete: true,
            },
            {
                id: "5",
                name: "Book 5",
                complete: false,
            },
            {
                id: "6",
                name: "Book 6",
                complete: false,
            },
            {
                id: "7",
                name: "Book 7",
                complete: false,
            },
            {
                id: "8",
                name: "Book 8",
                complete: false,
            },
            {
                id: "9",
                name: "Book 9",
                complete: false,
            },
            {
                id: "10",
                name: "Book 10",
                complete: false,
            },
        ],
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
        id: "3",
        name: "Learn 500 vocabulary words in French",
        steps: [
            {
                id: "1",
                name: "Learn 100 words",
                complete: true,
            },
            {
                id: "2",
                name: "Learn 200 words",
                complete: false,
            },
            {
                id: "3",
                name: "Learn 300 words",
                complete: false,
            },
            {
                id: "4",
                name: "Learn 400 words",
                complete: false,
            },
            {
                id: "5",
                name: "Learn 500 words",
                complete: false,
            },
        ],
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
        id: "4",
        name: "Do 15 pullups",
        steps: [
            {
                id: "1",
                name: "Do 5 pullups",
                complete: false,
            },
            {
                id: "2",
                name: "Do 10 pullups",
                complete: false,
            },
            {
                id: "3",
                name: "Do 15 pullups",
                complete: false,
            },
        ],
        due: "None",
        plant: {
            id: "1",
            name: "Lavender",
            image: require("../../assets/images/small-plant.png")
        },
        color: '#1D2A2E',
        percentage: 0,
    },
]