import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import MetronomeScreen from './app/screens/MetronomeScreen';
import TunerScreen from './app/screens/TunerScreen';
import ToolScreen from './app/screens/ToolScreen';
import PracticeScreen from './app/screens/PracticeScreen';
import SettingsScreen from './app/screens/SettingsScreen';

import { Icon } from 'react-native-elements';

import Navigator from './app/components/navigate';

// const nav = useNavigationContainerRef();

export default function App() {
  const nav = useNavigationContainerRef();
  const Stack = new createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer ref={nav} >
                <Stack.Navigator >
                    <Stack.Screen name="metronome" component={MetronomeScreen} />
                    <Stack.Screen name="tuner" component={TunerScreen} />
                    <Stack.Screen name="tools" component={ToolScreen} />
                    <Stack.Screen name="practice" component={PracticeScreen} />
                    <Stack.Screen name="settings" component={SettingsScreen} />
                </Stack.Navigator>
            </NavigationContainer>

      <View style={styles.nav_container}>
        <Icon name="audiotrack" onPress={() => {nav.navigate('tuner')}}>Test</Icon>
        <Icon name="details" onPress={() => {nav.navigate('metronome')}}>Test</Icon>
        <Icon name="construction" onPress={() => {nav.navigate('tools')}}>Test</Icon>
        <Icon name="content-paste" onPress={() => {nav.navigate('practice')}}>Test</Icon>
        <Icon name="settings" onPress={() => {nav.navigate('settings')}}>Test</Icon>
      </View>
    </View>
      // {/* <Button onPress={() => {nav.navigate("tuner")} }><Text>Test</Text></Button> */}
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav_container: {
    flexDirection: 'row',
    margin: "auto"
  }
});
