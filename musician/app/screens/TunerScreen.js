import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import {Button, View, Text, StyleSheet, Image, Picker, Switch, TouchableOpacity, SafeAreaView} from "react-native";
import { Audio } from "expo-av";
import logo from './6String.jpg';

//import React, {useState} from "react";

import colors from "../config/colors";
import {useState} from "react";
import { PitchDetector } from "pitchy";

export default function TunerScreen() {
  const [recording, setRecording] = React.useState();
  const [selectedValue, setSelectedValue] = useState("4String");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  PitchDetector.forNumberArray(60)


  function updateRecording() {
    console.log("test")
  }

  async function startRecording() {
    try {
      console.log("Requesting Permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });      

      console.log("Starting recording..");
      const { recording: recording, status } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );

      recording.setOnRecordingStatusUpdate(() => {updateRecording})
      await recording.startAsync()
      console.log("Recording started");
    } catch (error) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text></Text>
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
          onPress = { () => alert('')}
          style={styles.button5}>
        <Text style = {styles.buttonText}>D</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress = { () => alert('')}
          style={styles.button6}>
        <Text style = {styles.buttonText}>A</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress = { () => alert('')}
          style={styles.button7}>
        <Text style = {styles.buttonText}>E</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress = { () => alert('')}
          style={styles.button8}>
        <Text style = {styles.buttonText}>G</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress = { () => alert('')}
          style={styles.button9}>
        <Text style = {styles.buttonText}>B</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress = { () => alert('')}
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
