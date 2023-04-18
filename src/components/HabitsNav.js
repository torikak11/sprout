import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../data/theme";
import IonIcons from '@expo/vector-icons/Ionicons';
import { Pressable } from "react-native";
import HabitsView from '../screens/HabitsView'; 
import HabitDetails from "../screens/HabitDetails";
import EditHabit from "../screens/EditHabit";

const HabitsNav = () => {
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
                name="Stack Habits" 
                component={HabitsView} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Habit Details" 
                component={HabitDetails} 
                options={({navigation}) =>({ 
                    presentation: 'modal',
                    title: '',
                    headerRight: () => (
                        <Pressable onPress={() => navigation.navigate('Edit Habit')} style={{marginRight: 5}}>
                            <IonIcons name="brush-outline" size={30} color={COLORS.blue200} />
                        </Pressable>
                    )
                })}
            />
            <Stack.Screen 
                name="Edit Habit" 
                component={EditHabit}
                options={{
                    title: '',
                }}
            />
        </Stack.Navigator>
    );
};

export default HabitsNav;