import React, { Component } from 'react'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import MetronomeScreen from './MetronomeScreen';
import TunerScreen from './TunerScreen';
import ToolScreen from './ToolScreen';
import PracticeScreen from './PracticeScreen';
import SettingsScreen from './SettingsScreen';

const nav = useNavigationContainerRef();
const Stack = new createStackNavigator();

export default class Navigation extends Component {

    constructor() {
        super();
    }
    
  
    render() {
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
                <Pressable onPress={() => {nav.navigate('tuner')}} style={styles.icon_container}>
                  <Icon name="audiotrack" />
                  <Text>Tuner</Text>
                </Pressable>
                
                <Pressable onPress={() => {nav.navigate('metronome')}} style={styles.icon_container}>
                  <Icon name="details" />
                  <Text>Metronome</Text>
                </Pressable>
                
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
                
              </View>
            </View>
          )
    }
    
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
      alignItems:'center',
      justifyContent: 'center'
    },
  
    icon_container: {
      margin: "auto",
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });