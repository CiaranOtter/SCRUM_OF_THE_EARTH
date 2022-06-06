import React, {Component} from 'react';
import {
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  View,
  StatusBar
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {StackActions} from '@react-navigation/native';
import {Switch} from 'react-native-switch';
import Automatic_Tuner from '../components/Automic_Tuner';
import Meter from "../components/Meter.js"

import guitarImage from '../../assets/Tuner_4String_Auto.png';
import colors from '../config/colors';
import Note from '../components/Notes.js'

export default class _4SATuner extends Component {
  // Constructing class and initializing state and dropdown data
  constructor() {
    super();
    
    this.tuner = new Automatic_Tuner();
    this.tuner.setTargetNote(40);
    this.tuner.start();
    this.tuner.onNoteDetected = (note) => {
      if (this._lastNoteName === note.name) {
        console.log("detetce note")
        console.log(note)
        this._update(note);
      } else {
        this._lastNoteName = note.name;
      }
    };
  }

  state = {
    note: {
      name: "E",
      octave: 1,
      frequency: 83,
    },
    playedNote: '',
    isEnabled: false,
    tuner_type: ['4 String Tuner', '6 String Tuner', 'Chromatic Tuner'],
  };

  _update(note) {
    this.setState({ note });
  }

  toggleSwitch = () =>
    this.props.navigation.dispatch(StackActions.replace('4SMTuner'));

  // Called to play E String soudn back to user
  SoundEButton = () => {
    this.setState({playedNote: 'E'});
    this.tuner.setTargetNote(40)
    this._update({
      name: "E",
      octave: 1,
      frequency: 83,
    })
  };
  // Called to play A String soudn back to user
  SoundAButton = () => {
    this.setState({playedNote: 'A'});
    this.tuner.setTargetNote(45);
    this._update({
      name: "A",
      octave: 1,
      frequency: 110,
    })
  };
  // Called to play D String soudn back to user
  SoundDButton = () => {
    this.setState({playedNote: 'D'});
    this.tuner.setTargetNote(50)
    this._update({
      name: "D",
      octave: 1,
      frequency: 146.83,
    })
  };
  // Called to play G String soudn back to user
  SoundGButton = () => {
    this.setState({playedNote: 'G'});
    this.tuner.setTargetNote(55);
    this._update({
      name: "G",
      octave: 1,
      frequency: 196.00,
    })
  };

  // Claaed to make a request to record
  record = () => {
    Alert.alert('recording');
  };

  // Funtion to change scrive screens based on (selectedItem) the user's choice
  selectedTuner = selectedItem => {
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
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.toggleElements}>
          <View style={styles.switchMA}>
            <Switch
              activeTextStyle={styles.drops}
              inactiveTextStyle={styles.drops}
              value={this.state.isEnabled}
              onValueChange={this.toggleSwitch}
              disabled={false}
              activeText={'Manual'}
              inActiveText={'Auto'}
              circleSize={45}
              barHeight={40}
              circleBorderWidth={3}
              backgroundActive={colors.sixStringButtonFill}
              backgroundInactive={colors.pressableElement}
              circleActiveColor={colors.black}
              circleInActiveColor={colors.black}
              //renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
              changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
              //innerCircleStyle={{alignItems: 'center', justifyContent: 'center'}} // style for inner animated circle for what you (may) be rendering inside the circle
              //outerCircleStyle={(style = {color: '#000'})} // style for outer animated circle
              renderActiveText={true}
              renderInActiveText={true}
              switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
              switchRightPx={1.5} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
              switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
              switchBorderRadius={40} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
            />
          </View>

          <TouchableOpacity style={{marginTop: 160, marginLeft: 20}}>
            {/* Drrop down choice menu */}
            <SelectDropdown
              data={this.state.tuner_type}
              onSelect={() => {}}
              buttonTextAfterSelection={(selectedItem, index) => {
                return this.selectedTuner(selectedItem);
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              defaultButtonText={this.state.tuner_type[0]}
              buttonStyle={styles.DropDownStyle}
              buttonTextStyle={{fontSize: 15, fontWeight: 'bold'}}
              rowTextStyle={{fontSize: 15}}
            />
          </TouchableOpacity>
        </View>

        {/* Button to select manual tuner
        <TouchableOpacity
          style={[styles.TypeButtonStyle, {marginTop: -45, marginLeft: 190}]}
          onPress={() =>
            this.props.navigation.dispatch(StackActions.replace('4SMTuner'))
          }>
          <Text style={styles.TextStyle}>Manual</Text>
        </TouchableOpacity> */}

        {/* Button to select the Automatic version of the tuner */}
        {/* <TouchableOpacity
          style={[
            styles.TypeButtonStyle,
            {width: 90, marginTop: -40, marginLeft: 265},
          ]}
          onPress={() =>
            this.props.navigation.dispatch(StackActions.replace('4SATuner'))
          }>
          <Text style={styles.TextStyle}>Automatic</Text>
        </TouchableOpacity> */}

        {/* $ String background image for the tuner app */}
        <ImageBackground
          source={guitarImage}
          resizeMode="contain"
          style={styles.Tunerstyle}>
          {/* Button to play the E String sound */}
          <TouchableOpacity
            style={[styles.SoundButtonStyle, {top: 115, marginLeft: 130}]}
            activeOpacity={0.9}
            onPress={this.SoundEButton}>
            <Text style={styles.TextStyle}>E</Text>
          </TouchableOpacity>

          {/* Button to play the A String sound */}
          <TouchableOpacity
            style={[styles.SoundButtonStyle, {top: 140, marginLeft: 85}]}
            activeOpacity={0.9}
            onPress={this.SoundAButton}>
            <Text style={styles.TextStyle}>A</Text>
          </TouchableOpacity>

          {/* Button to play the D String sound */}
          <TouchableOpacity
            style={[styles.SoundButtonStyle, {top: 150, marginLeft: 50}]}
            activeOpacity={0.9}
            onPress={this.SoundDButton}>
            <Text style={styles.TextStyle}>D</Text>
          </TouchableOpacity>

          {/* Button to play the G String sound */}
          <TouchableOpacity
            style={[styles.SoundButtonStyle, {top: 160, marginLeft: 15}]}
            activeOpacity={0.9}
            onPress={this.SoundGButton}>
            <Text style={styles.TextStyle}>G</Text>
          </TouchableOpacity>

          <View style={styles.NotePlayedContainer}>
          <StatusBar backgroundColor="#000" translucent />
            <Meter style={styles.meter}cents={this.state.note.cents} type={"radial"} />
            <Note {...this.state.note} />
            <Text style={styles.frequency}>
              {this.state.note.frequency.toFixed(1)} Hz
            </Text>
            <Text style={[styles.TextStyle, {margin: 20, fontSize: 30}]}>
              {this.state.playedNote}
            </Text>
          </View>

        </ImageBackground>
      </SafeAreaView>
    );
  }
}

// styles

const styles = StyleSheet.create({
  meter: {
    width: "50%",
  },
  frequency: {
    fontSize: 28,
    color: colors.white
  },
  NotePlayedContainer: {
    //marginTop: 50,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'green',
    textAlign: 'center',
    alignSelf: 'baseline',
    position:"relative"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
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
