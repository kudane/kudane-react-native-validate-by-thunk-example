import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import Btn from "../components/Btn";
import {
  increaseNumberWorker,
  decreaseNumberWorker
} from "../actions/actionWorker";

const mapDispatchToProps = {
  increaseNumberWorker,
  decreaseNumberWorker
};

export default connect(
  null,
  mapDispatchToProps
)(props => (
  <View
    style={{
      flex: 2,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    }}
  >
    <Btn btnTitle="increase" callback={props.increaseNumberWorker} />
    <Btn btnTitle="decrease" callback={props.decreaseNumberWorker} />
  </View>
));
