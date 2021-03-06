import React, { Component } from 'react';
import { StyleSheet, Button, SafeAreaView, View } from 'react-native';

export default class ManualTunerScreen extends Component {

  async componentDidMount() {
    //settings to customise user experience with the audio
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true

    });

    const status = { shouldPlay: false } //dont play sound as soon as app is loaded
    //create audio sound objects for each note and load the sound
    this.e = new Audio.Sound();
    this.e.loadAsync( require ('../sounds/stringE1.mp3'), status, false );

    this.b = new Audio.Sound();
    this.b.loadAsync( require ('../sounds/stringB.mp3'), status, false);

    this.g = new Audio.Sound();
    this.g.loadAsync( require ('../sounds/stringG.mp3'), status, false);

    this.d = new Audio.Sound();
    this.d.loadAsync( require ('../sounds/stringD.mp3'), status, false);

    this.a = new Audio.Sound();
    this.a.loadAsync( require ('../sounds/stringA.mp3'), status, false);

    this.e2 = new Audio.Sound();
    this.e2.loadAsync( require ('../sounds/stringE2.mp3'), status, false);


  }//end async function

  //functions to play each note--Needs to be abstacted


  playE1 = () => {
    this.e.replayAsync(); //replayAsync() allows the sound to play many times vs playAsync() which only played once on phone
    console.log("E1 button pressed");
  };

  playB = () => {
    this.b.replayAsync();
    console.log("B button pressed");
  };

  playG = () => {
    this.g.replayAsync();
    console.log("G button pressed");
  };

  playD = () => {
    this.d.replayAsync();
    console.log("D button pressed");
  };

  playA = () => {
    this.a.replayAsync();
    console.log("A button pressed");
  };

  playE2 = () => {
    this.e2.replayAsync();
    console.log("E2 button pressed");
  };

  //in each button consider key=item.id.toString()

  render (){
    return(
    <SafeAreaView style={styles.container}>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.buttonStyle}>

            <Button
              title="E2 String"
              onPress={this.playE2}/>

            <Button
              title="A String"
              onPress={this.playA}/>

            <Button
              title="D String"
              onPress={this.playD}/>
        </View>
        <View style={styles.buttonStyle}>
            <Button
              title="G String"
              onPress={this.playG}/>

            <Button
              title="B String"
              onPress={this.playB}/>

            <Button
              title="E String"
              onPress={this.playE1}/>
        </View>
      </View>


    <StatusBar style="auto" />
    </SafeAreaView>
    );//end return
  }; //end render
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
