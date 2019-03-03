import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import Toolbar from "./components/Toolbar";
import DisplayContainer from "./containers/displayContainer";
import ButtonContainer from "./containers/buttonContainer";

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Toolbar />
          <DisplayContainer />
          <ButtonContainer />
        </View>
      </Provider>
    );
  }
}
