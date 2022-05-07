import React, { Component } from "react";
import { Text, ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, Alert, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { StackActions } from "@react-navigation/native";
// import {Audio} from "expo-av";

export default class _4SMTuner extends Component {   
    
    constructor(){
        super();
        this.state = {
            tuner_type: ["4 String Tuner", "6 String Tuner", "Chromatic Tuner"]
        }
    }

    async componentDidMount() {
        //settings to customise user experience with the audio
        Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
          shouldDuckAndroid: true,
          staysActiveInBackground: true,
          playThroughEarpieceAndroid: true
    
        });
    
        const status = { shouldPlay: false } //dont play sound as soon as app is loaded
        //create audio sound objects for each note and load the sound
        this.e = new Audio.Sound();
        this.a = new Audio.Sound();
        this.d = new Audio.Sound();
        this.g = new Audio.Sound();
        this.b = new Audio.Sound();
        this.e2 = new Audio.Sound();

        try {
            this.e.loadAsync( require ('../sounds/stringE1.mp3'), status, false );
    
            this.b.loadAsync( require ('../sounds/stringB.mp3'), status, false);
    
            this.g.loadAsync( require ('../sounds/stringG.mp3'), status, false);
    
            this.d.loadAsync( require ('../sounds/stringD.mp3'), status, false);
    
            this.a.loadAsync( require ('../sounds/stringA.mp3'), status, false);
    
            this.e2.loadAsync( require ('../sounds/stringE2.mp3'), status, false);
        } catch (error) {
            console.log("Failed to load sounds: " + error)
        }
    
    }//end async function
    
      //functions to play each note--Needs to be abstacted
    
    
      playE1 = () => {
        this.e.replayAsync(); //replayAsync() allows the sound to play many times vs playAsync() which only played once on phone
        console.log("E1 button pressed");
      };
    
      playB = () => {
        this.b.replayAsync();
        console.log("B button pressed");
      };
    
      playG = () => {
        this.g.replayAsync();
        console.log("G button pressed");
      };
    
      playD = () => {
        this.d.replayAsync();
        console.log("D button pressed");
      };
    
      playA = () => {
        this.a.replayAsync();
        console.log("A button pressed");
      };
    
      playE2 = () => {
        this.e2.replayAsync();
        console.log("E2 button pressed");
      };

    selectedTuner = (selectedItem) => {
        if(selectedItem == this.state.tuner_type[0]){
            this.props.navigation.dispatch(StackActions.replace('4SMTuner'));
            return this.state.tuner_type[0];
        }
        else if(selectedItem == this.state.tuner_type[1]){
            this.props.navigation.dispatch(StackActions.replace('6SMTuner'));
            return this.state.tuner_type[1]
        }
        else if(selectedItem == this.state.tuner_type[2]){
            this.props.navigation.dispatch(StackActions.replace('Chromatic'));
            return this.state.tuner_type[2]
        }
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{marginTop:80, marginLeft:20}}>
                    <SelectDropdown 
                        data={this.state.tuner_type}
                        onSelect={() => {}}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return this.selectedTuner(selectedItem)
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        defaultButtonText={this.state.tuner_type[0]}
                        buttonStyle={styles.DropDownStyle}
                        buttonTextStyle={{fontSize:15}}
                        rowTextStyle={{fontSize: 15}}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.TypeButtonStyle, 
                            {marginTop:-45, marginLeft: 190}]}
                    onPress={()=>this.props.navigation.dispatch(StackActions.replace('4SMTuner'))}
                >
                    <Text style={[styles.TextStyle, {margin:7}]}>Manual</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.TypeButtonStyle, 
                        {width:90, marginTop:-40, marginLeft: 265}]}
                    onPress={()=>this.props.navigation.dispatch(StackActions.replace('4SATuner'))}
                >
                    <Text style={[styles.TextStyle, {margin:7}]}>Automatic</Text>
                </TouchableOpacity>

                <ImageBackground source={require('../../assets/4String.png')} resizeMode='contain' style={styles.Tunerstyle}>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle,
                                {marginTop:110, marginLeft: 140}]} 
                        activeOpacity = {.9} 
                        onPress={this.playE1}
                    >
                        <Text style={styles.TextStyle}>E</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle, 
                                {marginLeft: 90}]} 
                        activeOpacity = {.9} 
                        onPress={this.playA}
                    >
                        <Text style={styles.TextStyle}>A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle,
                                {marginLeft: 50}]} 
                        activeOpacity = {.9}
                        onPress={this.playD}
                    >
                        <Text style={styles.TextStyle}>D</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle, 
                                {marginLeft: 20}]} 
                        activeOpacity = {.9}
                        onPress={this.playG}
                    >
                        <Text style={styles.TextStyle}>G</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    DropDownStyle: {
        width:150,
        backgroundColor: '#55B7AD'
    },
    SoundButtonStyle: {
        width:50,
        height:50,
        borderWidth:1,
        borderRadius:50,
        borderColor: '#55B7AD',
        backgroundColor: '#d4f3ee',
        marginTop: 20,
    },
    TextStyle: {
        margin: 12,
        alignSelf:'center',
    },
    Tunerstyle: {
        marginBottom:-50,
        marginLeft: 30,
        width:'100%',
        height:'100%',
        alignSelf: 'center',
    },
    TypeButtonStyle: {
        width:70,
        height:40,
        backgroundColor: '#55B7AD'
    },
});