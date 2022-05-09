import React, {Component} from "react";
import { Text, ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, Alert, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { StackActions } from "@react-navigation/native";

export default class _4SATuner extends Component {

    
    constructor(){
        super();
        // setting the state of this screen and a laoding the dropdown state
        this.state = {
            playedNote: "",
            tuner_type: ["4 String Tuner", "6 String Tuner", "Chromatic Tuner"]
        }
    }

    // plays E string sound back to the user 
    SoundEButton = () => {
        this.setState({playedNote: "E"});
    }

    // plays A string sound back to the user 
    SoundAButton = () => {
        this.setState({playedNote: "A"});
    }

    // plays D string sound back to the user 
    SoundDButton = () => {
        this.setState({playedNote: "D"});
    }

    // plays G string sound back to the user 
    SoundGButton = () => {
        this.setState({playedNote: "G"});
    }

    // temporary function that gets called when the user asks the app to record on the tuner
    record = () => {
        Alert.alert("recording");
    }

    // functions to change the screen based on the user's slecetion in the drop down menu (Selected item being the user's choice)
    selectedTuner = (selectedItem) =>{
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
                <TouchableOpacity style={{marginTop:160, marginLeft:20}}>
                    {/* screen selector dropdown */}
                    <SelectDropdown 
                        data={this.state.tuner_type}
                        onSelect={() => {}}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return this.selectedTuner(selectedItem)
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        defaultButtonText={this.state.tuner_type[0]}
                        buttonStyle={styles.DropDownStyle}
                        buttonTextStyle={{fontSize:15}}
                        rowTextStyle={{fontSize: 15}}
                    />
                </TouchableOpacity>

                {/* Button that switches to the Manual tuner for the 4 string tuner */}
                <TouchableOpacity
                    style={[styles.TypeButtonStyle, 
                            {marginTop:-45, marginLeft: 190}]}
                    onPress={()=>this.props.navigation.dispatch(StackActions.replace('4SMTuner'))}
                >
                    <Text style={styles.TextStyle}>Manual</Text>
                </TouchableOpacity>

                {/* Button that switches to the Automatic tuner for the 4 string tuner  */}
                <TouchableOpacity
                    style={[styles.TypeButtonStyle, 
                        {width:90, marginTop:-40, marginLeft: 265}]}
                    onPress={()=>this.props.navigation.dispatch(StackActions.replace('4SATuner'))}
                >
                    <Text style={styles.TextStyle}>Automatic</Text>
                </TouchableOpacity>

                <View style={styles.NotePlayedContainer}>
                    <Text style={[styles.TextStyle, {margin:20, fontSize:30}]}>{this.state.playedNote}</Text>
                </View>

                {/* Button for user to request to begin recording */}
                <TouchableOpacity
                    style={[styles.RecordingButton, {marginLeft: 250}]}
                    activeOpacity = {.9} 
                    onPress={this.record}
                >
                    <Text style={[styles.TextStyle, {fontSize:11}]}>Start Recording</Text>
                </TouchableOpacity>

                {/* 4 String tuner background image */}
                <ImageBackground source={require('../../assets/4String.png')} resizeMode='contain' style={styles.Tunerstyle}>
                    // Button to play the sound for the E string
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle,
                                {marginTop:35, marginLeft: 130}]} 
                        activeOpacity = {.9} 
                        onPress={this.SoundEButton}
                    >
                        <Text style={styles.TextStyle}>E</Text>
                    </TouchableOpacity>
    
                    {/* Button to play the sound for the A string */}
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle, 
                                {marginTop:25, marginLeft: 85}]} 
                        activeOpacity = {.9} 
                        onPress={this.SoundAButton}
                    >
                        <Text style={styles.TextStyle}>A</Text>
                    </TouchableOpacity>

                    {/* Button to play the sound for the D string */}
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle,
                                {marginTop:25, marginLeft: 50}]} 
                        activeOpacity = {.9}
                        onPress={this.SoundDButton}
                    >
                        <Text style={styles.TextStyle}>D</Text>
                    </TouchableOpacity>

                    {/* Button to play the sound for the G string */}
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle, 
                                {marginTop:20, marginLeft: 15}]} 
                        activeOpacity = {.9}
                        onPress={this.SoundGButton}
                    >
                        <Text style={styles.TextStyle}>G</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
        )
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
    Tunerstyle: {
        marginTop: 50,
        marginBottom:-30,
        width:'95%',
        height:'85%',
        alignSelf: 'center',
    },
    NotePlayedContainer: {
        width: 100,
        height: 100,
        marginTop: 50,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: 'green',
        textAlign: 'center',
        alignSelf:'center'
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
    RecordingButton: {
        width:90, 
        height: 55,
        padding: 2,
        backgroundColor: '#d4f3ee',
        borderRadius : 50,
        borderWidth: 2,
        borderColor: '#55B7AD',
        marginTop:-80, 
        marginLeft: 300
    },
    SoundButtonStyle: {
        width:40,
        height:40,
        borderWidth:1,
        borderRadius:50,
        borderColor: '#55B7AD',
        backgroundColor: '#d4f3ee',
    },
    TextStyle: {
        fontSize: 15,
        // position:'absolute',
        color: "white",
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
