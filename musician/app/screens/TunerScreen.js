import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import {Button, View, Text, StyleSheet, Image, Switch, TouchableOpacity, SafeAreaView} from "react-native";
import { Picker } from "@react-native-picker/picker"
import logo from './6String.jpg';
import PitchTracker from 'react-native-pitch-tracker';
import colors from "../config/colors";
import {useState} from "react";

const Sound = require('react-native-sound');
Sound.setCategory('Alarm');

export default function TunerScreen() {
  const [recording, setRecording] = useState(false);
  const [selectedValue, setSelectedValue] = useState("4String");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  const low_e = new Sound ('tuner_low_e.m4a', Sound.MAIN_BUNDLE, (e) => {});
  const high_e = new Sound ('tuner_high_e.m4a', Sound.MAIN_BUNDLE, (e) => {});
  const a_string = new Sound ('tuner_a.m4a', Sound.MAIN_BUNDLE, (e) => {});
  const d_string = new Sound ('tuner_d.m4a', Sound.MAIN_BUNDLE, (e) => {});
  const g_string = new Sound ('tuner_g.m4a', Sound.MAIN_BUNDLE, (e) => {});
  const b_string = new Sound ('tuner_b.m4a', Sound.MAIN_BUNDLE, (e) => {});

  PitchTracker.prepare();

  PitchTracker.noteOn((res) => {
    console.log('Note On: ' + res['midiNum']);
  }); // Note On: 60
  PitchTracker.noteOff((res) => {
    console.log('Note Off: ' + res['midiNum']);
  });

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
    // try {
    //   console.log("Requesting Permissions..");
    //   await Audio.requestPermissionsAsync();
    //   await Audio.setAudioModeAsync({
    //     allowsRecordingIOS: true,
    //     playsInSilentModeIOS: true,
    //     interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    //     playsInSilentModeIOS: true,
    //     shouldDuckAndroid: true,
    //     interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    //   });      

    //   console.log("Starting recording..");
    //   this.recording = new Audio.Recording();
    //   this.recording.setOnRecordingStatusUpdate(this._onRecordingStatusUpdate);
    //   this.recording.setProgressUpdateInterval(200);

    //   await this.recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
    //   setRecording(this.recording)
    //   await this.recording.startAsync();
    //   console.log("Recording started");

    //   console.log("Starting recording..");
    //   const { recording: recording, status } = await Audio.Recording.createAsync(
    //     Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    //   );

    //   recording.setOnRecordingStatusUpdate(() => {updateRecording})
    //   await recording.startAsync()
    //   console.log("Recording started");
    // } catch (error) {
    //   console.error("Failed to start recording", error);
    // } 
    setRecording(true);
    PitchTracker.start()
  }

  function playString(note) {

    switch (note){
      case "A":
        a_string.stop();
        a_string.play();
        break;
      case "D":
        d_string.stop();
        d_string.play()
        break;
      case "G":
        g_string.stop();
        g_string.play()
        break;
      case "B":
        b_string.stop();
        b_string.play()
        break;
      case "high_E":
        high_e.stop();
        high_e.play()
        break;
      case "low_E":
        low_e.stop();
        low_e.play();
        break;
    }
    
  }
  
  async function stopRecording() {
  //   console.log("Stopping recording..");
  //   setRecording(undefined);
  //   await recording.stopAndUnloadAsync();
  //   const uri = recording.getURI();
  //   console.log("Recording stopped and stored at", uri);
  console.log("recording is: "+recording);

  setRecording(false);
  console.log("stopping pitch tracker... ");
  PitchTracker.stop();
  }

  // function updatePitch(analyserNode,sampleRate){
  //   let data = new Float32Array(analyserNode.fftSize);
  //   analyserNode.getFloatTimeDomainData(data);
  //   let[pitch, clarity] = findPitch(data, sampleRate);
  // }

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
