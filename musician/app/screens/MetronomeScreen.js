import React, { Component } from 'react';
import { render } from 'react-dom';
import {SafeAreaView,TouchableHighlight,Image,StyleSheet, TouchableOpacity, Text, ImageBackground, TextInput } from 'react-native';
import click1 from '../click1.mp3';
import hardClick from '../hardClick.mp3'

import colors from '../config/colors';

export default class MetronomeScreen extends Component {




  constructor() {
    super();

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4,
      tempoText: "Moderato (moderately)"

    };

    this.click1 = new Audio(click1);
    this.click2 = new Audio(hardClick);
  }
  
  handleBeatsPerMeasureChange = (e) => {
    const beatsPerMeasure = e.target.value;

    this.setState({
      beatsPerMeasure
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

    if (bpm < 20){
      this.setState({tempoText: "Larghissimo (very, very slow)"});
    } else if (bpm >= 20 && bpm < 40){
      this.setState({tempoText: "Grave (slow and solemn)"});
    } else if (bpm >= 40 && bpm < 60){
      this.setState({tempoText: "Lento (slowly)"});
    } else if (bpm >= 60 && bpm < 66){
      this.setState({tempoText: "Largo (slowly)"});
    } else if (bpm >= 66 && bpm < 76){
      this.setState({tempoText: "Adagio (slow and stately)"});
    } else if (bpm >= 76 && bpm < 90){
      this.setState({tempoText: "Andante (walking pace)"});
    } else if (bpm >= 90 && bpm < 110){
      this.setState({tempoText: "Moderato (moderately)"});
    } else if (bpm >= 110 && bpm < 140){
      this.setState({tempoText: "Allegro (fast)"});
    } else if (bpm >= 140 && bpm < 160){
      this.setState({tempoText: "Vivace (very fast)"});
    } else if (bpm >= 180 && bpm < 200){
      this.setState({tempoText: "Presto (really fast)"});
    } else if (bpm > 200){
      this.setState({tempoText: "Prestissimo (that's reeeeeally fast dude!)"});
    }
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



    render(){

        const { playing, bpm, beatsPerMeasure } = this.state;
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={this.startStop}>
                <ImageBackground source={require("../../assets/metronome-image-wb.png")} resizeMode='contain' style={styles.metronomeImage} >
                  <form>
                       <input onChange={this.handleBpmChange}     //bpm text input
                        value ={bpm}
                        type='number'
                       // placeholder='120'
                       // keyboardType='numeric'
                        //style={styles.bpmTextInput}
                         >
                    </input>
                    </form>
                    <form>
                       <input onChange={this.handleBeatsPerMeasureChange}     //bpm text input
                        value ={beatsPerMeasure}
                        type='number'
                       placeholder='Please enter the beats per measure'
                       // keyboardType='numeric'
                        //style={styles.bpmTextInput}
                         >
                    </input>
                    </form>
                    <Text style={styles.timeSignatureText}>4/4</Text>
                    <Text
                      style={styles.speedText}>
                        {this.state.tempoText}
                      </Text>

                </ImageBackground>
            </TouchableOpacity>
        </SafeAreaView>

    );
    }
}




const styles = StyleSheet.create({
    bpmTextInput:{
        paddingTop:125,
        //height:50,
        fontSize:25,
        color: colors.black,

    },
    metronomeImage:{
        width:'100%',
        height:'100%',
        alignItems:'center',
    },
    speedText:{
        paddingTop:37.5,
        color: colors.black,
        fontSize:20,
    },
    timeSignatureText:{
        paddingTop:335,
        color:'#525252',
        fontSize:20,
    }


})
