import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function ChromaticScreen(){

    return (

        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>A</Text>
          <Text style={styles.indicator}>Too High/Too Low/Perfect</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 300,
    color: 'gray',
  },
  indicator:{
    fontSize: 24
  }
});
