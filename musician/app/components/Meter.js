import React, { PureComponent } from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";
import colors from "../config/colors";

// Meter component for the app that can be adde to a page in order measure and display the accuracy 
// of the a recorded and tuned note
export default class Meter extends PureComponent {
  // set the state of the meter with the cents (the differnec betwen in tune note and recorded sound)
  //
  // the state contains the values of :
  //  cents - how close the recorded frequency is to the detcted note
  //  pointerstyle - the style atacthed to the animated elements that can be apdated by the interpolator

  state = {
    cents: new Animated.Value(0),
    pointerStyle: colors.startGreen
  };


  // initialise and update the state when the compoent is updated
  componentDidUpdate() {
    Animated.timing(this.state.cents, {
      toValue: this.props.cents,
      duration: 100,
      // useNativeDriver: true,
    }).start();

    this.state.cents.setValue(this.props.cents);
  }


  // render the metter that is to be added to some component in the App
  render() {
      // create a system that will interpolate and animate the color and position 
      // of the meter in the in this omponent
      //
      // This animates the cents state value in the range of -50 to 50 
      //
      const Metercolor = this.state.cents.interpolate({
        inputRange: [-50, -25,0,25, 50],
        outputRange: [colors.stopRed, colors.midYellow, colors.startGreen, colors.midYellow, colors.stopRed],
      });

      console.log("Animated value is: "+this.state.cents);
    
      const trans = this.state.cents.Value *2;
      console.log("Trans value: "+trans);

      this.state.pointerStyle = {
        backgroundColor: Metercolor,
        transform:[
          { translateX: this.state.cents }
        ]
      };

      console.log(Metercolor)

    return (
      <View style={style.origin} >
        <View style={[style.circle, style.border]}></View>
        <Animated.View
          style={[style.circle, this.state.pointerStyle]}
        />
      </View>
    );
  }
}

// styles for the meter component
const style = StyleSheet.create({
  circle: {
    position: "absolute",
    backgroundColor: colors.ghostGrey,
    // backgroundColor:"rgba(106, 180, 139, 1)",
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').width - 50,
    borderRadius: (Dimensions.get('window').width - 50)/2
  },
  origin: {
    position: "absolute",
    height:"100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
});