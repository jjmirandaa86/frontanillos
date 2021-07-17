import { ActionTypes } from "../Constants/ActionTypes";

export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};

export const getUser = (user) => {
  return {
    type: ActionTypes.GET_USER,
    payload: user,
  };
};
