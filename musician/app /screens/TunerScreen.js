import * as React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/stack';
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

export default function TunerScreen() {
  const [recording, setRecording] = useState(false);
  const [selectedValue, setSelectedValue] = useState('4String');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const low_e = new Sound('tuner_low_e.m4a', Sound.MAIN_BUNDLE, e => {});
  const high_e = new Sound('tuner_high_e.m4a', Sound.MAIN_BUNDLE, e => {});
  const a_string = new Sound('tuner_a.m4a', Sound.MAIN_BUNDLE, e => {});
  const d_string = new Sound('tuner_d.m4a', Sound.MAIN_BUNDLE, e => {});
  const g_string = new Sound('tuner_g.m4a', Sound.MAIN_BUNDLE, e => {});
  const b_string = new Sound('tuner_b.m4a', Sound.MAIN_BUNDLE, e => {});

  PitchTracker.prepare();

  PitchTracker.noteOn(res => {
    console.log('Note On: ' + res['midiNum']);
  }); // Note On: 60
  PitchTracker.noteOff(res => {
    console.log('Note Off: ' + res['midiNum']);
  });

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
    PitchTracker.start();
  }

  function playString(note) {
    switch (note) {
      case 'A':
        a_string.stop();
        a_string.play();
        break;
      case 'D':
        d_string.stop();
        d_string.play();
        break;
      case 'G':
        g_string.stop();
        g_string.play();
        break;
      case 'B':
        b_string.stop();
        b_string.play();
        break;
      case 'high_E':
        high_e.stop();
        high_e.play();
        break;
      case 'low_E':
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
    console.log('recording is: ' + recording);

    setRecording(false);
    console.log('stopping pitch tracker... ');
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

      {/* <Button
      title="Detect Pitch"
      // onPress={detectPitch}
      /> */}

      {/* <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      /> */}

      <Image source={StringGuitarImage} style={styles.guitarImage} />

      <View style={styles.toggleElements}>
        <View style={styles.switchMA}>
          <Switch
            value={isEnabled}
            onValueChange={toggleSwitch}
            disabled={false}
            activeText={'Manual'}
            inActiveText={'Auto'}
            circleSize={55}
            barHeight={50}
            circleBorderWidth={3}
            backgroundActive={colors.sixStringButtonFill}
            backgroundInactive={colors.sixStringAutoBG}
            circleActiveColor={colors.black}
            circleInActiveColor={'#000000'}
            //renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
            changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
            //innerCircleStyle={{alignItems: 'center', justifyContent: 'center'}} // style for inner animated circle for what you (may) be rendering inside the circle
            //outerCircleStyle={{}} // style for outer animated circle
            renderActiveText={true}
            renderInActiveText={true}
            switchLeftPx={3} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
            switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
            switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
            switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
          />
        </View>

        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="4String" value="4String" color="black" />
          <Picker.Item label="6String" value="6String" color="black" />
          <Picker.Item label="Chromatic" value="Chromatic" color="black" />
        </Picker>
      </View>

      {/* <Switch
        trackColor={{false: 'black', true: 'grey'}}
        thumbColor={isEnabled ? 'blue' : 'red'}
        ios_backgroundColor="#3e3e3e"
        style={styles.switchMA}
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}

      <TouchableOpacity onPress={() => playString('D')} style={styles.buttonD}>
        <Text style={styles.buttonText}>D</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => playString('A')} style={styles.buttonA}>
        <Text style={styles.buttonText}>A</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => playString('low_E')}
        style={styles.buttonLE}>
        <Text style={styles.buttonText}>E</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => playString('G')} style={styles.buttonG}>
        <Text style={styles.buttonText}>G</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => playString('B')} style={styles.buttonB}>
        <Text style={styles.buttonText}>B</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => playString('high_E')}
        style={styles.buttonHE}>
        <Text style={styles.buttonText}>E</Text>
      </TouchableOpacity>

      {/* <Text style={{fontWeight: 'bold', bottom: 500, left: 10}}>
        <Text style={{color: 'red'}}> AUTO </Text>
        <Text style={{color: 'blue'}}> MANUAL</Text>
      </Text> */}
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
    //fontWeight: 'bold',
  },

  guitarImage: {
    height: '70%',
    bottom: -180,
    position: 'relative',
    //marginBottom: -200,
  },

  picker: {
    height: 30,
    width: 150,
    color: colors.black,
    backgroundColor: colors.userInputElement,
    marginRight: 55,
  },

  switchMA: {
    paddingHorizontal: 20,
  },

  toggleElements: {
    flex: 1,
    bottom: 440,
    flexDirection: 'row-reverse',
    marginEnd: 10,
  },

  baseText: {
    fontWeight: 'bold',
    bottom: 55000,
  },

  innerText: {
    color: 'red',
  },
  innerText2: {
    color: 'blue',
  },
});
