import { createStackNavigator } from "@react-navigation/stack";
import GoalsView from "../screens/GoalsView";
import GoalDetails from "../screens/GoalDetails";

const GoalsNav = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Goals" component={GoalsView} />
            <Stack.Screen name="Goal Details" component={GoalDetails} />
        </Stack.Navigator>
    );
};

export default GoalsNav;