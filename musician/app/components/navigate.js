import React, { Component, createFactory } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import MetronomeScreen from '../screens/MetronomeScreen';
import _4SMTunerScreen from '../screens/4_StringManualTunerScreen';

import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = new createStackNavigator();
// const nav = React.useRef();

export default class Navigator extends Component{
    constructor() {
        super();
        this.Page = <MetronomeScreen></MetronomeScreen>
        // this.nav = useNavigationContainerRef();
    }

    openTuner = (e) => {
        this.Page = <_4SMTunerScreen/>
        this.render();
        console.log("Running change page");
    }

    openMetronome = (e) => {
        this.Page = <MetronomeScreen></MetronomeScreen>
        this.render();
        console.log("Runnning Metronome")
    }

    // render() {

    //     return(
            
    //     )
    // }
}