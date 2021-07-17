import { ActionTypes } from "../Constants/ActionTypes";

const initialState = [];

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, dato: payload };

    default:
      return state;
  }
};
