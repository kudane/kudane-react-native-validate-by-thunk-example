import { INCREASE_NUMBER, DECREASE_NUMBER } from "./actionTypes";

/*
 * action creator static
 */

export const increaseNumber = () => ({ type: INCREASE_NUMBER });

export const decreaseNumber = () => ({ type: DECREASE_NUMBER });
