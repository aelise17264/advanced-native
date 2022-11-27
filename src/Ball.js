// import { Animated } from 'react-native';

// Animated.Value.Animated
// Animated.Types.Sprint
// Animated.Components.View
import React, {Component} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

class Ball extends Component {
  UNSAFE_componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: {x: 200, y: 500},
      useNativeDriver: false,
    }).start();
  }
  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={this.styles.ball} />
      </Animated.View>
    );
  }
  styles = StyleSheet.create({
    ball: {
      height: 60,
      width: 60,
      borderRadius: 30,
      borderWidth: 30,
      borderColor: 'black',
    },
  });
}

export default Ball;
