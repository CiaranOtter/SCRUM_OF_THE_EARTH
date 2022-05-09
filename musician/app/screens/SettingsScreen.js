import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import { Button, View, Text, SafeAreaView } from "react-native";
import colors from "../config/colors";
import { StyleSheet } from "react-native";


export default class PracticeScreen extends Component {

        constructor(){
            super();
        }
        render() {
            return (
                <SafeAreaView style={ styles.container }>
                    <Text>Screen for Practce log</Text>
                </SafeAreaView>
            )    
        }
    
}

const styles = StyleSheet.create({    //styles for elements listed in Alphabetical order (with the exception of container - which is always on top)
    container: {
      flex: 1,
      backgroundColor:colors.white,
    }
});