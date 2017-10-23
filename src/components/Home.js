import React, { Component } from "react";
import { AppRegistry, StyleSheet, Button } from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate("Profile", { name: "Jane" })}
      />
    );
  }
}

AppRegistry.registerComponent("mineApp", () => mineApp);
