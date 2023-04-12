import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { COLORS } from './src/data/theme';
import Home from './src/screens/Home';
import GoalsView from './src/screens/GoalsView';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    PlayfairDisplayRegular: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    PlayfairDisplayBold: require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

  if(!loaded) return null;

  return (
    <View style={styles.container}>
      <GoalsView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white200,
  },
});
