import React from "react";
import { View, Text } from "react-native";

const ShowNumber = ({ number }) => (
  <View style={{ flex: 1, alignItems: "center" }}>
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 82 }}>{number}</Text>
    </View>
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 16 }}>Range: 1 - 10</Text>
    </View>
  </View>
);

export default ShowNumber;
