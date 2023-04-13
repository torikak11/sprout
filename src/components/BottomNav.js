import React from 'react';
import Home from '../screens/Home';
import GoalsView from '../screens/GoalsView';
import HabitsView from '../screens/HabitsView'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../data/theme';
import IonIcons from '@expo/vector-icons/Ionicons';

const BottomNav = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.blue200,
                tabBarInactiveTintColor: COLORS.white100,
                tabBarStyle: {
                    backgroundColor: COLORS.green100,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    position: 'absolute',
                },
            }}>
                <Tab.Screen 
                name={'Home'} 
                component={Home} 
                options={{
                    tabBarIcon: ({color, size}) => (
                    <IonIcons name="home" color={color} size={size} />
                    )
                }}
                />
                <Tab.Screen 
                name={'Store'} 
                component={Home} 
                options={{
                    tabBarIcon: ({color, size}) => (
                    <IonIcons name="pricetag" color={color} size={size} />
                    )
                }}
                />
                <Tab.Screen 
                name={'New'} 
                component={Home} 
                options={{
                    tabBarIcon: ({color, size}) => (
                    <IonIcons name="add-circle" color={color} size={size} />
                    )
                }}
                />
                <Tab.Screen 
                name={'Goals'} 
                component={GoalsView} 
                options={{
                    tabBarIcon: ({color, size}) => (
                    <IonIcons name="rose" color={color} size={size} />
                    )
                }}
                />
                <Tab.Screen 
                name={'Habits'} 
                component={HabitsView} 
                options={{
                    tabBarIcon: ({color, size}) => (
                    <IonIcons name="leaf" color={color} size={size} />
                    )
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomNav;