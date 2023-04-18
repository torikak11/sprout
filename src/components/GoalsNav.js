import { createStackNavigator } from "@react-navigation/stack";
import GoalsView from "../screens/GoalsView";
import GoalDetails from "../screens/GoalDetails";
import EditGoal from "../screens/EditGoal";
import { COLORS } from "../data/theme";
import IonIcons from '@expo/vector-icons/Ionicons';
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GoalsNav = () => {
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
                name="Stack Goals" 
                component={GoalsView} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Goal Details" 
                component={GoalDetails} 
                options={({navigation}) => ({ 
                    presentation: 'modal',
                    title: '',
                    headerRight: () => (
                        <Pressable onPress={() => navigation.navigate('Edit Goal')} style={{marginRight: 5}}>
                            <IonIcons name="brush-outline" size={30} color={COLORS.blue200} />
                        </Pressable>
                    )
                })}
            />
            <Stack.Screen 
                name="Edit Goal" 
                component={EditGoal}
                options={{
                    title: '',
                }}
            />
        </Stack.Navigator>
    );
};

export default GoalsNav;