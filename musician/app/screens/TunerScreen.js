import React, { Component } from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/stack';
import { StackActions } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import logo from "./6String.jpg";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  //Switch,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Switch} from 'react-native-switch';
import {Picker} from '@react-native-picker/picker';
import PitchTracker from 'react-native-pitch-tracker';

import colors from '../config/colors';
import StringGuitarImage from '../../assets/Tuner_6String_Activity.png';

const Sound = require('react-native-sound');
Sound.setCategory('Alarm');

export default class TunerScreen extends Component{

  constructor() {
    super();
    this.state = {
      tuner_type: ["4 String Tuner", "6 String Tuner", "Chromatic Tuner"],
      recording: false,
      isEnabled: false,
    }

    PitchTracker.prepare();

    PitchTracker.noteOn(res => {
      console.log('Note On: ' + res['midiNum']);
    }); // Note On: 60
    PitchTracker.noteOff(res => {
      console.log('Note Off: ' + res['midiNum']);
    });
  }

  async componentDidMount() {
    //settings to customise user experience with the audio
    this.low_e = new Sound('tuner_low_e.m4a', Sound.MAIN_BUNDLE, e => {});
    this.high_e = new Sound('tuner_high_e.m4a', Sound.MAIN_BUNDLE, e => {});
    this.a_string = new Sound('tuner_a.m4a', Sound.MAIN_BUNDLE, e => {});
    this.d_string = new Sound('tuner_d.m4a', Sound.MAIN_BUNDLE, e => {});
    this.g_string = new Sound('tuner_g.m4a', Sound.MAIN_BUNDLE, e => {});
    this.b_string = new Sound('tuner_b.m4a', Sound.MAIN_BUNDLE, e => {});    

  }

  toggleSwitch = () => this.setState({isEnabled: !this.state.isEnabled});
  
  _onRecordingStatusUpdate = RecordingStatus => {
    if (!RecordingStatus.isLoaded) {
      // Update your UI for the unloaded state
      if (RecordingStatus.error) {
        console.log(
          `Encountered a fatal error during playback: ${playbackStatus.error}`,
        );
        // Send Expo team the error on Slack or the forums so we can help you debug!
      }

      this.duration = RecordingStatus.durationMillis;

      let sampleRate = this.recording._options.android.sampleRate;

      console.log(this.recording);
      // const detector = PitchDetector.forFloat32Array(128);
      // const input = new Float32Array(detector.inputLength);
      // updatePitch(this.recording, detector, input, sampleRate)
    }
  };

  startRecording = () => {
    this.setState({recording: true});
    PitchTracker.start();
  }

  playE1 = () => {
    this.low_e.stop();
    this.low_e.play();
  };

  playB = () => {
    this.b_string.stop();
    this.b_string.play();
  };

  playG = () => {
    this.g_string.stop();
    this.g_string.play();
  };

  playD = () => {
    this.d_string.stop();
    this.d_string.play();
  };

  playA = () => {
    this.a_string.stop();
    this.a_string.play();
  };

  playE2 = () => {
    this.high_e.stop();
    this.high_e.play();
  };

  stopRecording = () => {
    console.log('recording is: ' + this.state.recording);

    this.setState({recording: false});
    console.log('stopping pitch tracker... ');
    PitchTracker.stop();
  }

  selectTuner = (selectedItem) => {
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

  render() {
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

          <Image source={logo} style={styles.logo}/>

          <TouchableOpacity
              style={[styles.button5]}
              activeOpacity = {.9}
              onPress={this.playD}
          >
            <Text style={styles.buttonText}>D</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={[styles.button6]}
              activeOpacity = {.9}
              onPress={this.playA}
          >
            <Text style={styles.buttonText}>A</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={[styles.button7]}
              activeOpacity = {.9}
              onPress={this.playE1}
          >
            <Text style={styles.buttonText}>E</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={[styles.button8]}
              activeOpacity = {.9}
              onPress={this.playG}
          >
            <Text style={styles.buttonText}>G</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={[styles.button9]}
              activeOpacity = {.9}
              onPress={this.playB}
          >
            <Text style={styles.buttonText}>B</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={[styles.button10]}
              activeOpacity = {.9}
              onPress={this.playE2}
          >
            <Text style={styles.buttonText}>E</Text>
          </TouchableOpacity>

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