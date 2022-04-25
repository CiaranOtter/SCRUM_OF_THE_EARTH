import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MetronomeScreen from '../screens/MetronomeScreen';
import TunerScreen from '../screens/TunerScreen';



const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true }} >
    <AppStack.Screen name="Tuner" component={TunerScreen} />
    <AppStack.Screen name="Metronome" component={MetronomeScreen} />
    </AppStack.Navigator>

    </NavigationContainer>
    );
}