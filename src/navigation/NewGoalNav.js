import { createStackNavigator } from "@react-navigation/stack";
import AddNew from "../screens/AddNew";
import NewGoal from '../screens/NewGoal';
import { COLORS } from "../data/theme";
import IonIcons from '@expo/vector-icons/Ionicons';

const NewGoalNav = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.white200,
                    borderBottomWidth: 0,
                    shadowOpacity: 0,
                    elevation: 0,
                },
                headerBackTitleVisible: false,
                headerBackImage: () => (
                    <IonIcons name="arrow-back-outline" size={32} color={COLORS.blue200} />
                )
            }}
        >
            <Stack.Screen 
                name="Add New" 
                component={AddNew} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="New Goal" 
                component={NewGoal} 
                options={{
                    title: '',
                }}
            />
        </Stack.Navigator>
    );
};

export default NewGoalNav;