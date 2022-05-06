import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import {Button, View, Text, StyleSheet, Image, Picker, Switch, TouchableOpacity, SafeAreaView} from "react-native";
import { Audio } from "expo-av";
import logo from './6String.jpg';
import {findPitch} from 'pitchy';

//import React, {useState} from "react";

import colors from "../config/colors";
import {useState} from "react";
import { PitchDetector } from "pitchy";
import { Recording } from "expo-av/build/Audio";


export default function TunerScreen() {
  const [recording, setRecording] = React.useState();
  const [selectedValue, setSelectedValue] = useState("4String");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  const low_E = new Audio.Sound();
  const A_string = new Audio.Sound();
  const D_string = new Audio.Sound();
  const G_string = new Audio.Sound();
  const B_string = new Audio.Sound();
  const high_E = new Audio.Sound();

  try {
    low_E.loadAsync(require("../sounds/Tuner_low_E.m4a"));
    A_string.loadAsync(require("../sounds/Tuner_A.m4a"));
    D_string.loadAsync(require("../sounds/Tuner_D.m4a"));
    G_string.loadAsync(require("../sounds/Tuner_G.m4a"));
    B_string.loadAsync(require("../sounds/Tuner_B.m4a"));
    high_E.loadAsync(require("../sounds/Tuner_high_E.m4a"));
  } catch (error) {
    console.log("Failed to load metronome sounds: " + error);
  }

  this.count = 0
  this.duration = 0;


  _onRecordingStatusUpdate = RecordingStatus => {
    if (!RecordingStatus.isLoaded) {
      // Update your UI for the unloaded state
      if (RecordingStatus.error) {
        console.log(`Encountered a fatal error during playback: ${playbackStatus.error}`);
        // Send Expo team the error on Slack or the forums so we can help you debug!
      }

      this.duration = RecordingStatus.durationMillis;

      let sampleRate = this.recording._options.android.sampleRate;

      console.log(this.recording)
      // const detector = PitchDetector.forFloat32Array(128);
      // const input = new Float32Array(detector.inputLength);
      // updatePitch(this.recording, detector, input, sampleRate)
    }
  };

  async function startRecording() {
    try {
      console.log("Requesting Permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      });      

      console.log("Starting recording..");
      this.recording = new Audio.Recording();
      this.recording.setOnRecordingStatusUpdate(this._onRecordingStatusUpdate);
      this.recording.setProgressUpdateInterval(200);

      await this.recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      setRecording(this.recording)
      await this.recording.startAsync();
      console.log("Recording started");

    //   console.log("Starting recording..");
    //   const { recording: recording, status } = await Audio.Recording.createAsync(
    //     Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    //   );

    //   recording.setOnRecordingStatusUpdate(() => {updateRecording})
    //   await recording.startAsync()
    //   console.log("Recording started");
    } catch (error) {
      console.error("Failed to start recording", error);
    } 
  }

  function playString(note) {

    switch (note){
      case "A":
        A_string.setPositionAsync(0);
        A_string.playAsync();
        break;
      case "D":
        D_string.setPositionAsync(0);
        D_string.playAsync();
        break;
      case "G":
        G_string.setPositionAsync(0);
        G_string.playAsync();
        break;
      case "B":
        B_string.setPositionAsync(0);
        B_string.playAsync();
        break;
      case "high_E":
        high_E.setPositionAsync(0);
        high_E.playAsync();
        break;
      case "low_E":
        low_E.setPositionAsync(0);
        low_E.playAsync();
        break;
    }
    
  }
  
  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
  }

  function updatePitch(analyserNode,sampleRate){
    let data = new Float32Array(analyserNode.fftSize);
    analyserNode.getFloatTimeDomainData(data);
    let[pitch, clarity] = findPitch(data, sampleRate);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>{pitch}</Text>
      <Text>{clarity}</Text> */}

      <Button
      title="Detect Pitch"
      // onPress={detectPitch}
      />
      
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}

        onPress={recording ? stopRecording : startRecording}

      />

      <Image source={logo} style={styles.logo}/>

      <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}

      >

        <Picker.Item label="4String" value="4String" color='black'/>
        <Picker.Item label="6String" value="6String" color='black'  />
        <Picker.Item label="Chromatic" value="Chromatic" color='black' />
      </Picker>



      <Switch
          trackColor={{ false: "black", true: "grey" }}
          thumbColor={isEnabled ? "blue" : "red"}
          ios_backgroundColor="#3e3e3e"
          style = {styles.switch}
          onValueChange={toggleSwitch}
          value={isEnabled}
      />


      <TouchableOpacity
          onPress = {() => playString("D")}
          style={styles.button5}>
        <Text style = {styles.buttonText}>D</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress = {() => playString("A")}
          style={styles.button6}>
        <Text style = {styles.buttonText}>A</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress = {() => playString("low_E")}
          style={styles.button7}>
        <Text style = {styles.buttonText}>E</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress = {() => playString("G")}
          style={styles.button8}>
        <Text style = {styles.buttonText}>G</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress = {() => playString('B')}
          style={styles.button9}>
        <Text style = {styles.buttonText}>B</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress = {() => playString('high_E')}
          style={styles.button10}>
        <Text style = {styles.buttonText}>E</Text>
      </TouchableOpacity>

      <Text style={{fontWeight:'bold', bottom:500, left:10}}>
        <Text style={{color:'red'}}> AUTO         </Text>
        <Text style={{color:'blue'}}>    MANUAL</Text>

      </Text>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //styles for elements listed in Alphabetical order (with the exception of container - which is always on top)
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 220,
    height: 550,
    marginBottom: -300,
  },



  button5: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 90,
    position: 'absolute',
    left: 10,

    bottom: 350,

  },

  button6: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 90,
    position: 'absolute',
    left: 10,
    bottom: 250,

  },

  button7: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 90,
    position: 'absolute',
    left: 10,
    bottom: 150,

  },

  button8: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 90,
    position: 'absolute',
    right: 10,
    bottom: 350,

  },

  button9: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 90,
    position: 'absolute',
    right: 10,
    bottom: 250,

  },

  button10: {
    backgroundColor: "blue",
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

  picker:{

    height: 50,
    width: 250,
    color:"red",
    bottom: 370,
    left: 70,


  },


  switch:{
    bottom:465,

  },

  baseText: {
    fontWeight: 'bold',
    bottom:55000,


  },

  innerText: {
    color: 'red',


  },
  innerText2: {
    color: 'blue',


  },
});
