// making needed imports

import React, {Component, useState} from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
//import {ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, Alert, View } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import {StackActions} from '@react-navigation/native';
import PitchTracker from 'react-native-pitch-tracker';

import colors from '../config/colors';

const pitchNoteC = require('../classes/pitchNoteClassification.js');

export default class ChromaticScreen extends Component {
  
  // comstructin class and initilizing states
  constructor() {
    super();

    this.pitchNoteClass = new pitchNoteC();
    const note = this.pitchNoteClass.getNote(5021);
    const classification = this.pitchNoteClass.getClassification(5021);

    this.state = {
      tuner_type: ['4 String Tuner', '6 String Tuner', 'Chromatic Tuner'],
      pitch: 5021,
      NoteClass: classification,
      note: note,
    };

    // Preparing the Ptchtracker to begin listening to sounds from the microphone
    PitchTracker.prepare();

    // Setting the callback fucntion for PitcTracker to run when a note goes off
    PitchTracker.noteOff(res => {
      console.log(res);

      const pitch = res['midiNum'] * 10;

      // setting the state of the detetcted sound (pitch and note class)
      this.setState({
        note: this.pitchNoteClass.getNote(pitch),
        NoteClass: this.pitchNoteClass.getClassification(pitch),
        pitch: pitch,
      });

      console.log('note: ' + this.state.note);
    });

    // setting callback function to be run when Pitchtrack starts hearinga sound 
    PitchTracker.noteOn(res => {
      console.log(res);

      const pitch = res['midiNum'] * 10;

      // setting the state for the detected sound
      this.setState({
        note: this.pitchNoteClass.getNote(pitch),
        NoteClass: this.pitchNoteClass.getClassification(pitch),
        pitch: pitch,
      });

      console.log('note: ' + this.state.note);
    });

    // Starting the pitch tracker to begin listening to sounds
    PitchTracker.start();
  }

  // stop the pitch tune from listening when the class is released 
  endTunerSession = () => {
    PitchTracker.stop();
  };

  // selcting the net active screen adn running this functio to change between them
  selectedTuner = selectedItem => {
    PitchTracker.stop();
    if (selectedItem == this.state.tuner_type[0]) {
      this.props.navigation.dispatch(StackActions.replace('4SMTuner'));
      return this.state.tuner_type[0];
    } else if (selectedItem == this.state.tuner_type[1]) {
      this.props.navigation.dispatch(StackActions.replace('6SMTuner'));
      return this.state.tuner_type[1];
    } else if (selectedItem == this.state.tuner_type[2]) {
      this.props.navigation.dispatch(StackActions.replace('Chromatic'));
      return this.state.tuner_type[2];
    }
  };

  render() {
    // const note = this.pitchNoteClass.getNote(this.pitch);
    // const classification = this.pitchNoteClass.getClassification(this.pitch);
    // const pitch = this.pitch;

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{marginTop: -100, marginLeft: -160}}>
          {/* dropdown menu for selecting the tuner type */}
          <SelectDropdown
            data={this.state.tuner_type}
            onSelect={() => {}}
            buttonTextAfterSelection={(selectedItem, index) => {
              return this.selectedTuner(selectedItem);
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            defaultButtonText={this.state.tuner_type[2]}
            buttonStyle={styles.DropDownStyle}
            buttonTextStyle={{fontSize: 15}}
            rowTextStyle={{fontSize: 15}}
          />
        </TouchableOpacity>
        {/* display the note name rom the detected sound */}
        <Text style={styles.title}>{this.state.note}</Text>
        {/* display the detected frequency */}
         <Text style={styles.frequency}>{this.state.pitch}Hz</Text>
        {/* display the classification of the note (sharp, in-tune or flat) */}
        <Text style={styles.indicator}>{this.state.NoteClass}</Text>
      </SafeAreaView>
    );
  }
}

// styles for the chromatc tuner screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DropDownStyle: {
    width: 150,
    backgroundColor: colors.userInputElement,
    height: 40,
    //marginRight: -235,
    bottom: 40,
    borderColor: colors.black,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  title: {
    fontSize: 150,
    color: colors.black,
    marginTop: 100,
  },
  indicator: {
    fontSize: 24,
  },
  frequency: {
    fontSize: 30,
    color: '#55B7AD',
  },
});
