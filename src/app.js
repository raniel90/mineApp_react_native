import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList
} from "react-native";
import Post from "./components/Post";
import HomeScreen from "./components/Home";
import ProfileScreen from "./components/Profile";
import { StackNavigator } from "react-navigation";

const width = Dimensions.get("screen").width;

class mineApp extends Component {
  constructor() {
    super();
    this.state = {
      fotos: []
    };
  }

  static navigationOptions = {
    title: "Feed"
  };

  componentDidMount() {
    fetch("https://instalura-api.herokuapp.com/api/public/fotos/rafael")
      .then(resposta => resposta.json())
      .then(json => this.setState({ fotos: json }));
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        keyExtractor={item => item.id}
        data={this.state.fotos}
        renderItem={({ item }) => <Post foto={item} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0
  }
});

const App = StackNavigator({
  Home: { screen: mineApp },
  Profile: { screen: ProfileScreen }
});

export default () => {
  AppRegistry.registerComponent("mineApp", () => App);
};
