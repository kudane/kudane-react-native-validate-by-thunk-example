import React from "react";
import { View, Text } from "react-native";

const ShowNumber = (props) => (
  <View style={{ flex: 1 }}>
    <Text style={{ fontSize: 82 }}>{props.number || 0}</Text>
  </View>
);

export default ShowNumber;
