import React from 'react';
import {SafeAreaView,TouchableHighlight,Image,StyleSheet, } from 'react-native';

const metronomePress = ()=>console.log("MetronopmePressed")

function MetronomeScreen(props) {
    return (
        <SafeAreaView>
            <TouchableHighlight onPress={metronomePress}>
                <Image source={require("../../assets/mock-metronome.jpg")} resizeMode='contain' style={styles.metronomeImage} ></Image>

            </TouchableHighlight>
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