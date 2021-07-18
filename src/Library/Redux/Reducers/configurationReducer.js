import axios from "axios";
import { ActionTypes } from "../Constants/ActionTypes";

const configurationInitialState = [];

const requestAxios = {
  method: "get",
  url: process.env.REACT_APP_LANGUAGE_GET_ALL,
  responseType: "json",
  credentials: "include",
  mode: "no-cors",
  headers: {
    Accept: "*/*",
  },
};

axios(requestAxios)
  .then((response) => {
    console.log(response);
    this.configurationInitialState = response.data.data;
  })
  .catch((e) => {
    console.log("Catch API >>" + e);
  })
  .finally(() => {
    console.log("Finalizo consulta");
  });

export const configurationReducer = (
  state = configurationInitialState,
  { type, payload }
) => {
  console.log(configurationInitialState);
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
