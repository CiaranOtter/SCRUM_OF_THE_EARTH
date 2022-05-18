<<<<<<< HEAD
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
=======
import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
>>>>>>> React-pure-backup
import {Button, StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { mdiMusicCircle } from '@mdi/js';

<<<<<<< HEAD
import MetronomeScreen from './app/screens/MetronomeScreen';
import _6SMTunerScreen from './app/screens/TunerScreen';
import _4SMTunerScreen from './app/screens/4_StringManualTunerScreen';
import _4SATunerScreen from './app/screens/4_StringAutomaticTunerScreen';
=======
import MetronomeScreen from './app/screens/MetronomeScreen.js';
import _6SMTunerScreen from './app/screens/TunerScreen';
import _4SMTunerScreen from './app/screens/4_StringManualTunerScreen';
import _4SATunerScreen from './app/screens/4_StringAutomaticTunerScreen';
import ChromaticScreen from './app/screens/ChromaticScreen';
>>>>>>> React-pure-backup
import ToolScreen from './app/screens/ToolScreen';
import PracticeScreen from './app/screens/PracticeScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import BeatMakerScreen from './app/screens/BeatMakerScreen.js';

<<<<<<< HEAD
//manual tuner screen for testing purposes
import ManualTunerScreen from './app/screens/ManualTunerScreen';

import { Icon } from 'react-native-elements';

import Navigator from './app/components/navigate';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChromaticScreen from './app/screens/ChromaticScreen';

// const nav = useNavigationContainerRef();
=======
import {Icon} from 'react-native-elements';

import {TouchableOpacity} from 'react-native-gesture-handler';
>>>>>>> React-pure-backup

export default function App() {
  const nav = useNavigationContainerRef();
  const Stack = new createStackNavigator();

  return (
<<<<<<< HEAD

    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={"#fff"}
        barStyle={"dark-content"}
      />
      <NavigationContainer ref={nav} >
                <Stack.Navigator >
                    <Stack.Screen options={{ headerShown: false }}  name="metronome" component={MetronomeScreen} />
                    <Stack.Screen options={{ headerShown: false }} name="6SMTuner" component={_6SMTunerScreen} />
                    <Stack.Screen options={{ headerShown: false }} name="4SMTuner" component={_4SMTunerScreen}/>
                    <Stack.Screen options={{ headerShown: false }} name="4SATuner" component={_4SATunerScreen}/>
                    <Stack.Screen options={{ headerShown: false }} name="Chromatic" component={ChromaticScreen}/>
                    <Stack.Screen options={{ headerShown: false }}  name="tools" component={ToolScreen} />
                    <Stack.Screen options={{ headerShown: false }}  name="practice" component={PracticeScreen} />
                    <Stack.Screen options={{ headerShown: false }}  name="settings" component={SettingsScreen} />
                </Stack.Navigator>
      </NavigationContainer>

      <View style={styles.nav_container}>
        <Pressable onPress={() => {nav.navigate('4SMTuner')}} style={styles.icon_container}>
          <Icon name="audiotrack" />
          <Text>Tuner</Text>
        </Pressable>
=======
    <View style={{flex: 1}}>
      <NavigationContainer ref={nav}>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="beatMaker"
            component={BeatMakerScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="metronome"
            component={MetronomeScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="6SMTuner"
            component={_6SMTunerScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="4SMTuner"
            component={_4SMTunerScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="4SATuner"
            component={_4SATunerScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Chromatic"
            component={ChromaticScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="tools"
            component={ToolScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="practice"
            component={PracticeScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="settings"
            component={SettingsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>

      
        <View style={styles.nav_container}>
          <Pressable onPress={() => {nav.navigate('Chromatic')}} style={styles.icon_container}>
            <Icon name='{mdiMusicCircle' />
            <Text>Tuner</Text>
          </Pressable>
        
          <Pressable onPress={() => {nav.navigate('metronome')}} style={styles.icon_container}>
            <Icon name="details" />
            <Text>Metronome</Text>
          </Pressable>
>>>>>>> React-pure-backup
        
          <Pressable onPress={() => {nav.navigate('tools')}} style={styles.icon_container}>
            <Icon name="construction" />
            <Text>Tools</Text>
          </Pressable>
        
          <Pressable onPress={() => {nav.navigate('practice')}} style={styles.icon_container}>
            <Icon name="content-paste" />
            <Text>Practice</Text>
          </Pressable>
        
          <Pressable onPress={() => {nav.navigate('settings')}} style={styles.icon_container}>
            <Icon name="settings" />
            <Text>Settings</Text>
          </Pressable>

        <Pressable
          onPress={() => {
            nav.navigate('metronome');
          }}
          style={styles.icon_container}>
          <Icon name="details" />
          <Text>Metronome</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            nav.navigate('beatMaker');
          }}
          style={styles.icon_container}>
          <Icon name="construction" />
          <Text>BeatMaker</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            nav.navigate('practice');
          }}
          style={styles.icon_container}>
          <Icon name="content-paste" />
          <Text>Practice</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            nav.navigate('settings');
          }}
          style={styles.icon_container}>
          <Icon name="settings" />
          <Text>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon_container: {
    margin: 'auto',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
