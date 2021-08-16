import { ActionTypes } from "../Constants/ActionTypes";

export const getLocation = (location) => {
  return {
    type: ActionTypes.GET_LOCATION,
    payload: location,
  };
};

export const setLocation = (location) => {
  return {
    type: ActionTypes.SET_LOCATION,
    payload: location,
  };
};
