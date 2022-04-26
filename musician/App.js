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
import { TouchableOpacity } from 'react-native-gesture-handler';

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

        <TouchableOpacity style={styles.icon} onPress={() => {nav.navigate('tuner')}}>
          <Icon name="audiotrack"/>
          <Text style={styles.nav_text}>Tuner</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {nav.navigate('metronome')}} style={styles.icon}>
          <Icon  name="details" />
          <Text style={styles.nav_text}>metronome</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {nav.navigate('tools')}} style={styles.icon}>
          <Icon  name="construction" />
          <Text style={styles.nav_text} >Tools</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {nav.navigate('practice')}} style={styles.icon}>
          <Icon  name="content-paste" />
          <Text style={styles.nav_text}>practice</Text> 
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {nav.navigate('settings')}} style={styles.icon}>
          <Icon name="settings" />
          <Text style={styles.nav_text}>settings</Text>
        </TouchableOpacity>

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
  },
  icon: {
    padding: 20
  },
  nav_text: {
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  }
});
