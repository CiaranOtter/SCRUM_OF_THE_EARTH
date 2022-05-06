import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import {Button, View, Text, StyleSheet, Image, Picker, Switch, TouchableOpacity, SafeAreaView} from "react-native";
import { Audio } from "expo-av";
import logo from './6String.jpg';
import {findPitch} from 'pitchy';



import colors from "../config/colors";
import {useState} from "react";
import { PitchDetector } from "pitchy";

export default function TunerScreen() {
  const [recording, setRecording] = React.useState();   //the recording recorded in this session
  const [recordings,setRecordings] = React.useState([]);
  const [selectedValue, setSelectedValue] = useState("4String");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  PitchDetector.forNumberArray(60)


  async function startRecording() {
    try {
      console.log("Requesting Permissions..");
      await Audio.requestPermissionsAsync();   //request access to the mic
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });      

      //console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(  
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );

      setRecording(recording);
      console.log("Recording started");
    } catch (error) {
      console.error("Failed to start recording", err);  //debug whatever error occurs while trying to record
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);  
    await recording.stopAndUnloadAsync();  //stop recording

    let updateRecordings = [...recordings];
    const {sound, status} = await recording.createNewLoadedSoundAsync();
    updateRecordings.push({
      sound:sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });
    // const uri = recording.getURI();
    // console.log("Recording stopped and stored at", uri);
    setRecordings(updateRecordings);
  }

  function getDurationFormatted(millis){
    const minutes = millis/1000/60;
    const minuteDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes-minuteDisplay)*60);
    const secondsDisplay = seconds <10? `0${seconds}` :seconds;
    return `${minuteDisplay} : ${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
          <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
        </View>
      );
    });
  }

  function updatePitch(analyserNode,sampleRate){
    let data = new Float32Array(analyserNode.fftSize);
    analyserNode.getFloatTimeDomainData(data);
    let[pitch, clarity] = findPitch(data, sampleRate);
  }

  function detectPitch(){
  
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>{pitch}</Text>
      <Text>{clarity}</Text> */}

      <Button
      title="Detect Pitch"
      onPress={detectPitch}
      />
      
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording} />
      {getRecordingLines()}

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

  button: {
    margin: 16
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
    bottom: "75%",
    left: -100,


  },


  switch:{
    bottom:"75%",

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
