import React from 'react';
import {SafeAreaView,TouchableHighlight,Image,StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';

const metronomePress = ()=>console.log("MetronopmePressed")

function MetronomeScreen(props) {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={metronomePress}>
                <ImageBackground source={require("../../assets/metronome-image-wb.png")} resizeMode='contain' style={styles.metronomeImage} >
                   
                </ImageBackground>

            </TouchableOpacity>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    metronomeImage:{
        width:'100%',
        height:'100%',
    }
    
})

export default MetronomeScreen;