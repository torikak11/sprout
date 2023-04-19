import React from 'react';
import BottomNav from './src/navigation/BottomNav';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';

export default function App() {
  const [loaded] = useFonts({
    PlayfairDisplayRegular: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    PlayfairDisplayBold: require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

  if(!loaded) return null;

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <BottomNav />
    </NavigationContainer>
  );
};