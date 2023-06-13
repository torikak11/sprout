import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../data/theme";
import IonIcons from '@expo/vector-icons/Ionicons';
import BottomNav from "./BottomNav";
import Login from "../screens/Login";
import Register from "../screens/Register";

const LoginNav = () => {
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
                name="Login" 
                component={Login} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Register" 
                component={Register} 
                options={{
                    title: '',
                }}
            />
            <Stack.Screen 
                name="Home" 
                component={BottomNav} 
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default LoginNav;