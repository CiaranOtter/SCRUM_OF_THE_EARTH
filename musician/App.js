import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MetronomeScreen from './app/screens/MetronomeScreen';

export default function App() {
  return <MetronomeScreen></MetronomeScreen>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
