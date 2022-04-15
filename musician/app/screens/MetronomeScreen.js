import React, { Component, useState } from 'react';  //libraries imported from external sources
import { render } from 'react-dom';
import { SafeAreaView, TouchableHighlight, Image, StyleSheet, TouchableOpacity, Text, ImageBackground, TextInput, Button, Modal, Picker, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Audio } from 'expo-av';

//import click1 from '../click1.mp3';      //objects and libraries imported from within our project
//import hardClick from '../hardClick.mp3'
import colors from '../config/colors';

export default class MetronomeScreen extends Component {

  // const[range, setRange] = useState('50%')
  // const[sliding, setSliding] = useState('Inactive')


  constructor() {
    super();

    //initial state of the app and its componets/functions
    this.state = {
      playing: false, // there is nothing being played yet
      count: 0,
      bpm: 100, // initial beats per minute value
      beatsPerMeasure: 4, // initial beats per measure value 
      tempoText: "Moderato (moderately)" // initial tempo marking based on the bpm value

    };

  }

  //load the sound we're going to use for the metronome
  async componentDidMount(){
    this.click1 = new Audio.Sound();
    this.hardClick = new Audio.Sound();

    //try to load the audio, and if it fails debug the error
    try {     
      this.click1.loadAsync(require('../click1.mp3'));
      this.hardClick.loadAsync(require('../hardClick.mp3'));
    } catch (error) {
      console.log('Failed to load metronome sounds: ' + error);
    }

    
  }

  handleBeatsPerMeasureChange = (e) => {
    const beatsPerMeasure = e.target.value; // obtain value of the beats per measure from the dropdwon menu 

    this.setState({
      beatsPerMeasure //set the value to the one obtained
    })
  }

  handleBpmChange = (e) => {
    const bpm = e.target.value; //obtain value of the beats per measure from the user input
    if (this.state.playing) {
      clearInterval(this.timer);  //start a new timer
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

      //set new bpm and counter
      this.setState({
        count: 0,
        bpm
      });
    } else {
      this.setState({ bpm });
    }

    //#region If statement to select and sisplay the tempo marking based on the bpm value
    if (bpm < 20) {
      this.setState({ tempoText: "Larghissimo (very, very slow)" });
    } else if (bpm >= 20 && bpm < 40) {
      this.setState({ tempoText: "Grave (slow and solemn)" });
    } else if (bpm >= 40 && bpm < 60) {
      this.setState({ tempoText: "Lento (slowly)" });
    } else if (bpm >= 60 && bpm < 66) {
      this.setState({ tempoText: "Largo (slowly)" });
    } else if (bpm >= 66 && bpm < 76) {
      this.setState({ tempoText: "Adagio (slow and stately)" });
    } else if (bpm >= 76 && bpm < 90) {
      this.setState({ tempoText: "Andante (walking pace)" });
    } else if (bpm >= 90 && bpm < 110) {
      this.setState({ tempoText: "Moderato (moderately)" });
    } else if (bpm >= 110 && bpm < 140) {
      this.setState({ tempoText: "Allegro (fast)" });
    } else if (bpm >= 140 && bpm < 160) {
      this.setState({ tempoText: "Vivace (very fast)" });
    } else if (bpm >= 180 && bpm < 200) {
      this.setState({ tempoText: "Presto (really fast)" });
    } else if (bpm > 200) {
      this.setState({ tempoText: "Prestissimo (that's reeeally fast dude!)" });
    }
    //#endregion
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.bpm);
  };

  startStop = () => {
    if (this.state.playing) {
      clearInterval(this.timer);
      this.setState({
        playing: false
      });


    } else {

      //start again with the current bpm
      this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
      this.setState(
        {
          count: 0,
          playing: true,

        },
        this.playClick
      );

    }
  };



playClick = () => {
    const { count, beatsPerMeasure } = this.state;
    if (count % beatsPerMeasure === 0) {
      
      this.hardClick.setPositionAsync(0); //reset the playback position of the Async so that the sound can play continuosly
      this.hardClick.playAsync();  //play the sound
    } else {
     
      this.click1.setPositionAsync(0);  //reset the playback position of the Async so that the sound can play continuosly
      this.click1.playAsync();   //play the sound
    }
    this.setState((state) => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  };


  render() {

    // initialise the variables we are going to use to be in the current state
    const { playing, bpm, beatsPerMeasure } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.bpmText}>ENTER BEATS PER MINUTES:
        </Text>  
        <TouchableOpacity>
          <TextInput style={styles.bpmTextInput} onChange={this.handleBpmChange} //text to indicate that the user should enter a bpm and a bpm text input
            number={bpm} ></TextInput>
          <View>
            <Picker style={styles.pickerMenu}
              onChange={this.handleBeatsPerMeasureChange}     //beats per measure dropdown menu, and function to be called when a value is picked
              value={beatsPerMeasure}>
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
            <Picker style={styles.pickerMenu} //drop down menu to select the note per measure
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
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton} onPress={this.startStop} // a button to start or stop the metronome sound
        >
          <Text style={styles.buttonText}>START/STOP</Text>
        </TouchableOpacity>
        <ImageBackground source={require("../../assets/metronome-image-wb.png")} resizeMode='contain' style={styles.metronomeImage} >

          <Text
          //time signature text
            style={styles.timeSignatureText}>
            {this.state.beatsPerMeasure} / {this.state.notesPerMeasure}</Text>

          <Text
          //bpm text
            style={styles.speedText}>
            {this.state.tempoText}
          </Text>
        </ImageBackground>


      </SafeAreaView>


    );
  }
}




const styles = StyleSheet.create({    //styles for elements listed in Alphabetical order (with the exception of container - which is always on top)
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: 'center',
    //backgroundColor:colors.black,
  },
  bpmText: {
    paddingTop: 150,
    color: colors.black,
    fontSize: 15,
    paddingLeft: '42.5%',
    justifyContent: 'center',
    alignContent: 'center'
  },
  bpmTextInput: {
    borderWidth: 1,
    borderColor: '#777',
    paddingTop: 5,
    marginLeft:'42.5%',
    marginTop: 10,
    width: 200,
    fontSize: 15,
    color: colors.black,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.userInputElement,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    paddingLeft: 20,
    color: colors.black,

  },
  metronomeImage: {
    // margin:10,
    width: '100%',
    height: '90%',
    alignItems: 'center',
  },
  pickerMenu: {
    borderWidth: 1,
    borderColor: '#777',
    paddingTop: 5,
    marginLeft: '42.5%',
    marginTop: 10,
    width: 200,
    fontSize: 15,
    color: colors.black,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#d4f3ee'
  },
  playButton: {
    backgroundColor: colors.pressableElement,
    height: 50,
    width: '10%',
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  speedText: {
    paddingTop: 50,
    paddingLeft: 90,
    color: colors.black,
    fontSize: 17,
    justifyContent: 'center',
    alignContent: 'center',
    //  backgroundColor: '#347572'
  },

  timeSignatureText: {
    paddingTop: 550,
    color: '#ffffff',
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center'
  },
});