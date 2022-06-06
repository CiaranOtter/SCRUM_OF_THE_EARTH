import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
  Switch,
  TouchableOpacity
} from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import Tuner from "../components/Tuner.js";
import Note from "../components/Notes.js";
import Meter from "../components/Meter.js";
import colors from "../config/colors.js";

// the chomaic tuner screen in the app
// This hanles the detection and update of recorded notes from a musical instrument
export default class ChromaticScreen extends Component {
  constructor() {
    super();
  }
  
  /**
   * the state contains:
   *  note - the name of the note that the system has detected from the user
   *  octave - the octae to which the detcted not belongs
   *  frequency - the recorded frequency that the app has detected
   */
  state = {
    note: {
      name: "A",
      octave: 4,
      frequency: 440,
    },
    tuner_type: ['4 String Tuner', '6 String Tuner', 'Chromatic Tuner'],
    isEnabled: false,
  };

  // method to update the note in the omponents state
  _update(note) {
    this.setState({ note });
  }


  // run this function to nitialise the component and its state when the component 
  // is mounted to the app
  async componentDidMount() {
    if (Platform.OS === "android") {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
    }

    const tuner = new Tuner();
    tuner.start();
    tuner.onNoteDetected = (note) => {
      if (this._lastNoteName === note.name) {
        this._update(note);
      } else {
        this._lastNoteName = note.name;
      }
    };
  }

  // render the component that contains the 
  // meter, tuner
  render() {
    return (
      <View style={style.body}>
        <StatusBar backgroundColor="#000" translucent />
        <Meter cents={this.state.note.cents} type={"radial"} />
        <Note {...this.state.note} />
        <Text style={style.frequency}>
          {this.state.note.frequency.toFixed(1)} Hz
        </Text>
      </View>
    );
  }
}

// styels for the chromatic tuner component
const style = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  frequency: {
    fontSize: 28,
    color: colors.white
  }, 
  DropDownStyle: {
    width: 150,
    backgroundColor: colors.userInputElement,
    height: 40,
    //marginRight: -225,
    bottom: 195,
    borderColor: colors.black,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  drops: {
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
  },
  Tunerstyle: {
    marginTop: 50,
    marginBottom: -30,
    width: '95%',
    height: '85%',
    alignSelf: 'center',
  },
  NotePlayedContainer: {
    width: 120,
    height: 120,
    //marginTop: 50,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'green',
    textAlign: 'center',
    alignSelf: 'baseline',
    top: 280,
  },
  TypeButtonStyle: {
    width: 70,
    height: 40,
    backgroundColor: '#55B7AD',
  },
  RecordingButton: {
    width: 90,
    height: 55,
    padding: 2,
    backgroundColor: '#d4f3ee',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#55B7AD',
    //marginTop: -380,
    //marginLeft: 100,
    left: 20,
    top: 200,
  },
  SoundButtonStyle: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.sixStringButtonFill,
    backgroundColor: colors.userInputElement,
  },
  switchMA: {
    paddingHorizontal: 20,
    marginLeft: 220,
  },
  TextStyle: {
    margin: 12,
    alignSelf: 'center',
    color: colors.black,
    fontWeight: 'bold',
  },
  toggleElements: {
    flex: 1,
    top: 20,
    //bottom: 330,
  },
  Tunerstyle: {
    marginBottom: -50,
    marginLeft: 30,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});
