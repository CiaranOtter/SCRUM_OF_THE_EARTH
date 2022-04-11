import React, { Component, useState } from 'react';  //libraries imported from external sources
import { render } from 'react-dom';
import { SafeAreaView, TouchableHighlight, Image, StyleSheet, TouchableOpacity, Text, ImageBackground, TextInput, Button, Modal, Picker } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import click1 from '../click1.mp3';      //objects and libraries imported from within our project
import hardClick from '../hardClick.mp3'
import colors from '../config/colors';

export default class MetronomeScreen extends Component {

  // const[range, setRange] = useState('50%')
  // const[sliding, setSliding] = useState('Inactive')


  constructor() {
    super();

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4, // the initial beats per measure value
      tempoText: "Moderato (moderately)" // the initial tempo marking, in relation to the beats per minute value

    };
    
    // initialise the audios we are going to use
    this.click1 = new Audio(click1);
    this.click2 = new Audio(hardClick);
  }

  // handle the beats per measure change
  handleBeatsPerMeasureChange = (e) => {
    const beatsPerMeasure = e.target.value; //obtain the value from the dropdown that user has selected

    this.setState({
      beatsPerMeasure // set the new value of the beats per measure to what was obtained
    })
  }

  handleBpmChange = (e) => {
    const bpm = e.target.value;
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

    //#region If statement to select and dispay tempo marking based on tempo / beats per minute
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
      this.setState({ tempoText: "Prestissimo (that's reeeeeally fast dude!)" });
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
          playing: true
        },
        this.playClick
      );
    }
  };

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;
    if (count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }
    this.setState((state) => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  };



  render() {

    const { playing, bpm, beatsPerMeasure } = this.state;
    return (

      <SafeAreaView style={styles.container}>

          <TouchableOpacity>
          <form>
            <Picker color='red'
          onChange={this.handleBeatsPerMeasureChange}     //bpm text input
          value={beatsPerMeasure}>
            <Picker.Item label = "Beats per Measure" value = "0"></Picker.Item>
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
          <Picker>
            <Picker.Item label="note value" value="0"></Picker.Item>
          <Picker.Item label="semibreve" value="1"></Picker.Item>
          <Picker.Item label="semibreve rest" value="1"></Picker.Item>
          <Picker.Item label="minim" value="2"></Picker.Item>
          <Picker.Item label="minim rest" value="2"></Picker.Item>
          <Picker.Item label="crochet" value="4"></Picker.Item>
          <Picker.Item label="crochet rest" value="4"></Picker.Item>
          <Picker.Item label="quaver" value="8"></Picker.Item>
          <Picker.Item label="quaver rest" value="8"></Picker.Item>
          <Picker.Item label="semiquaver" value="16"></Picker.Item>
          <Picker.Item label="semiquaver rest" value="16"></Picker.Item>
          </Picker>
          </form>
           <form>
             <input onChange={this.handleBpmChange}     //bpm text input
                value={bpm}
       
              >
              </input >
            </form >   
                    
           </TouchableOpacity>
          
          <ImageBackground source={require("../../assets/metronome-image-wb.png")} resizeMode='contain' style={styles.metronomeImage} >
           
          
            <Text style={styles.timeSignatureText}>...</Text>
            <Text
              style={styles.speedText}>
              {this.state.tempoText}
            </Text>
            <TouchableOpacity>
               <Button title='Start/Stop' color='blue' onPress={this.startStop}/>
            </TouchableOpacity>

          </ImageBackground >
         
    </SafeAreaView>


    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20
  },
  button: {
    borderRadius: 8,
    borderRadius:100,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    paddingVertical: 10
    
  },
  bpmTextInput: {
    paddingTop: 125,
    //height:50,
    fontSize: 25,
    color: colors.black,

  },
   metronomeImage: {
    width: '100%',
    height: '85%',
  alignItems: 'center',
  },
  speedText: {
    paddingTop: 37.5,
    color: colors.black,
    fontSize: 20,
    alignContent:'center'
  },
  timeSignatureText: {
    paddingTop: 335,
    color: '#525252',
    fontSize: 20,
  }
});