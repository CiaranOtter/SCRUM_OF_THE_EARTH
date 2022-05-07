import React, { Component, useState } from "react"; //libraries imported from external sources
import { render } from "react-dom";
import {
  SafeAreaView,
  TouchableHighlight,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  TextInput,
  Button,
  Modal,
  // Picker,
  View,
} from "react-native";
import colors from "../config/colors";

import { Picker } from "@react-native-picker/picker"

const metronome = require("../classes/metronome.js");
const Sound = require("react-native-sound");

Sound.setCategory("Alarm")

export default class MetronomeScreen extends Component {

  constructor() {
    super();
    this.timer;
    this.MetronomeClass = new metronome();
    // this.navigation = navigation;

    this.hardclick = new Sound('hardclick.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the hard click', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + this.hardclick.getDuration() + ' number of channels: ' + this.hardclick.getNumberOfChannels());
    
      // Play the sound with an onEnd callback
      this.hardclick.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });

    this.click1 = new Sound('click.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + this.click1.getDuration() + ' number of channels: ' + this.click1.getNumberOfChannels());
    
      // Play the sound with an onEnd callback
      this.click1.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
    //initial state of the app and its componets/functions
    // this.state = {
    //   playing: false, // there is nothing being played yet
    //   count: 0,
    //   bpm: 100, // initial beats per minute value
    //   beatsPerMeasure: 4, // initial beats per measure value
    //   tempoText: "Moderato (moderately)" // initial tempo marking based on the bpm value

    // };
  }

  //load the sound we're going to use for the metronome
  async componentDidMount() {
    
  }


  handleBeatsPerMeasureChange = (e) => {
    this.MetronomeClass.setBeatPerMeasure(e.target.value);
  };

  //   calcTempoText(bpm) {
  //     if (bpm < 20) {
  //       this.setState({ tempoText: "Larghissimo (very, very slow)" });
  //     } else if (bpm >= 20 && bpm < 40) {
  //       this.setState({ tempoText: "Grave (slow and solemn)" });
  //     } else if (bpm >= 40 && bpm < 60) {
  //       this.setState({ tempoText: "Lento (slowly)" });
  //     } else if (bpm >= 60 && bpm < 66) {
  //       this.setState({ tempoText: "Largo (slowly)" });
  //     } else if (bpm >= 66 && bpm < 76) {
  //       this.setState({ tempoText: "Adagio (slow and stately)" });
  //     } else if (bpm >= 76 && bpm < 90) {
  //       this.setState({ tempoText: "Andante (walking pace)" });
  //     } else if (bpm >= 90 && bpm < 110) {
  //       this.setState({ tempoText: "Moderato (moderately)" });
  //     } else if (bpm >= 110 && bpm < 140) {
  //       this.setState({ tempoText: "Allegro (fast)" });
  //     } else if (bpm >= 140 && bpm < 160) {
  //       this.setState({ tempoText: "Vivace (very fast)" });
  //     } else if (bpm >= 180 && bpm < 200) {
  //       this.setState({ tempoText: "Presto (really fast)" });
  //     } else if (bpm > 200) {
  //       this.setState({ tempoText: "Prestissimo (that's reeeally fast dude!)" });
  //     }

  //       return this.state.tempoText;
  // }

  // handleBpmChange = (e) => {
  //   const bpm = e.target.value; //obtain value of the beats per measure from the user input
  //   // if (this.state.playing) {
  //   //   clearInterval(this.timer);  //start a new timer
  //   //   this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

  //   //   //set new bpm and counter
  //   //   this.setState({
  //   //     count: 0,
  //   //     bpm
  //   //   });
  //   // } else {
  //   //   this.setState({ bpm });
  //   // }

  //   this.metronome.setBPM(bpm);
  //   //#region If statement to select and sisplay the tempo marking based on the bpm value
  //   // if (bpm < 20) {
  //   //   this.setState({ tempoText: "Larghissimo (very, very slow)" });
  //   // } else if (bpm >= 20 && bpm < 40) {
  //   //   this.setState({ tempoText: "Grave (slow and solemn)" });
  //   // } else if (bpm >= 40 && bpm < 60) {
  //   //   this.setState({ tempoText: "Lento (slowly)" });
  //   // } else if (bpm >= 60 && bpm < 66) {
  //   //   this.setState({ tempoText: "Largo (slowly)" });
  //   // } else if (bpm >= 66 && bpm < 76) {
  //   //   this.setState({ tempoText: "Adagio (slow and stately)" });
  //   // } else if (bpm >= 76 && bpm < 90) {
  //   //   this.setState({ tempoText: "Andante (walking pace)" });
  //   // } else if (bpm >= 90 && bpm < 110) {
  //   //   this.setState({ tempoText: "Moderato (moderately)" });
  //   // } else if (bpm >= 110 && bpm < 140) {
  //   //   this.setState({ tempoText: "Allegro (fast)" });
  //   // } else if (bpm >= 140 && bpm < 160) {
  //   //   this.setState({ tempoText: "Vivace (very fast)" });
  //   // } else if (bpm >= 180 && bpm < 200) {
  //   //   this.setState({ tempoText: "Presto (really fast)" });
  //   // } else if (bpm > 200) {
  //   //   this.setState({ tempoText: "Prestissimo (that's reeeally fast dude!)" });
  //   // }

  //   this.metronome.calcTempoText(bpm)
  //   //#endregion
  // };

  handleBpmChange = (text) => {
    if (text == ""){
      text = "120"
    }
    this.MetronomeClass.setBPM(text);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.MetronomeClass.getBPM());
  };

  startStop = () => {
    let playing = this.MetronomeClass.isPlaying();
    if (playing) {
      clearInterval(this.timer);
      startstopText = "START";
      this.MetronomeClass.setCount(0)
    } else {
      //start again with the current bpm

      this.timer = setInterval(
        this.playClick,
        (60 / this.MetronomeClass.getBPM()) * 1000
      );
      this.playClick;
    }
    this.MetronomeClass.setPlaying(!playing);
  };

  playClick = () => {
    const count = this.MetronomeClass.getCount();
    const beatsPerMeasure = this.MetronomeClass.getBeatsPerMeasure();
    console.log(count);
    this.click1.setCurrentTime(0);
    this.click1.play();
    // if (count % beatsPerMeasure === 0) {
    //   this.click1.setCurrentTime(0);
    //   this.

    //   this.click1.play((success) => {
    //     if (success) {
    //       console.log('successfully finished playing');
    //     } else {
    //       console.log('playback failed due to audio decoding errors');
    //     }
    //   }); //play the sound
    // } else {
    //   this.click1.play((success) => {
    //     if (success) {
    //       console.log('successfully finished playing');
    //     } else {
    //       console.log('playback failed due to audio decoding errors');
    //     }
    //   }); //play the sound
    // }
    this.MetronomeClass.updateCount();
  };

  render() {
    // initialise the variables we are going to use to be in the current state
    const playing = this.MetronomeClass.isPlaying();
    const bpm = this.MetronomeClass.getBPM();
    const beatsPerMeasure = this.MetronomeClass.getBeatsPerMeasure();
    return (
      <SafeAreaView style={styles.container} forceInset={{ top: 'never'}}>
        
          {/* Text for bpm input */}
          <Text style={styles.bpmText}>ENTER BEATS PER MINUTES:</Text>

          {/* input for the bpm */}
          <View style={styles.centeredView}>
            <TextInput
              style={styles.bpmTextInput}
              onChangeText={text => {this.handleBpmChange(text)}} //text to indicate that the user should enter a bpm and a bpm text input
              number={bpm}></TextInput>
            </View>
          
          {/* input picker for the beats per measure */}
          <View style={styles.centeredView}>
            <Picker
              style={styles.pickerMenu}
              onChange={this.handleBeatsPerMeasureChange} //beats per measure dropdown menu, and function to be called when a value is picked
            >
              <Picker.Item label="beats per measure" value="0"></Picker.Item>
              <Picker.Item label="2" value="2"></Picker.Item>
              <Picker.Item label="3" value="3"></Picker.Item>
              <Picker.Item label="4" value="4"></Picker.Item>
              <Picker.Item label="5" value="5"></Picker.Item>
              <Picker.Item label="6" value="6"></Picker.Item>
              <Picker.Item label="7" value="7"></Picker.Item>
              <Picker.Item label="8" value="8"></Picker.Item>
              <Picker.Item label="9" value="9"></Picker.Item>
              <Picker.Item label="10" value="10"></Picker.Item>
              <Picker.Item label="11" value="11"></Picker.Item>
              <Picker.Item label="12" value="12"></Picker.Item>
            </Picker>
          </View>

          {/* input picker for the notes per measure */}
          <View style={styles.centeredView}>
            <Picker
              style={styles.pickerMenu} //drop down menu to select the note per measure
            >
              <Picker.Item label="note per measure" value="0"></Picker.Item>
              <Picker.Item label="1" value="1"></Picker.Item>
              <Picker.Item label="2" value="2"></Picker.Item>
              <Picker.Item label="3" value="3"></Picker.Item>
              <Picker.Item label="4" value="4"></Picker.Item>
              <Picker.Item label="5" value="5"></Picker.Item>
              <Picker.Item label="6" value="6"></Picker.Item>
              <Picker.Item label="7" value="7"></Picker.Item>
              <Picker.Item label="8" value="8"></Picker.Item>
              <Picker.Item label="9" value="9"></Picker.Item>
              <Picker.Item label="10" value="10"></Picker.Item>
              <Picker.Item label="11" value="11"></Picker.Item>
              <Picker.Item label="12" value="12"></Picker.Item>
            </Picker>
          </View>

        {/* input button for starting and stopping the metronome */}
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={styles.playButton}
            onPress={this.startStop} // a button to start or stop the metronome sound
          >
            <Text style={styles.buttonText}>START/STOP</Text>
          </TouchableOpacity>
        </View>

        <ImageBackground
          source={require("../../assets/metronome-image-wb.png")}
          resizeMode="stretch"
          style={styles.metronomeImage}
        >
          <Text
            //time signature text
            style={styles.timeSignatureText}
          >
            {beatsPerMeasure} / 4
          </Text>

          <Text
            //bpm text
            style={styles.speedText}
          >
            {this.MetronomeClass.getTempoText}
          </Text>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  //styles for elements listed in Alphabetical order (with the exception of container - which is always on top)
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bpmText: {
    paddingTop: "10%",
    color: colors.black,
    fontSize: 15,
    width: '100%',
    textAlign: 'center'
  },
  bpmTextInput: {
    borderWidth: 1,
    borderColor: "#777",
    paddingTop: 5,
    width: 200,
    height: 40,
    fontSize: 15,
    color: colors.black,
    backgroundColor: colors.userInputElement,
    margin: 'auto',
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    paddingLeft: 20,
    color: colors.black,
  },
  metronomeImage: {
    margin:10,
    width: "100%",
    height: "90%",
    alignItems: "center",
  },
  pickerMenu: {
    borderWidth: 1,
    borderColor: colors.black,
    paddingTop: 50,
    marginTop: 20,
    width: 200,
    fontSize: 15,
    color: colors.black,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#d4f3ee",
  },
  playButton: {
    backgroundColor: colors.pressableElement,
    height: 50,
    width: 200,
    borderRadius: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  speedText: {
    paddingTop: 50,
    paddingLeft: 90,
    color: colors.black,
    fontSize: 17,
    justifyContent: "center",
    alignContent: "center",
    //  backgroundColor: '#347572'
  },

  timeSignatureText: {
    paddingTop: 400,
    color: "#ffffff",
    fontSize: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  centeredView: {
    // flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center', 
 },
});
