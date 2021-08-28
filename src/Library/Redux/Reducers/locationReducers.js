import { ActionTypes } from "../Constants/ActionTypes";

const initialState = [];

export const locationReducers = (state = initialState, { type, payload }) => {
  console.log(type);
  console.log(payload);
  switch (type) {
    case ActionTypes.SET_LOCATION:
      console.log(state);
      console.log(payload);

      return { ...state, ...payload };

    default:
      return state;
  }
};
