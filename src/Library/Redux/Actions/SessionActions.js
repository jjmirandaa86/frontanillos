import { ActionTypes } from "../Constants/ActionTypes";

export const getSession = (session) => {
  return {
    type: ActionTypes.GET_SESSION,
    payload: session,
  };
};

export const setSession = (session) => {
  return {
    type: ActionTypes.SET_SESSION,
    payload: session,
  };
};
