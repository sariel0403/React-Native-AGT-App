import { Component } from "react";
import { StyleSheet } from "react-native";

import Splash from "./pages/Splash";
import MainNavigator from "./pages/MainNavigator";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }

  render() {
    var mainScreen = <Splash />;
    setTimeout(() => {
      this.setState({ timePassed: true });
    }, 2000);
    if (!this.state.timePassed) {
      return mainScreen;
    } else {
      mainScreen = <MainNavigator />;
    }
    return mainScreen;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});