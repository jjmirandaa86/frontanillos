import { ActionTypes } from "../Constants/ActionTypes";

const initialState = [];

export const sessionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SESSION:
      return { ...state, payload };

    default:
      return state;
  }
};
