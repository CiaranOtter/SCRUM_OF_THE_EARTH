import React, {Component} from "react";
import { Text, ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, Alert, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { StackActions } from "@react-navigation/native";

export default class _4SATuner extends Component {

    
    constructor(){
        super();
        this.state = {
            playedNote: "",
            tuner_type: ["4 String Tuner", "6 String Tuner", "Chromatic Tuner"]
        }
    }

    SoundEButton = () => {
        this.setState({playedNote: "E"});
    }

    SoundAButton = () => {
        this.setState({playedNote: "A"});
    }

    SoundDButton = () => {
        this.setState({playedNote: "D"});
    }

    SoundGButton = () => {
        this.setState({playedNote: "G"});
    }

    record = () => {
        Alert.alert("recording");
    }

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

                <TouchableOpacity
                    style={[styles.TypeButtonStyle, 
                            {marginTop:-45, marginLeft: 190}]}
                    onPress={()=>this.props.navigation.dispatch(StackActions.replace('4SMTuner'))}
                >
                    <Text style={styles.TextStyle}>Manual</Text>
                </TouchableOpacity>

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

                <TouchableOpacity
                    style={[styles.RecordingButton, {marginLeft: 250}]}
                    activeOpacity = {.9} 
                    onPress={this.record}
                >
                    <Text style={[styles.TextStyle, {fontSize:11}]}>Start Recording</Text>
                </TouchableOpacity>

                <ImageBackground source={require('../../assets/4String.png')} resizeMode='contain' style={styles.Tunerstyle}>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle,
                                {marginTop:35, marginLeft: 130}]} 
                        activeOpacity = {.9} 
                        onPress={this.SoundEButton}
                    >
                        <Text style={styles.TextStyle}>E</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle, 
                                {marginTop:25, marginLeft: 85}]} 
                        activeOpacity = {.9} 
                        onPress={this.SoundAButton}
                    >
                        <Text style={styles.TextStyle}>A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle,
                                {marginTop:25, marginLeft: 50}]} 
                        activeOpacity = {.9}
                        onPress={this.SoundDButton}
                    >
                        <Text style={styles.TextStyle}>D</Text>
                    </TouchableOpacity>
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
        margin: 7,
        textAlign: 'center'
    }
});