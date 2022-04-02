import React from 'react';
import {SafeAreaView,TouchableHighlight,Image,StyleSheet, TouchableOpacity, Text, ImageBackground, TextInput } from 'react-native';

import colors from '../config/colors';




function MetronomeScreen(props) {
    
    const metronomePress = ()=>console.log("MetronopmePressed");    //what gets called when the metronome is pressed
    const [number, onChangeNumber] = React.useState(null);          // what gets called when the user inputs a number into the bpm text input

    
    
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={metronomePress}>
                <ImageBackground source={require("../../assets/metronome-image-wb.png")} resizeMode='contain' style={styles.metronomeImage} >
                    <TextInput onChangeText={onChangeNumber}
                        value ={number}
                        placeholder='120'
                        keyboardType='numeric'
                        style={styles.bpmTextInput} ></TextInput>
                   
                </ImageBackground>

            </TouchableOpacity>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    metronomeImage:{
        width:'100%',
        height:'100%',
        alignItems:'center',
    },
    bpmTextInput:{
        paddingTop:125,
        //height:50,
        fontSize:25,
        color: colors.black,

    }
    
})

export default MetronomeScreen;