import { increaseNumber, decreaseNumber } from "./actionCreator";
import Toast from "../api/toast";

/*
 * action worker, is a flow of business logic
 */

export const increaseNumberWorker = () => {
  return (dispatch, getState) => {
    const {
      numberReducer: { number }
    } = getState();

    if (0 <= number && number < 10) {
      dispatch(increaseNumber());
      return;
    }

    //error toast
    Toast.show("!!!number is Less than or equal to 10");
  };
};

export const decreaseNumberWorker = () => {
  return (dispatch, getState) => {
    const {
      numberReducer: { number }
    } = getState();

    if (10 >= number && number > 0) {
      dispatch(decreaseNumber());
      return;
    }

    //error toast
    Toast.show("!!!number is Greater than or equal to 0");
  };
};
