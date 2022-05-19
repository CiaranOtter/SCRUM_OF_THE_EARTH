import React, { PureComponent } from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";
import ThemedListItem from "react-native-elements/dist/list/ListItem";
import colors from "../config/colors";

export default class Meter extends PureComponent {
  state = {
    cents: new Animated.Value(0),
    pointerStyle: colors.startGreen
  };

  componentDidUpdate() {
    Animated.timing(this.state.cents, {
      toValue: this.props.cents,
      duration: 100,
      // useNativeDriver: true,
    }).start();

    this.state.cents.setValue(this.props.cents);
  }

  render() {
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
        {/* <View style={[style.scale, style.scale_5, style.strong]} />
        <View style={[style.scale, style.scale_4]} />
        <View style={[style.scale, style.scale_3]} />
        <View style={[style.scale, style.scale_2]} />
        <View style={[style.scale, style.scale_1]} />
        <View style={[style.scale, style.strong]} />
        <View style={[style.scale, style.scale1]} />
        <View style={[style.scale, style.scale2]} />
        <View style={[style.scale, style.scale3]} />
        <View style={[style.scale, style.scale4]} />
        <View style={[style.scale, style.scale5, style.strong]} /> */}
      </View>
    );
  }
}

const style = StyleSheet.create({
  meter: {
    height: 200,
    marginBottom: 40,
  },
  border:{
    // borderWidth: 1
  },
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