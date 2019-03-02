import React from "react";
import { Button } from "react-native";

const Btn = ({ callback, btnTitle }) => (
  <Button onPress={callback} title={btnTitle} color="#841584" />
);

export default Btn;
