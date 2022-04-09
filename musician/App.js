import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MetronomeScreen from './app/screens/MetronomeScreen';
import React from "react";
import Metronome from "./Metronome";

export default function App() {
  return <MetronomeScreen></MetronomeScreen>
}

// //export default function App(){
//   return(
//       <div className="App">
//         <Metronome/>
//       </div>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
