import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import { Button, View, Text } from "react-native";
import colors from "../config/colors";
import { StyleSheet } from "react-native";


export default class TunerScreen extends Component {

        constructor(){
            super();
        }
        render() {
            return (
                <View style={ styles.container }>
                    <Text>This is a test</Text>
                </View>
            )    
        }
    
}

const styles = StyleSheet.create({    //styles for elements listed in Alphabetical order (with the exception of container - which is always on top)
    container: {
      flex: 1,
      backgroundColor:colors.white,
    }
});
