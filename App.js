import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { COLORS } from './src/data/theme';
import Home from './src/screens/Home';
import GoalsView from './src/screens/GoalsView';

export default function App() {
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
