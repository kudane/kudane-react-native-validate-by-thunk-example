import { ToastAndroid } from "react-native";

const show = message => {
  return ToastAndroid.show(message.toString(), ToastAndroid.SHORT);
};

export default {
  show
};
