import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const pitchNoteC = require("../classes/pitchNoteClassification.js");

export default function ChromaticScreen(){
  
  pitchNoteClass = new pitchNoteC();

  pitch = 1040;

  note = pitchNoteClass.getNote(pitch);
  classification = pitchNoteClass.getClassification(pitch);

  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{note}</Text>
      <Text style={styles.frequency}>{pitch}Hz</Text>
      <Text style={styles.indicator}>{classification}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 150,
    color: 'gray',
  },
  indicator:{
    fontSize: 24
  },
  frequency: {
    fontSize: 30,
    color: 'red'
  }
});
