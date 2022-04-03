import React, { Component } from 'react';
import { render } from 'react-dom';
import {SafeAreaView,TouchableHighlight,Image,StyleSheet, TouchableOpacity, Text, ImageBackground, TextInput } from 'react-native';
import click1 from '../click1.mp3';
import click2 from '../click1.mp3'

import colors from '../config/colors';

export default class MetronomeScreen extends Component {




  constructor() {
    super();

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };

    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
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

        const { playing, bpm } = this.state;
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
                    <Text style={styles.timeSignatureText}>4/4</Text>
                    <Text style={styles.speeedText}>Allegro</Text>

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
    speeedText:{
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
