import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import colors from "../config/colors";
import { StyleSheet } from "react-native";


export default class ToolScreen extends Component {

        constructor(){
            super();
        }

        render() {
            return (
                <SafeAreaView style={ styles.container }>
                    <Text>Screen for tools</Text>
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