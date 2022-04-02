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
                    <TextInput onChangeText={onChangeNumber}     //bpm text input
                        value ={number}
                        placeholder='120'
                        keyboardType='numeric'
                        style={styles.bpmTextInput} >
                    </TextInput>
                    <Text style={styles.timeSignatureText}>4/4</Text>
                    <Text style={styles.speeedText}>Allegro</Text>
                   
                </ImageBackground>

            </TouchableOpacity>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    bpmTextInput:{
        paddingTop:125,
        //height:50,
        fontSize:25,
        color: colors.black,

    },
    metronomeImage:{
        width:'100%',
        height:'100%',
        alignItems:'center',
    },
    speeedText:{
        paddingTop:37.5,
        color: colors.black,
        fontSize:20,
    },
    timeSignatureText:{
        paddingTop:335,
        color:'#fff',
        fontSize:20,
    }
    
    
})

export default MetronomeScreen;