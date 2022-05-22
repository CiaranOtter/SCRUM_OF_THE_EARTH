import React, { Component } from "react";
import { Pressable, StyleSheet, Modal, FlatList, Alert, View, Text } from "react-native";


export default class PracticeScreen extends Component {
    constructor(){
        super();
        this.state = {
            addModalVisible: false,
            removeModalVisible: false,
            sound_type: [
                {key : "Kick"}, 
                {key : "Snare"}, 
                {key : "Open hat"},
                {key : "Tom"},
                {key : "Cymbal"},
                {key : "Bass"},
            ],
            currentlist: [],
        };
    }

    setAddModalVisible = (visible) => {
        this.setState({ addModalVisible: visible });
    }

    setRemoveModalVisible = (visible) => {
        this.setState({ removeModalVisible: visible });
    }

    AddSound = (item) => {
        if(this.state.currentlist.includes(item.key)){
            Alert.alert("Sound is already added.")
        }
        else{
            this.state.currentlist.push(item.key);
            Alert.alert("Added "+ item.key);
        }
    }

    RemoveSound = (item) => {
        Alert.alert("Removed "+ item);
        const filtered = this.state.currentlist.filter(itm => itm !== item)
        this.setState({currentlist: filtered})
    }

    AddItem = ({item}) => {
        return(
            <View>
                <View style={styles.container}>
                    <Text>{item.key}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            this.AddSound(item);
                        }}
                    >
                        <Text style={styles.textStyle}>+</Text>
                    </Pressable>
                </View>
                <View style={styles.divider}/>
            </View>
        )
    }

    RemoveItem = ({item}) => {
        return(
            <View>
                <View style={styles.container}>
                    <Text>{item}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            this.RemoveSound(item);
                        }}
                    >
                        <Text style={styles.textStyle}>-</Text>
                    </Pressable>
                </View>
                <View style={styles.divider}/>
            </View>
        )
    }

    render() {
        const { addModalVisible } = this.state;
        const { removeModalVisible } = this.state;

        return (
            <View style={styles.centeredView}>
                <Text style={styles.titletext}>Output Sounds</Text>
                <View style={{ padding: 20}}>
                    {this.state.currentlist.map((item, idx)=>(
                        <Text key={idx}  style={styles.sounds}>{item}</Text>
                    ))}
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={addModalVisible}
                    onRequestClose={() => {
                        this.setAddModalVisible(!addModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.titletext}>Add Sound</Text>
                            <FlatList
                                data={this.state.sound_type}
                                renderItem = {({item}) =>
                                    this.AddItem({item})
                                }
                            />
                            <Pressable 
                                style={styles.completebtn}
                                onPress={() => this.setAddModalVisible(!addModalVisible)}
                            >
                                <Text>Done</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.btn, {bottom: 80}]}
                    onPress={() => this.setAddModalVisible(true)}
                >
                    <Text style={styles.btntext}>+</Text>
                </Pressable>
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={removeModalVisible}
                    onRequestClose={() => {
                        this.setRemoveModalVisible(!removeModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.titletext}>Remove Sound</Text>
                            <FlatList
                                data={this.state.currentlist}
                                keyExtractor={({item, idx})=>idx}
                                renderItem = {({item, idx}) =>
                                    this.RemoveItem({item})
                                }
                            />
                            <Pressable 
                                style={styles.completebtn}
                                onPress={() => this.setRemoveModalVisible(!removeModalVisible)}
                            >
                                <Text>Done</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.btn, {bottom: 20}]}
                    onPress={() => this.setRemoveModalVisible(true)}
                >
                    <Text style={styles.btntext}>-</Text>
                </Pressable>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({    //styles for elements listed in Alphabetical order (with the exception of container - which is always on top)
    centeredView: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        width: 50,
        height: 50,
        right: 0,
        position: 'absolute',
        backgroundColor: "#d4f3ee",
        borderColor: "#55B7AD",
        borderRadius: 30,
        borderWidth: 1,
        alignSelf: "flex-end",
        marginEnd: 40,
    },
    btntext : {
        color: "#55B7AD",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    },
    modalView: {
        width:350,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    sounds:{
        flexDirection: 'column',
        display: 'flex', 
        marginTop: 5,
        width: 350,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
        backgroundColor: '#55B7AD',
        color: '#fff',
        borderRadius: 10,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },

    button: {
        width: 30,
        height: 30,
        borderRadius: 20,
        position: "absolute",
        marginLeft: 240,
        marginTop: -5,
        backgroundColor: "#d4f3ee",
    },
    container: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 20,
    },
    divider: {
        width:300,
        height:2,
        backgroundColor: "gray",
    },
    textStyle: {
        color: "#55B7AD",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    },
    titletext: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 20,
    },
    completebtn: {
        width: 70,
        height: 40,
        alignItems: "center",
        backgroundColor: "#d4f3ee",
        marginTop: 20,
        padding: 8,
        borderRadius: 15,
    },
});