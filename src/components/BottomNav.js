import React from 'react';
import Home from '../screens/Home';
import GoalsNav from './GoalsNav';
import HabitsView from '../screens/HabitsView'; 
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
            component={GoalsNav} 
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
    );
};

export default BottomNav;