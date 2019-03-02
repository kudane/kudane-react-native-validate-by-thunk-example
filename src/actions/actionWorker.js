import { increaseNumber, decreaseNumber } from "./actionCreator";

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
  };
};
