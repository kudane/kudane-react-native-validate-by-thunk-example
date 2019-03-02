import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import ShowNumber from "../components/ShowNumber";

const mapStateToProps = ({ numberReducer: { number } }) => ({
  number
});

export default connect(
  mapStateToProps,
  null
)(props => (
  <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
    <ShowNumber number={props.number} />
  </View>
));
