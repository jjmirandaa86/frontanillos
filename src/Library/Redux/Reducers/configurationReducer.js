import { ActionTypes } from "../Constants/ActionTypes";

const configurationInitialState = [];

export const configurationReducer = (
  state = configurationInitialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_API_LANGUAGE_SET_STATE: {
      return { ...state, language: payload };
    }

    case ActionTypes.SET_API_CONFIGURATION_SET_STATE: {
      return { ...state, foreignExchange: payload };
    }

    default:
      return state;
  }
};
