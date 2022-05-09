import React, {Component} from 'react';
import {
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {Switch} from 'react-native-switch';
import {StackActions} from '@react-navigation/native';
const Sound = require('react-native-sound');

import guitarImage from '../../assets/Tuner_4String_B.png';
import colors from '../config/colors';

export default class _4SMTuner extends Component {
  constructor() {
    super();
    this.state = {
      tuner_type: ['4 String Tuner', '6 String Tuner', 'Chromatic Tuner'],
      isEnabled: true,
    };
  }

  async componentDidMount() {
    //settings to customise user experience with the audio
    this.low_e = new Sound('tuner_low_e.m4a', Sound.MAIN_BUNDLE, e => {});
    this.high_e = new Sound('tuner_high_e.m4a', Sound.MAIN_BUNDLE, e => {});
    this.a_string = new Sound('tuner_a.m4a', Sound.MAIN_BUNDLE, e => {});
    this.d_string = new Sound('tuner_d.m4a', Sound.MAIN_BUNDLE, e => {});
    this.g_string = new Sound('tuner_g.m4a', Sound.MAIN_BUNDLE, e => {});
    this.b_string = new Sound('tuner_b.m4a', Sound.MAIN_BUNDLE, e => {});
  } //end async function

  toggleSwitch = () => this.setState({isEnabled: !this.state.isEnabled});

  //functions to play each note--Needs to be abstacted

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
                defaultButtonText={this.state.tuner_type[0]}
                buttonStyle={styles.DropDownStyle}
                buttonTextStyle={styles.drops}
                rowTextStyle={{fontSize: 15}}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* <TouchableOpacity
          style={[styles.TypeButtonStyle, {marginTop: -45, marginLeft: 190}]}
          onPress={() =>
            this.props.navigation.dispatch(StackActions.replace('4SMTuner'))
          }>
          <Text style={[styles.TextStyle2, {margin: 7}]}>Manual</Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity
          style={[
            styles.TypeButtonStyle,
            {width: 90, marginTop: -40, marginLeft: 265},
          ]}
          onPress={() =>
            this.props.navigation.dispatch(StackActions.replace('4SATuner'))
          }>
          <Text style={[styles.TextStyle2, {margin: 7}]}>Automatic</Text>
        </TouchableOpacity> */}

        <ImageBackground
          source={guitarImage}
          resizeMode="contain"
          style={styles.Tunerstyle}>
          <TouchableOpacity
            style={[styles.SoundButtonStyle, {marginTop: 110, marginLeft: 140}]}
            activeOpacity={0.9}
            onPress={this.playE1}>
            <Text style={styles.TextStyle}>E</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.SoundButtonStyle, {marginLeft: 90}]}
            activeOpacity={0.9}
            onPress={this.playA}>
            <Text style={styles.TextStyle}>A</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.SoundButtonStyle, {marginLeft: 50}]}
            activeOpacity={0.9}
            onPress={this.playD}>
            <Text style={styles.TextStyle}>D</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.SoundButtonStyle, {marginLeft: 20}]}
            activeOpacity={0.9}
            onPress={this.playG}>
            <Text style={styles.TextStyle}>G</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  DropDownStyle: {
    width: 150,
    backgroundColor: colors.userInputElement,
    height: 40,
    marginRight: -225,
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
  SoundButtonStyle: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.black,
    backgroundColor: colors.sixStringButtonFill,
    marginTop: 20,
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

  TextStyle2: {
    margin: 12,
    color: colors.black,
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
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
  TypeButtonStyle: {
    width: 70,
    height: 40,
    backgroundColor: '#55B7AD',
  },
});
