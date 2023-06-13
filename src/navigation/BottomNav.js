import React from 'react';
import Home from '../screens/Home';
import GoalsNav from './GoalsNav';
import Store from '../screens/Store';
import NewGoalNav from './NewGoalNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../data/theme';
import IonIcons from '@expo/vector-icons/Ionicons';

const BottomNav = () => {
    const Tab = createBottomTabNavigator();

    return (
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
            component={Store} 
            options={{
                tabBarIcon: ({color}) => (
                <IonIcons name="basket" color={color} size={32} />
                )
            }}
            />
            <Tab.Screen 
            name={'New'} 
            component={NewGoalNav} 
            options={{
                tabBarIcon: ({color, size}) => (
                <IonIcons name="add-circle" color={color} size={30} />
                )
            }}
            />
            <Tab.Screen 
            name={'Goals'} 
            component={GoalsNav} 
            options={{
                tabBarIcon: ({color, size}) => (
                <IonIcons name="flower" color={color} size={size} />
                )
            }}
            />
        </Tab.Navigator>
    );
};

export default BottomNav;