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

export default class ChromaticScreen extends Component {
  constructor() {
    super();
  }
  
  state = {
    note: {
      name: "A",
      octave: 4,
      frequency: 440,
    },
    tuner_type: ['4 String Tuner', '6 String Tuner', 'Chromatic Tuner'],
    isEnabled: false,
  };
  _update(note) {
    this.setState({ note });
  }

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

  render() {
    return (
      <View style={style.body}>
        {/* <View style={style.toggleElements}>
          
          <TouchableOpacity style={{marginTop: 160, marginLeft: 20, borderWidth: 1}}>
            {/* Drrop down choice menu
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
              buttonStyle={style.DropDownStyle}
              buttonTextStyle={{fontSize: 15, fontWeight: 'bold'}}
              rowTextStyle={{fontSize: 15}}
            />
          </TouchableOpacity>
        </View> */}

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

const style = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  frequency: {
    fontSize: 28,
    color: colors.white
  }, DropDownStyle: {
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
