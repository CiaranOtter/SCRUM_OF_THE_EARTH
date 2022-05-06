import React, { Component } from "react";
import { Text, ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, Alert, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { StackActions } from "@react-navigation/native";

export default class _4SMTuner extends Component {   
    
    constructor(){
        super();
        this.state = {
            tuner_type: ["4 String Tuner", "6 String Tuner", "Chromatic Tuner"]
        }
    }
    
    SoundEButton = () => {
        Alert.alert("E");
    }

    SoundAButton = () => {
        Alert.alert("A");
    }

    SoundDButton = () => {
        Alert.alert("D");
    }

    SoundGButton = () => {
        Alert.alert("G");
    }

    selectedTuner = (selectedItem) => {
        if(selectedItem == this.state.tuner_type[0]){
            this.props.navigation.dispatch(StackActions.replace('4SMTuner'));
            return this.state.tuner_type[0];
        }
        else if(selectedItem == this.state.tuner_type[1]){
            this.props.navigation.dispatch(StackActions.replace('6SMTuner'));
            return this.state.tuner_type[1]
        }
        else if(selectedItem == this.state.tuner_type[2]){
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
                            {marginTop:-45, marginLeft: 225}]}
                    onPress={()=>this.props.navigation.dispatch(StackActions.replace('4SMTuner'))}
                >
                    <Text style={[styles.TextStyle, {margin:7}]}>Manual</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.TypeButtonStyle, 
                        {width:90, marginTop:-40, marginLeft: 300}]}
                    onPress={()=>this.props.navigation.dispatch(StackActions.replace('4SATuner'))}
                >
                    <Text style={[styles.TextStyle, {margin:7}]}>Automatic</Text>
                </TouchableOpacity>

                <ImageBackground source={require('../../assets/4String.png')} resizeMode='contain' style={styles.Tunerstyle}>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle,
                                {marginTop:110, marginLeft: 140}]} 
                        activeOpacity = {.9} 
                        onPress={this.SoundEButton}
                    >
                        <Text style={styles.TextStyle}>E</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle, 
                                {marginLeft: 90}]} 
                        activeOpacity = {.9} 
                        onPress={this.SoundAButton}
                    >
                        <Text style={styles.TextStyle}>A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle,
                                {marginLeft: 50}]} 
                        activeOpacity = {.9}
                        onPress={this.SoundDButton}
                    >
                        <Text style={styles.TextStyle}>D</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.SoundButtonStyle, 
                                {marginLeft: 20}]} 
                        activeOpacity = {.9}
                        onPress={this.SoundGButton}
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
        backgroundColor: '#55B7AD',
    },
});