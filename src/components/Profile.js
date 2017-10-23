import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image } from "react-native";

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile"
  };
  render() {
    const { navigate } = this.props.navigation;
    return <Text>Test</Text>;
  }
}

AppRegistry.registerComponent("mineApp", () => mineApp);
