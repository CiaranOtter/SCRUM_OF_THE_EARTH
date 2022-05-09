import React, { Component } from "react";
import { Text, ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, Alert, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { StackActions } from "@react-navigation/native";
const Sound = require("react-native-sound")

export default class _4SMTuner extends Component {   
    
    constructor(){
        super();
        this.state = {
            tuner_type: ["4 String Tuner", "6 String Tuner", "Chromatic Tuner"]
        }
    }

    async componentDidMount() {
        //settings to customise user experience with the audio
        this.low_e = new Sound('tuner_low_e.m4a', Sound.MAIN_BUNDLE, e => {});
        this.high_e = new Sound('tuner_high_e.m4a', Sound.MAIN_BUNDLE, e => {});
        this.a_string = new Sound('tuner_a.m4a', Sound.MAIN_BUNDLE, e => {});
        this.d_string = new Sound('tuner_d.m4a', Sound.MAIN_BUNDLE, e => {});
        this.g_string = new Sound('tuner_g.m4a', Sound.MAIN_BUNDLE, e => {});
        this.b_string = new Sound('tuner_b.m4a', Sound.MAIN_BUNDLE, e => {});    
    
    }//end async function
    
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

    selectTuner = (selectedItem) => {
        if(selectedItem == this.state.tuner_type[0]){
            this.props.navigation.dispatch(StackActions.replace('4SMTuner'));
            return this.state.tuner_type[0];
        }
        else if(selectedItem == this.state.tuner_type[1]){
            this.props.navigation.dispatch(StackActions.replace('6SMTuner'));
            return this.state.tuner_type[1]
        }
        else if(selectedItem == this.state.tuner_type[2]){
            this.props.navigation.dispatch(StackActions.replace('Chromatic'));
            return this.state.tuner_type[2]
        }
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{marginTop:80, marginLeft:20}}>
                    <SelectDropdown 
                        data={this.state.tuner_type}
                        onSelect={() => {}}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return this.selectTuner(selectedItem)
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        defaultButtonText={this.state.tuner_type[0]}
                        buttonStyle={styles.DropDownStyle}
                        buttonTextStyle={styles.drops}
                        rowTextStyle={{fontSize: 15}}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.TypeButtonStyle,
                            {marginTop:-45, marginLeft: 190}]}
                    onPress={()=>this.props.navigation.dispatch(StackActions.replace('4SMTuner'))}
                >
                    <Text style={[styles.TextStyle2, {margin:7}]}>Manual</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.TypeButtonStyle,
                        {width:90, marginTop:-40, marginLeft: 265}]}
                    onPress={()=>this.props.navigation.dispatch(StackActions.replace('4SATuner'))}
                >
                    <Text style={[styles.TextStyle2, {margin:7}]}>Automatic</Text>
                </TouchableOpacity>

                <ImageBackground source={require('../../assets/4String.png')} resizeMode='contain' style={styles.Tunerstyle}>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle,
                                {marginTop:110, marginLeft: 140}]} 
                        activeOpacity = {.9} 
                        onPress={this.playE1}
                    >
                        <Text style={styles.TextStyle}>E</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle, 
                                {marginLeft: 90}]} 
                        activeOpacity = {.9} 
                        onPress={this.playA}
                    >
                        <Text style={styles.TextStyle}>A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle,
                                {marginLeft: 50}]} 
                        activeOpacity = {.9}
                        onPress={this.playD}
                    >
                        <Text style={styles.TextStyle}>D</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle, 
                                {marginLeft: 20}]} 
                        activeOpacity = {.9}
                        onPress={this.playG}
                    >
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
        width:150,
        backgroundColor: '#55B7AD'
    },
    SoundButtonStyle: {
        width:50,
        height:50,
        borderWidth:1,
        borderRadius:50,
        borderColor: '#55B7AD',
        backgroundColor: '#d4f3ee',
        marginTop: 20,
    },
    TextStyle: {
        margin: 12,

        alignSelf: 'center',
    },

    TextStyle2: {
        margin: 12,
        color:'white',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf:'center',
    },
    Tunerstyle: {
        marginBottom:-50,
        marginLeft: 30,
        width:'100%',
        height:'100%',
        alignSelf: 'center',
    },
    TypeButtonStyle: {
        width:70,
        height:40,
        backgroundColor: '#55B7AD'
    },
    drops:{
        fontSize: 15,
        color: "white",
        fontWeight: 'bold',

    },
});