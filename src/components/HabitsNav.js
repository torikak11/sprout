import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../data/theme";
import IonIcons from '@expo/vector-icons/Ionicons';
import { Pressable } from "react-native";
import HabitsView from '../screens/HabitsView'; 
import HabitDetails from "../screens/HabitDetails";

const HabitsNav = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerBackTitleVisible: false,
                headerBackImage: () => (
                    <IonIcons name="arrow-back-outline" size={32} color={COLORS.blue200} />
                )
            }}
        >
            <Stack.Screen 
                name="Stack Habits" 
                component={HabitsView} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Habit Details" 
                component={HabitDetails} 
                options={{ 
                    presentation: 'modal',
                    title: '',
                    headerStyle: {
                        backgroundColor: COLORS.white200,
                        borderBottomWidth: 0,
                        shadowOpacity: 0,
                        elevation: 0,
                    },
                    headerRight: () => (
                        <Pressable style={{marginRight: 5}}>
                            <IonIcons name="brush-outline" size={30} color={COLORS.blue200} />
                        </Pressable>
                    )
                }}
            />
        </Stack.Navigator>
    );
};

export default HabitsNav;