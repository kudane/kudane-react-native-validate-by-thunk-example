import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import Toolbar from "./components/Toolbar";
import ShowNumberContainer from "./containers/showNumber";
import ButtonsContainer from "./containers/buttons";

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Toolbar />
          <ShowNumberContainer />
          <ButtonsContainer />
        </View>
      </Provider>
    );
  }
}
