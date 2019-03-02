import { INCREASE_NUMBER, DECREASE_NUMBER } from "../actions/actionTypes";

const state = (state = { number: 0 }, action) => {
  switch (action.type) {
    case INCREASE_NUMBER:
      return { number: state.number + 1 };
    case DECREASE_NUMBER:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default state;
