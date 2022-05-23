import React, {Component} from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/stack';
import {StackActions} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import logo from './6String.jpg';
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

export default class TunerScreen extends Component {
  constructor() {
    super();
    this.state = {
      tuner_type: ['4 String Tuner', '6 String Tuner', 'Chromatic Tuner'],
      recording: false,
      isEnabled: true,
    };

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
  };

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
  };

  selectTuner = selectedItem => {
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
        <Image source={StringGuitarImage} style={styles.guitarImage} />

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

            <TouchableOpacity>
              <SelectDropdown
                data={this.state.tuner_type}
                onSelect={() => {}}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return this.selectTuner(selectedItem);
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                defaultButtonText={this.state.tuner_type[1]}
                buttonStyle={styles.DropDownStyle}
                buttonTextStyle={styles.drops}
                rowTextStyle={{fontSize: 15}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.buttonD]}
          activeOpacity={0.7}
          onPress={this.playD}>
          <Text style={styles.buttonText}>D</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonA]}
          activeOpacity={0.7}
          onPress={this.playA}>
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonLE]}
          activeOpacity={0.7}
          onPress={this.playE1}>
          <Text style={styles.buttonText}>E</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonG]}
          activeOpacity={0.7}
          onPress={this.playG}>
          <Text style={styles.buttonText}>G</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonB]}
          activeOpacity={0.7}
          onPress={this.playB}>
          <Text style={styles.buttonText}>B</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonHE]}
          activeOpacity={0.7}
          onPress={this.playE2}>
          <Text style={styles.buttonText}>E</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={[styles.TypeButtonStyle, {marginTop: -45, marginLeft: -150}]}
          onPress={() =>
            this.props.navigation.dispatch(StackActions.replace('6SMTuner'))
          }>
          <Text style={styles.TextStyle}>Manual</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.TypeButtonStyle,
            {width: 90, marginTop: -40, marginLeft: 50},
          ]}
          onPress={() =>
            this.props.navigation.dispatch(StackActions.replace('6SMTuner'))
          }>
          <Text style={styles.TextStyle}>Automatic</Text>
        </TouchableOpacity> */}
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
  baseText: {
    fontWeight: 'bold',
    bottom: 55000,
  },
  buttonA: {
    backgroundColor: colors.sixStringButtonFill,
    padding: 20,
    borderRadius: 95,
    position: 'absolute',
    left: 10,
    bottom: 295,
    borderWidth: 1,
  },
  buttonB: {
    backgroundColor: colors.sixStringButtonFill,
    padding: 20,
    borderRadius: 95,
    position: 'absolute',
    right: 10,
    bottom: 295,
    borderWidth: 1,
  },
  buttonD: {
    backgroundColor: colors.sixStringButtonFill,
    padding: 20,
    borderRadius: 95,
    position: 'absolute',
    left: 10,
    borderWidth: 1,
    bottom: 390,
  },
  buttonG: {
    backgroundColor: colors.sixStringButtonFill,
    padding: 20,
    borderRadius: 95,
    position: 'absolute',
    right: 10,
    bottom: 390,
    borderWidth: 1,
  },
  buttonHE: {
    backgroundColor: colors.sixStringButtonFill,
    padding: 20,
    borderRadius: 95,
    position: 'absolute',
    right: 10,
    bottom: 200,
    borderWidth: 1,
  },
  buttonLE: {
    backgroundColor: colors.sixStringButtonFill,
    padding: 20,
    borderRadius: 95,
    position: 'absolute',
    left: 10,
    bottom: 200,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  DropDownStyle: {
    width: 150,
    backgroundColor: colors.userInputElement,
    height: 40,
    marginRight: -235,
    bottom: 40,
    borderColor: colors.black,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  drops: {
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
  },
  guitarImage: {
    height: '70%',
    bottom: -180,
  },
  switch: {
    bottom: 250,
  },
  switchMA: {
    paddingHorizontal: 20,
    marginLeft: 240,
  },
  TextStyle: {
    fontSize: 15,
    // position:'absolute',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  toggleElements: {
    flex: 1,
    bottom: 440,
    //top: 20,
  },
  TypeButtonStyle: {
    width: 70,
    height: 40,
    backgroundColor: 'grey',
    bottom: 300,
    left: 30,
  },
  DropDownStyle: {
    width:150,
    backgroundColor: '#55B7AD',
    left:-6,
    //bottom: 80,
    //bottom: 100,
  }
})