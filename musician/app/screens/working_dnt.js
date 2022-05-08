import React, {Component} from "react";
import {Text, ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, Alert, View, Switch, Button, Image} from "react-native";
//import SelectDropdown from "react-native-select-dropdown";
//import { StackActions } from "@react-navigation/native";
//import colors from "../config/colors";
import logo from "./6String.jpg";
//import * as React from "react";
import {NavigationContainer, StackActions} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
//import {Text, StyleSheet, Image, Picker, Switch, TouchableOpacity, SafeAreaView} from "react-native";
import { Audio } from "expo-av";
//import logo from './6String.jpg';
import {findPitch} from 'pitchy';
//import ToggleSwitch from './ToggleSwitch/ToggleSwitch';



import colors from "../config/colors";
import {useState} from "react";
import { PitchDetector } from "pitchy";
import SelectDropdown from "react-native-select-dropdown";
import {isEnabled} from "react-native/Libraries/Pressability/PressabilityDebug";
import {setIsEnabledAsync} from "expo-av/build/Audio/AudioAvailability";

export default class _4SATuner extends Component {



    constructor(){
        super();
        this.state = {
            playedNote: "",
            tuner_type: ["4 String Tuner", "6 String Tuner", "Chromatic Tuner"]
        }
    }

    SoundEButton = () => {
        this.setState({playedNote: "E"});
    }

    SoundAButton = () => {
        this.setState({playedNote: "A"});
    }

    SoundDButton = () => {
        this.setState({playedNote: "D"});
    }

    SoundGButton = () => {
        this.setState({playedNote: "G"});
    }

    record = () => {
        Alert.alert("recording");
    }



    selectedTuner = (selectedItem) =>{
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

    // recordings = React.useState();
    // //the recording recorded in this session
    // setRecording = React.useState();
    //
    //  async startRecording() {
    //   try {
    //     console.log("Requesting Permissions..");
    //     await Audio.requestPermissionsAsync();   //request access to the mic
    //     await Audio.setAudioModeAsync({
    //       allowsRecordingIOS: true,
    //       playsInSilentModeIOS: true,
    //     });
    //
    //     //console.log("Starting recording..");
    //     const {recording} = await Audio.Recording.createAsync(
    //         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    //     );
    //
    //     setRecording(recording);
    //     console.log("Recording started");
    //   } catch (error) {
    //     console.error("Failed to start recording", err);  //debug whatever error occurs while trying to record
    //   }
    // }
    //
    //  async stopRecording() {
    //   console.log("Stopping recording..");
    //   setRecording(undefined);
    //   await recording.stopAndUnloadAsync();  //stop recording
    //
    //   let updateRecordings = [...recordings];
    //   const {sound, status} = await recording.createNewLoadedSoundAsync();
    //   updateRecordings.push({
    //     sound: sound,
    //     duration: getDurationFormatted(status.durationMillis),
    //     file: recording.getURI()
    //   });
    //   // const uri = recording.getURI();
    //   // console.log("Recording stopped and stored at", uri);
    //   setRecordings(updateRecordings);
    // }
    //
    //  getDurationFormatted(millis) {
    //   const minutes = millis / 1000 / 60;
    //   const minuteDisplay = Math.floor(minutes);
    //   const seconds = Math.round((minutes - minuteDisplay) * 60);
    //   const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    //   return `${minuteDisplay} : ${secondsDisplay}`;
    // }
    //
    //  getRecordingLines() {
    //   return recordings.map((recordingLine, index) => {
    //     return (
    //         <View key={index} style={styles.row}>
    //           <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
    //           <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()}
    //                   title="Play"></Button>
    //         </View>
    //     );
    //   });
    // }
    //
    //  updatePitch(analyserNode, sampleRate) {
    //   let data = new Float32Array(analyserNode.fftSize);
    //   analyserNode.getFloatTimeDomainData(data);
    //   let [pitch, clarity] = findPitch(data, sampleRate);
    // }
    //
    // detectPitch() {
    //
    // }



    render(){

        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{marginTop:-160, marginLeft:20}}>
                    <SelectDropdown
                        data={this.state.tuner_type}
                        onSelect={() => {}}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return this.selectedTuner(selectedItem)
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        defaultButtonText={this.state.tuner_type[1]}
                        buttonStyle={styles.DropDownStyle}
                        buttonTextStyle={styles.drops}
                        rowTextStyle={{fontSize: 15}}
                    />
                </TouchableOpacity>

                {/*<Button*/}
                {/*    title="Detect Pitch"*/}

                {/*    onPress={detectPitch}*/}
                {/*/>*/}

                {/*<Button*/}
                {/*    title={recording ? 'Stop Recording' : 'Start Recording'}*/}
                {/*    onPress={recording ? stopRecording : startRecording} />*/}
                {/*{getRecordingLines()}*/}
                {/*<Button*/}
                {/*    title="Detect Pitch"*/}

                {/*    onPress={detectPitch}*/}
                {/*/>*/}

                {/*<Button*/}
                {/*    title={recording ? 'Stop Recording' : 'Start Recording'}*/}
                {/*    onPress={recording ? stopRecording : startRecording} />*/}
                {/*{getRecordingLines()}*/}

                <Image source={logo} style={styles.logo}/>

                {/*<Switch*/}

                {/*    trackColor={{ false: "black", true: "grey" }}*/}
                {/*    thumbColor={isEnabled ? "blue" : "red"}*/}
                {/*    ios_backgroundColor="#3e3e3e"*/}
                {/*    style = {styles.switch}*/}
                {/*    onValueChange={this.toggleSwitch}*/}
                {/*    value={isEnabled}*/}
                {/*/>*/}
                <TouchableOpacity
                    style={[styles.button5]}
                    activeOpacity = {.9}
                    onPress={this.SoundEButton}
                >
                    <Text style={styles.buttonText}>D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button6]}
                    activeOpacity = {.9}
                    onPress={this.SoundAButton}
                >
                    <Text style={styles.buttonText}>A</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button7]}
                    activeOpacity = {.9}
                    onPress={this.SoundDButton}
                >
                    <Text style={styles.buttonText}>E</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button8]}
                    activeOpacity = {.9}
                    onPress={this.SoundGButton}
                >
                    <Text style={styles.buttonText}>G</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button9]}
                    activeOpacity = {.9}
                    onPress={this.SoundEButton}
                >
                    <Text style={styles.buttonText}>B</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button10]}
                    activeOpacity = {.9}
                    onPress={this.SoundAButton}
                >
                    <Text style={styles.buttonText}>E</Text>
                </TouchableOpacity>



                {/*<TouchableOpacity*/}
                {/*    onPress = { () => alert('')}*/}
                {/*    style={styles.button5}>*/}
                {/*  <Text style = {styles.buttonText}>D</Text>*/}
                {/*</TouchableOpacity>*/}

                {/*<TouchableOpacity*/}
                {/*    onPress = { () => alert('')}*/}
                {/*    style={styles.button6}>*/}
                {/*  <Text style = {styles.buttonText}>A</Text>*/}
                {/*</TouchableOpacity>*/}

                {/*<TouchableOpacity*/}
                {/*    onPress = { () => alert('')}*/}
                {/*    style={styles.button7}>*/}
                {/*  <Text style = {styles.buttonText}>E</Text>*/}
                {/*</TouchableOpacity>*/}

                {/*<TouchableOpacity*/}
                {/*    onPress = { () => alert('')}*/}
                {/*    style={styles.button8}>*/}
                {/*  <Text style = {styles.buttonText}>G</Text>*/}
                {/*</TouchableOpacity>*/}

                {/*<TouchableOpacity*/}
                {/*    onPress = { () => alert('')}*/}
                {/*    style={styles.button9}>*/}
                {/*  <Text style = {styles.buttonText}>B</Text>*/}
                {/*</TouchableOpacity>*/}

                {/*<TouchableOpacity*/}
                {/*    onPress = { () => alert('')}*/}
                {/*    style={styles.button10}>*/}
                {/*  <Text style = {styles.buttonText}>E</Text>*/}
                {/*</TouchableOpacity>*/}

                {/*<Text style={{fontWeight:'bold', bottom:335, left:10}}>*/}
                {/*  <Text style={{color:'red'}}> AUTO         </Text>*/}
                {/*  <Text style={{color:'blue'}}>    MANUAL</Text>*/}

                {/*</Text>*/}
                <TouchableOpacity
                    style={[styles.TypeButtonStyle,
                        {marginTop:-45, marginLeft: -150}]}
                    onPress={()=>this.props.navigation.dispatch(StackActions.replace('6SMTuner'))}
                >
                    <Text style={styles.TextStyle}>Manual</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.TypeButtonStyle,
                        {width:90, marginTop:-40, marginLeft: 50}]}
                    onPress={()=>this.props.navigation.dispatch(StackActions.replace('6SMTuner'))}
                >
                    <Text style={styles.TextStyle}>Automatic</Text>
                </TouchableOpacity>



            </SafeAreaView>
        );
    }







}




const styles = StyleSheet.create({
    //styles for elements listed in Alphabetical order (with the exception of container - which is always on top)
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // button: {
    //   margin: 16
    // },

    logo: {
        width: 220,
        height: 550,
        marginBottom: -380,
    },
    drops:{
        fontSize: 15,
        color: "white",
        fontWeight: 'bold',

    },



    button5: {
        backgroundColor:'#55B7AD',
        padding: 20,
        borderRadius: 90,
        position: 'absolute',
        left: 10,

        bottom: 350,

    },

    button6: {
        backgroundColor: '#55B7AD',
        padding: 20,
        borderRadius: 90,
        position: 'absolute',
        left: 10,
        bottom: 250,

    },

    button7: {
        backgroundColor: '#55B7AD',
        padding: 20,
        borderRadius: 90,
        position: 'absolute',
        left: 10,
        bottom: 150,

    },

    button8: {
        backgroundColor: '#55B7AD',
        padding: 20,
        borderRadius: 90,
        position: 'absolute',
        right: 10,
        bottom: 350,

    },

    button9: {
        backgroundColor: '#55B7AD',
        padding: 20,
        borderRadius: 90,
        position: 'absolute',
        right: 10,
        bottom: 250,

    },

    button10: {
        backgroundColor:'#55B7AD',
        padding: 20,
        borderRadius: 90,
        position: 'absolute',
        right: 10,
        bottom: 150,

    },


    buttonText: {
        fontSize: 20,
        color: "white",
        fontWeight: 'bold',
    },
    TextStyle: {
        fontSize: 15,
        // position:'absolute',
        color: "white",
        fontWeight: 'bold',
        textAlign: 'center',

    },




    switch:{
        bottom:250,

    },

    baseText: {
        fontWeight: 'bold',
        bottom:55000,


    },
    TypeButtonStyle: {
        width:70,
        height:40,
        backgroundColor: 'grey',
        bottom: 300,
        left: 30,
    },

    innerText: {
        color: 'red',
        bottom:150,


    },
    innerText2: {
        color: 'blue',

    },
    DropDownStyle: {
        width:150,
        backgroundColor: '#55B7AD',
        left:-6,
        //bottom: 80,
        //bottom: 100,
    },

});