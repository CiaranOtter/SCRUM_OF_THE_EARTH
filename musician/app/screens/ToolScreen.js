import React, { Component } from "react";
import { View, Text } from "react-native";
import colors from "../config/colors";
import { StyleSheet } from "react-native";


export default class ToolScreen extends Component {

        constructor(){
            super();
        }

        render() {
            return (
                <View style={ styles.container }>
                    <Text>Screen for tools</Text>
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