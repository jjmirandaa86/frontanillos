import { TYPES } from "../Actions/sessionActions";

const initialState = [];

export const sessionReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case "":
      return { ...state, payload };

    default:
      return state;
  }
};
